<template>
	<div class="bg-dark-black200/80 p-4 rounded-lg mt-4">
		<CommonLoading v-if="isLoading" />
		<highchart
			class="h-[400px] relative left-1/2 transform -translate-x-1/2"
			:options="chartOptions"
			v-if="chartOptions.series"
		></highchart>
	</div>
</template>

<script>
import { getPowerMonthSummary } from "~/api/main";
export default {
	name: "ColumnChart",
	data() {
		return {
			chartOptions: {},
			isLoading: false,
			savingList: [],
		};
	},

	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			let year = this.$moment().year();
			let month = this.$moment().format("M");
			this.isLoading = true;
			getPowerMonthSummary(year, month)
				.then((res) => {
					let data = res.data;
					// 把 K 移到最後
					let element = data.splice(3, 1)[0];
					data.push(element);
					let categories = ["C區", "D區", "A區", "K棟", "E區", "住區", "C1區"];
					let nameList = [
						"最高發電量",
						"最高用電量",
						"平均發電量",
						"平均用電量",
					];

					if (data) {
						let formatSeries = null;
						const names = [
							"maxGenerating",
							"maxConsuming",
							"avgGenerating",
							"avgConsuming",
						];
						let removeSL = data.filter((entry) => entry.monitorID !== 6);
						formatSeries = names.map((name, idx) => ({
							name: nameList[idx],
							data: removeSL.map((item) => item[name]),
						}));

						// 把 K 移到最後
						let category = categories.slice(0, data.length - 1);
						let k = category.splice(3, 1)[0];
						category.push(k);

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
								type: "column",
							},
							title: {
								text: "當月最高及平均之發、用電量",
								style: {
									color: "#FFF",
									font: "bold 24px '微軟正黑體'",
								},
							},
							subtitle: {
								text: "test",
								style: {
									color: "#FFF",
									font: "normal 16px '微軟正黑體'",
									display: "none",
								},
							},
							xAxis: {
								categories: category,
								crosshair: true,
								accessibility: {
									description: "Countries",
								},
								labels: {
									style: {
										color: "#FFF",
									},
								},
							},
							yAxis: {
								title: {
									text: "電量 (kW)",
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
