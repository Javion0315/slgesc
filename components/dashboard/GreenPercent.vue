<template>
	<div class="bg-dark-black200/80 p-4 rounded-lg text-neutral-100 mt-4 h-fit">
		<div class="text-2xl text-neutral-100 text-center font-bold">
			綠能滲透率
		</div>
		<div class="my-4" v-for="item in list" :key="item.title">
			<CommonProgressBar
				:title="item.title"
				:percent="item.consuming"
				:theme="item.theme"
			/>
		</div>
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
			list: [],
		};
	},
	mounted() {
		// 全區的綠電滲透率是 全區綠電發電量 generating / 全區用電量 consuming
		setTimeout(() => {
			this.getData();
		}, 500);
	},
	methods: {
		getData() {
			let titleList = [
				{ name: "資安暨智慧科技研發大樓(C)", code: "RdCenter" },
				{ name: "綠能科技示範場域(D)", code: "ITRI" },
				{ name: "大臺南會展中心(A)", code: "exhibition" },
				{ name: "工研院 k棟示範場所(K)", code: "K" },
				{ name: "中研院南部院區(E)", code: "E" },
				{ name: "智慧綠能循環住宅園區(住)", code: "R" },
				{ name: "臺灣智駕測試實驗室(C1)", code: "C1" },
			];
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
			let removeSL = this.realtimeStatus.filter(
				(entry) => entry.monitorID !== 6
			);
			removeSL.forEach((item, index) => {
				let value = {
					title: titleList[index].name,
					theme: colorList[index],
					consuming:
						item.generating === 0 && item.consuming === 0
							? 0
							: ((item.generating / item.consuming) * 100).toFixed(0) > 100
							? 100
							: ((item.generating / item.consuming) * 100)
									.toFixed(0)
									.toString(),
				};
				this.list.push(value);
			});
		},
	},
};
</script>
