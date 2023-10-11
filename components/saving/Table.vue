<template>
	<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
		<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4">
			<highchart
				class="h-[400px]"
				:options="chartOptions"
				v-show="chartOptions.series"
			></highchart>
			<highchart
				class="h-[400px]"
				:options="chartThisOptions"
				v-show="chartThisOptions.series"
			></highchart>
		</div>

		<div class="inline-block min-w-full shadow-md overflow-hidden mt-4">
			<table class="min-w-full leading-normal max-sm:hidden">
				<thead>
					<tr>
						<th
							class="px-5 py-2 border-b-2 border-gray-600 bg-dark text-left text-base font-semibold text-neutral-300 normal-case tracking-wider"
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
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-lg text-dark-yellow200 font-bold"
						>
							{{ item.saving }}
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
						上月平均同期度數(kW) <span>{{ val.lastMonth }}</span>
					</div>
					<div>
						本期平均用電度數(kW)
						<span class="text-2xl text-dark-yellow200 font-bold">{{
							val.thisMonth
						}}</span>
					</div>
					<div>
						節電率 <span>{{ val.saving }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getConsumptionCompare, getPowerYearSummary } from "~/api/main";

export default {
	data() {
		return {
			isLoading: false,
			chartOptions: {},
			chartThisOptions: {},
			thList: [
				{ label: "編號", value: "ID" },
				{ label: "場館區域", value: "area" },
				{ label: "上月平均同期度數(kW)", value: "lastMonth" },
				{ label: "本期平均用電度數(kW)", value: "thisMonth" },
				{ label: "節電率", value: "saving" },
			],
			tableData: [],
			lastYearList: [],
			thisYearList: [],
		};
	},
	mounted() {
		let year = this.$moment().year();
		let lastYear = this.$moment().year() - 1;

		getPowerYearSummary(year).then((res) => {
			let data = res.data;
			if (data) {
				this.thisYearList = data.map((item, idx) => {
					if (idx !== 5) {
						return item.consuming;
					} else {
						return 0;
					}
				});
				getPowerYearSummary(lastYear).then((res) => {
					let data = res.data;
					if (data) {
						this.lastYearList = data.map((item, idx) => {
							if (idx !== 5) {
								return item.consuming;
							} else {
								return 0;
							}
						});
						this.compare();
					}
				});
			}
		});
	},
	methods: {
		compare() {
			let titleList = [
				{ name: "資安暨智慧科技研發大樓", code: "RdCenter" },
				{ name: "綠能科技示範場域", code: "ITRI" },
				{ name: "大臺南會展中心", code: "exhibition" },
				{ name: "工研院 k棟示範場所", code: "K" },
				{ name: "中研院南部院區", code: "E" },
				{ name: "智慧綠能循環住宅園區", code: "R" },
				{ name: "臺灣智駕測試實驗室", code: "C1" },
			];
			let idList = ["C", "D", "A", "K", "E", "R", "C1"];
			getConsumptionCompare().then((res) => {
				let data = res.data.consuming; // 用電量
				let last = data.lastMonth;
				let thisMonthTotal = 0;
				let thisVal = data.thisMonth;
				if (data) {
					// RdCenter: 資安暨智慧科技研發專區, ITRI: 綠能科技示範場域, Exhibition: 會展中心
					// 節電率 = (前一年同期用電量/計畫執行期間用電量)/前一年用電量 * 100%
					titleList.forEach((item, index) => {
						let lastMonth = last[item.code];
						let thisMonth = thisVal[item.code];
						// let lastMonth = this.lastYearList[index];
						// let thisMonth = this.thisYearList[index];
						let value = {
							ID: idList[index],
							area: item.name,
							lastMonth:
								lastMonth === undefined
									? "N/A"
									: idList[index] === "K"
									? lastMonth.toFixed(2)
									: lastMonth.toFixed(0),
							thisMonth:
								thisMonth === undefined
									? "N/A"
									: idList[index] === "K"
									? thisMonth.toFixed(2)
									: thisMonth.toFixed(0),
							saving: isNaN(
								this.lastYearList[index] / thisMonth / this.lastYearList[index]
							)
								? "N/A"
								: (
										(this.lastYearList[index] /
											thisMonth /
											this.lastYearList[index]) *
										100
								  ).toFixed(2) + "%",
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
			});
		},
		getChart() {
			let lastFormatSeries = [];
			let thisFormatSeries = [];
			this.tableData.forEach((item) => {
				let lastMonth = item.lastMonth === "N/A" ? 0 : item.lastMonth;
				let thisMonth = item.thisMonth === "N/A" ? 0 : item.thisMonth;
				let lastData = [item.ID, Number(lastMonth)];
				let thisData = [item.ID, Number(thisMonth)];
				lastFormatSeries.push(lastData);
				thisFormatSeries.push(thisData);
			});
			this.chartOptions = this.chart(lastFormatSeries, "上月平均同期度數(kW)");
			this.chartThisOptions = this.chart(
				thisFormatSeries,
				"本期平均用電度數(kW)"
			);
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
