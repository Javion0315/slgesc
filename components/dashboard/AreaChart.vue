<template>
	<div class="bg-dark-black200 p-4 rounded-lg mt-4">
		<highchart :options="chartOptions"></highchart>
	</div>
</template>

<script>
import { getHistoryTrend } from "~/api/main";

export default {
	name: "index",
	data() {
		return {
			chartOptions: {},
		};
	},
	mounted() {
		let start = this.$moment().subtract(3, "days").format("x");
		let end = this.$moment().format("x");
		let monitor = "RdCenter:ITRI:exhibition:K:E";
		let monitorType = "generating";
		let tableType = "Min";
		getHistoryTrend(monitor, monitorType, tableType, start, end).then((res) => {
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
						type: "area",
						backgroundColor: "transparent",
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
					},
					series: formatSeries,
				};
			}
		});
	},
};
</script>
