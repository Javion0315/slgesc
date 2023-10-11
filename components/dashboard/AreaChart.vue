<template>
	<div class="bg-dark-black200/80 p-4 rounded-lg mt-4">
		<CommonLoading v-if="isLoading" />
		<div class="flex items-center justify-end">
			<div class="text-lg">日期查詢：</div>
			<v-date-picker v-model="date" color="yellow" :max-date="new Date()">
				<template v-slot="{ inputValue, inputEvents }">
					<input
						class="bg-dark-black200 border px-2 py-1 rounded text-center"
						:value="inputValue"
						v-on="inputEvents"
					/>
				</template>
			</v-date-picker>
		</div>

		<highchart
			class="h-[400px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			:options="chartOptions"
			v-if="chartOptions.series"
		></highchart>
	</div>
</template>

<script>
import { getHistoryTrend } from "~/api/main";
export default {
	name: "index",
	data() {
		return {
			chartOptions: {},
			isLoading: false,
			date: new Date(),
			inputValue: new Date(),
		};
	},
	watch: {
		date() {
			this.getData();
		},
	},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			let start = this.$moment().subtract(3, "days").format("x");
			let end = this.$moment(this.date).format("x");
			let monitor = "RdCenter:ITRI:exhibition:K:E:SL";
			let monitorType = "generating";
			let tableType = "Min";
			this.isLoading = true;
			getHistoryTrend(monitor, monitorType, tableType, start, end)
				.then((res) => {
					let data = res.data;
					let formatSeries = null;
					if (data) {
						formatSeries = data.series;
						for (let i = 0; i < formatSeries.length; i++) {
							let formatData = [];
							formatData = formatSeries[i].data.map((item) => {
								return [this.$moment(item[0]).format("MMM Do"), item[1]];
							});

							if (formatSeries[i].name === "沙崙區_發電量") {
								formatSeries[i].name = "日照度";
								formatSeries[i].type = "spline";
							} else {
								formatSeries[i].type = "area";
							}
							formatSeries[i].data = formatData;
						}

						this.chartOptions = {
							credits: {
								enabled: false,
							},
							legend: {
								itemStyle: {
									color: "#FFF",
									fontWeight: "normal",
								},
							},
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
							chart: {
								backgroundColor: "transparent",
								zoomType: "xy",
							},
							title: {
								text: "即時發電資訊",
								style: {
									color: "#FFF",
									font: "bold 24px '微軟正黑體'",
								},
							},
							subtitle: {
								text: data.title.text.replace("前24小時", "前72小時"),
								style: {
									color: "#FFF",
									font: "normal 16px '微軟正黑體'",
								},
							},
							xAxis: {
								type: "datetime",
								dateTimeLabelFormats: {
									day: "%m月%d日", // 配置日期格式
								},
								labels: {
									style: {
										color: "#FFF",
									},
								},
							},
							yAxis: {
								title: {
									text: "發電量 (kW)",
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
							tooltip: {
								headerFormat: "{point.key:%Y/%m/%d %A}<br/>",
								// pointFormat:
								// 	"{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
							},
							plotOptions: {
								area: {
									marker: {
										enabled: false,
										symbol: "circle",
										radius: 2,
										states: {
											hover: {
												enabled: true,
											},
										},
									},
									pointInterval: 3000 * 200,
									pointStart: this.$moment().subtract(3, "days"),
								},
								spline: {
									marker: {
										// enabled: true,
										lineWidth: 3,
										symbol: "square",
										lineColor: "#204C71",
										symbol:
											"url(https://www.highcharts.com/samples/graphics/sun.png)",
									},
									pointInterval: 3000 * 200,
									pointStart: this.$moment().subtract(3, "days"),
								},
							},
							series: formatSeries,
						};
					}
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>
