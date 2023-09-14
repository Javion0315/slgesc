<template>
	<div class="bg-dark-black200 p-1 rounded-lg text-neutral-100 mt-4">
		<CommonLoading v-if="isLoading" />
		<div
			class="text-2xl text-neutral-100 text-center border-b-2 border-gray-600 p-4"
		>
			中研院 E 區
		</div>
		<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4">
			<highchart
				:options="chartConsumingOptions"
				v-if="chartConsumingOptions.series"
			></highchart>
			<highchart
				:options="chartGeneratingOptions"
				v-if="chartGeneratingOptions.series"
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
			chartConsumingOptions: {},
			chartGeneratingOptions: {},
			isLoading: true,
			consuming: null,
			generating: null,
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
				this.consuming = ((data[4].consuming / (2400 + 3500)) * 100).toFixed(0);
				this.generating = data[4].generating;
				this.getConsuming();
				this.getGenerating();
			}
		},
		getConsuming() {
			let start = this.$moment().subtract(1, "days").format("x");
			let end = this.$moment().format("x");
			let monitor = "E";
			let monitorType = "consumingPercent";
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

						this.chartConsumingOptions = {
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
								type: "area",
								backgroundColor: "transparent",
							},
							xAxis: {
								type: "datetime",
								dateTimeLabelFormats: {
									day: "%m月%d日", // 配置日期格式
								},
							},
							yAxis: {
								title: {
									text: "契約容量占比 (%)",
									style: {
										color: "#FFF",
										font: "normal 16px '微軟正黑體'",
									},
								},
							},
							title: {
								text: `即時契約容量占比 ${this.consuming}%`,
								style: {
									color: "#FFF",
									font: "normal 20px '微軟正黑體'",
								},
							},
							tooltip: {
								headerFormat: "{point.key:%Y/%m/%d %A}<br/>",
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
		getGenerating() {
			let start = this.$moment().subtract(1, "days").format("x");
			let end = this.$moment().format("x");
			let monitor = "E";
			let monitorType = "generating";
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

						this.chartGeneratingOptions = {
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
								type: "area",
								backgroundColor: "transparent",
							},
							xAxis: {
								type: "datetime",
								dateTimeLabelFormats: {
									day: "%m月%d日", // 配置日期格式
								},
							},
							yAxis: {
								title: {
									text: "發電量 (KW)",
									style: {
										color: "#FFF",
										font: "normal 16px '微軟正黑體'",
									},
								},
							},
							title: {
								text: `即時發電量 ${this.generating} Kw`,
								style: {
									color: "#FFF",
									font: "normal 20px '微軟正黑體'",
								},
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
