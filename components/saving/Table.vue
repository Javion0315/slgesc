<template>
	<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
		<CommonLoading v-if="isLoading" />
		<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4">
			<highchart :options="chartOptions" v-if="chartOptions.series"></highchart>
			<highchart
				:options="chartThisOptions"
				v-if="chartThisOptions.series"
			></highchart>
		</div>

		<div class="inline-block min-w-full shadow-md overflow-hidden mt-4">
			<table class="min-w-full leading-normal max-sm:hidden">
				<thead>
					<tr>
						<th
							class="px-5 py-2 border-b-2 border-gray-600 bg-dark text-left text-base font-semibold text-neutral-300 uppercase tracking-wider"
							v-for="item in thList"
							:key="item.value"
						>
							{{ item.label }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tableData" :key="item.ID">
						<td class="px-5 py-2 border-b border-gray-600 bg-dark text-base">
							{{ item.ID }}
						</td>
						<td class="px-5 py-2 border-b border-gray-600 bg-dark text-base">
							{{ item.area }}
						</td>
						<td class="px-5 py-2 border-b border-gray-600 bg-dark text-base">
							{{ item.lastMonth }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-lg text-dark-yellow200 font-bold"
						>
							{{ item.thisMonth }}
						</td>
					</tr>
				</tbody>
			</table>
			<div class="hidden max-sm:flex flex-col">
				<div
					class="px-5 py-2 border-b border-gray-600 bg-dark text-base leading-8"
					v-for="val in tableData"
					:key="val.name"
				>
					<div>
						編號 <span>{{ val.ID }}</span>
					</div>
					<div>
						單位名稱 <span>{{ val.area }}</span>
					</div>
					<div>
						去年同期度數 <span>{{ val.lastMonth }}</span>
					</div>
					<div>
						本期用電度數
						<span class="text-lg text-dark-yellow200 font-bold">{{
							val.thisMonth
						}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getConsumptionCompare } from "~/api/main";

export default {
	data() {
		return {
			isLoading: false,
			chartOptions: {},
			chartThisOptions: {},
			thList: [
				{ label: "編號", value: "ID" },
				{ label: "場館區域", value: "area" },
				{ label: "去年同期度數", value: "lastMonth" },
				{ label: "本期用電度數", value: "thisMonth" },
			],
			tableData: [],
		};
	},
	mounted() {
		let titleList = [
			{ name: "資安暨智慧科技研發大樓", code: "RdCenter" },
			{ name: "示範場域", code: "ITRI" },
			{ name: "會展中心", code: "exhibition" },
			{ name: "工研院K區", code: "K" },
			{ name: "中研院南部院區", code: "E" },
			{ name: "臺灣智駕測試實驗室", code: "C1" },
			{ name: "智慧綠能循環住宅園區", code: "住" },
			{ name: "產業專用區", code: "B" },
		];
		let idList = ["C", "D", "A", "K", "E", "C1", "住", "B"];
		this.isLoading = true;
		getConsumptionCompare()
			.then((res) => {
				let data = res.data.consuming; // 用電量
				let last = data.lastMonth;
				let thisMonthTotal = 0;
				let thisVal = data.thisMonth;
				if (data) {
					// RdCenter: 資安暨智慧科技研發專區, ITRI: 綠能科技示範場域, Exhibition: 會展中心
					titleList.forEach((item, index) => {
						let value = {
							ID: idList[index],
							area: item.name,
							lastMonth: last[item.code] || "N/A",
							thisMonth: thisVal[item.code] || "N/A",
						};
						let thisMonthItem = thisVal[item.code];
						if (thisMonthItem !== undefined) {
							thisMonthTotal += thisVal[item.code];
						}
						this.tableData.push(value);
					});
					this.getChart();
					this.$emit("consuming-total", thisMonthTotal);
				}
			})
			.finally(() => {
				this.isLoading = false;
			});
	},
	methods: {
		getChart() {
			let lastFormatSeries = [];
			let thisFormatSeries = [];
			this.tableData.forEach((item) => {
				let lastMonth = item.lastMonth === "N/A" ? 0 : item.lastMonth;
				let thisMonth = item.thisMonth === "N/A" ? 0 : item.thisMonth;
				let lastData = [item.ID, lastMonth];
				let thisData = [item.ID, thisMonth];
				lastFormatSeries.push(lastData);
				thisFormatSeries.push(thisData);
			});
			this.chartOptions = this.chart(lastFormatSeries, "去年同期度數");
			this.chartThisOptions = this.chart(thisFormatSeries, "本期用電度數");
		},
		chart(formatSeries, title) {
			return {
				credits: {
					enabled: false,
				},
				legend: {
					enabled: false,
				},

				chart: {
					type: "column",
					backgroundColor: "transparent",
				},
				xAxis: {
					type: "category",
					labels: {
						style: {
							color: "#FFF",
						},
					},
				},
				yAxis: {
					title: {
						text: "用電度數",
						style: {
							color: "#FFF",
							font: "normal 16px '微軟正黑體'",
						},
					},
					labels: {
						style: {
							color: "#FFF",
						},
					},
				},
				title: {
					text: title,
					style: {
						color: "#FFF",
						font: "normal 20px '微軟正黑體'",
					},
				},
				tooltip: {
					headerFormat: "{point.key: %A}<br/>",
					style: {
						display: "none",
						font: "normal 20px '微軟正黑體'",
					},
				},
				series: [
					{
						data: formatSeries,
						colorByPoint: true,
						groupPadding: 0,
						colors: [
							"#4F6947",
							"#856C2D",
							"#477880",
							"#88522E",
							"#813731",
							"#204C71",
							"#6D3265",
							"#483F60",
							"#385331",
							"#766210",
						],
						dataLabels: {
							enabled: true,
							color: "#FFFFFF",
							align: "center",
							format: "{point.y:.1f}", // one decimal
							y: 10, // 10 pixels down from the top
							style: {
								fontSize: "13px",
								fontFamily: "Verdana, sans-serif",
							},
						},
					},
				],
			};
		},
	},
};
</script>
