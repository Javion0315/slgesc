<template>
	<div class="bg-dark-black200 p-4 rounded-lg text-neutral-100 mt-4">
		<div class="text-2xl text-neutral-100 text-center">區域用電概要</div>
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
			this.realtimeStatus.forEach((item, idx) => {
				let value = {
					ID: idList[idx],
					name: titleList[idx],
					consuming: item.consuming,
					status: "正常",
				};
				this.tableData.push(value);
			});
			for (let i = 5; i < titleList.length; i++) {
				let value = {
					ID: idList[i],
					name: titleList[i],
					consuming: 0,
					status: "N/A",
				};
				this.tableData.push(value);
			}
		},
	},
};
</script>
