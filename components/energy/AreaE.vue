<template>
	<div class="bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4">
		<CommonLoading v-if="isLoading" />
		<div
			class="text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"
		>
			中研院 E 區
		</div>
		<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4">
			<highchart :options="chartOptions" v-if="chartOptions.series"></highchart>
			<highchart
				:options="chartGreenPercentOptions"
				v-if="chartGreenPercentOptions.series"
			></highchart>
		</div>
	</div>
</template>

<script>
import { getHistoryTrend } from "~/api/main";

export default {
	props: {
		realtimeStatus: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			chartOptions: {},
			chartGreenPercentOptions: {},
			isLoading: true,
		};
	},
	mounted() {
		setTimeout(() => {
			this.getData();
		}, 500);
	},
	methods: {
		getData() {
			let data = this.realtimeStatus;
			if (data) {
				this.getPower();
				this.getGreenPercent();
			}
		},
		getPower() {
			let start = this.$moment().subtract(1, "days").format("x");
			let end = this.$moment().format("x");
			let monitor = "E";
			let monitorType = "generating:storing:consuming";
			let tableType = "Hour";
			getHistoryTrend(monitor, monitorType, tableType, start, end)
				.then((res) => {
					let data = res.data;
					if (data) {
						let formatSeries = data.series;
						for (let i = 0; i < formatSeries.length; i++) {
							let formatData = [];
							formatData = formatSeries[i].data.map((item) => {
								return [this.$moment(item[0]).format("MMM Do"), item[1]];
							});
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
							colors: ["#483F60", "#385331", "#766210"],
							chart: {
								type: "area",
								backgroundColor: "transparent",
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
							title: {
								style: {
									color: "#FFF",
									font: "normal 20px '微軟正黑體'",
									display: "none",
								},
							},
							yAxis: {
								title: {
									text: "KW",
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
								gridLineDashStyle: "Dash",
							},
							tooltip: {
								headerFormat: "{point.key:%Y/%m/%d %A}<br/>",
							},
							plotOptions: {
								area: {
									depth: 100,
									marker: {
										enabled: false,
										symbol: "circle",
										radius: 2,
										states: {
											hover: {
												enabled: true,
											},
											inactive: {
												enabled: false,
											},
										},
									},
									pointInterval: 3600 * 1000,
									pointStart: this.$moment().subtract(1, "days"),
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
		getGreenPercent() {
			let start = this.$moment().subtract(1, "days").format("x");
			let end = this.$moment().format("x");
			let monitor = "E";
			let monitorType = "greenPercent";
			let tableType = "Hour";
			getHistoryTrend(monitor, monitorType, tableType, start, end)
				.then((res) => {
					let data = res.data;
					if (data) {
						let formatSeries = data.series;
						for (let i = 0; i < formatSeries.length; i++) {
							let formatData = [];
							formatData = formatSeries[i].data.map((item) => {
								return [this.$moment(item[0]).format("MMM Do"), item[1]];
							});
							formatSeries[i].data = formatData;
						}

						this.chartGreenPercentOptions = {
							credits: {
								enabled: false,
							},
							legend: {
								itemStyle: {
									color: "#FFF",
									fontWeight: "normal",
								},
							},
							colors: ["#813731"],
							chart: {
								type: "column",
								backgroundColor: "transparent",
							},
							title: {
								style: {
									color: "#FFF",
									font: "normal 20px '微軟正黑體'",
									display: "none",
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
									text: "綠能滲透率 (%)",
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

							plotOptions: {
								column: {
									pointPadding: 0.2,
									borderWidth: 0,
									pointInterval: 3600 * 1000,
									pointStart: this.$moment().subtract(1, "days"),
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
