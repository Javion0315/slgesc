<template>
	<div
		class="bg-dark-black200/80 p-4 rounded-lg text-neutral-100 mt-4"
		v-if="tableData[0]"
	>
		<div class="text-2xl text-center font-bold mb-7">區域發用電概要</div>
		<!-- <img class="m-auto w-11/12" src="@/assets/images/3DMap.png" alt="3DMap" /> -->
		<div class="relative" v-cloak>
			<!-- C -->
			<div
				class="absolute text-lg font-bold top-[47.5%] right-[37%] max-2xl:text-base max-lg:text-xs"
			>
				{{ tableData[0].generating }} kW
			</div>
			<!-- K -->
			<div
				class="absolute text-lg font-bold top-[34%] right-[7%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[6].generating }} kW
			</div>
			<!-- A -->
			<div
				class="absolute text-lg font-bold top-[47.5%] left-[15%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[2].generating }} kW
			</div>
			<!-- D -->
			<div
				class="absolute text-lg font-bold top-[29%] right-[7%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[1].generating }} kW
			</div>
			<!-- E -->
			<div
				class="absolute text-lg font-bold top-[17.5%] right-[22%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[3].generating }} kW
			</div>
			<!-- C1 -->
			<div
				class="absolute text-lg font-bold top-[29%] right-[45%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[5].generating }} kW
			</div>
			<!-- 住 -->
			<div
				class="absolute text-lg font-bold top-[6%] right-[41%] max-lg:text-xs max-2xl:text-base"
			>
				{{ tableData[4].generating }} kW
			</div>
			<img
				class="m-auto w-11/12"
				src="@/assets/images/3DMapValue.png"
				alt="3DMap"
			/>
		</div>
		<div>
			<CommonTable :th-list="thList" :table-data="tableData" />
		</div>
	</div>
</template>

<script>
import { getPowerMonthSummary } from "~/api/main";
export default {
	props: {
		realtimeStatus: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			thList: [
				{ label: "編號", value: "ID" },
				{ label: "單位名稱", value: "name" },
				{ label: "即時發電量(kW)", value: "generating" },
				{ label: "最高發電量(kW)", value: "maxGenerating" },
				{ label: "最高用電量(kW)", value: "maxConsuming" },
				{ label: "平均發電量(kW)", value: "avgGenerating" },
				{ label: "平均用電量(kW)", value: "avgConsuming" },
				{ label: "用電量(kW)", value: "consuming" },
				{ label: "狀態", value: "status" },
			],
			tableData: [],
			SummaryData: [],
		};
	},
	mounted() {
		this.getSummary();
		// 用電量 consuming
		setTimeout(() => {
			this.getData();
		}, 500);
	},
	methods: {
		getData() {
			// A區 大臺南會展中心
			// C區 資安暨智慧科技研發大樓
			// D區 綠能科技示範場域
			// C1區 臺灣智駕測試實驗室
			// E區  中研院南部院區
			// 住區  智慧綠能循環住宅園區
			// K棟  工研院k棟示範場所
			let titleList = [
				{ name: "資安暨智慧科技研發大樓", code: "RdCenter" },
				{ name: "綠能科技示範場域", code: "ITRI" },
				{ name: "大臺南會展中心", code: "exhibition" },
				{ name: "工研院 k棟示範場所", code: "K" },
				{ name: "中研院南部院區", code: "E" },
				{ name: "智慧綠能循環住宅園區", code: "R" },
				{ name: "臺灣智駕測試實驗室", code: "C1" },
			];
			let idList = ["C區", "D區", "A區", "K棟", "E區", "住區", "C1區"];
			let colorList = [
				"#4F6947",
				"#856C2D",
				"#477880",
				"#88522E",
				"#813731",
				"#204C71",
				"#6D3265",
				"#483F60",
			];
			let consumingList = [790, 1000, 1200, 790, 5900, 150, 200, 0];
			let removeSL = this.realtimeStatus.filter(
				(entry) => entry.monitorID !== 6
			);
			removeSL.forEach((item, idx) => {
				// 即時用電量 (RealtimeStatus)/各區契約用電量
				// generating: 發電量
				if (item.name === titleList[idx].code) {
					let value = {
						ID: idList[idx],
						name: titleList[idx].name,
						generating: item.generating.toFixed(0),
						consuming:
							((item.consuming / consumingList[idx]) * 100).toFixed(0) > 100
								? 100
								: ((item.consuming / consumingList[idx]) * 100).toFixed(0),
						maxGenerating:
							this.SummaryData[0].data[idx] !== undefined
								? this.SummaryData[0].data[idx].toFixed(0)
								: 0,
						maxConsuming:
							this.SummaryData[1].data[idx] !== undefined
								? this.SummaryData[1].data[idx].toFixed(0)
								: 0,
						avgGenerating:
							this.SummaryData[2].data[idx] !== undefined
								? this.SummaryData[2].data[idx].toFixed(0)
								: 0,
						avgConsuming:
							this.SummaryData[3].data[idx] !== undefined
								? this.SummaryData[3].data[idx].toFixed(0)
								: 0,
						status: "正常",
						theme: colorList[idx],
					};
					this.tableData.push(value);
				}
			});
			// 把 K 移到最後
			let element = this.tableData.splice(3, 1)[0];
			this.tableData.push(element);
		},
		getSummary() {
			let year = this.$moment().year();
			let month = this.$moment().format("M");
			this.isLoading = true;
			getPowerMonthSummary(year, month)
				.then((res) => {
					let data = res.data;
					let nameList = [
						"最高發電量",
						"最高用電量",
						"平均發電量",
						"平均用電量",
					];

					if (data) {
						const names = [
							"maxGenerating",
							"maxConsuming",
							"avgGenerating",
							"avgConsuming",
						];
						this.SummaryData = names.map((name, idx) => ({
							name: nameList[idx],
							data: data.map((item) => item[name]),
						}));
					}
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>
