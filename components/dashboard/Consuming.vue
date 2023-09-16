<template>
	<div class="bg-dark-black200/80 p-4 rounded-lg text-neutral-100 mt-4">
		<div class="text-2xl text-center font-bold">區域用電概要</div>
		<CommonTable :th-list="thList" :table-data="tableData" />
	</div>
</template>

<script>
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
				{ label: "用電量", value: "consuming" },
				{ label: "狀態", value: "status" },
			],
			tableData: [],
		};
	},
	mounted() {
		// 用電量 consuming
		setTimeout(() => {
			this.getData();
		}, 500);
	},
	methods: {
		getData() {
			let titleList = [
				"資安暨智慧科技研發大樓",
				"示範場域",
				"會展中心",
				"工研院K區",
				"中研院南部院區",
				"臺灣智駕測試實驗室",
				"智慧綠能循環住宅園區",
				"產業專用區",
			];
			let idList = ["C", "D", "A", "K", "E", "C1", "住", "B"];
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
			this.realtimeStatus.forEach((item, idx) => {
				// 即時用電量 (RealtimeStatus)/各區契約用電量
				let value = {
					ID: idList[idx],
					name: titleList[idx],
					consuming:
						((item.consuming / consumingList[idx]) * 100).toFixed(0) > 100
							? 100
							: ((item.consuming / consumingList[idx]) * 100).toFixed(0),
					status: "正常",
					theme: colorList[idx],
				};
				this.tableData.push(value);
			});
			for (let i = 5; i < titleList.length; i++) {
				let value = {
					ID: idList[i],
					name: titleList[i],
					consuming: 0,
					status: "N/A",
					theme: colorList[i],
				};
				this.tableData.push(value);
			}
		},
	},
};
</script>
