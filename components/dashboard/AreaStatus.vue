<template>
	<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
		<div
			class="bg-dark-black200 p-1 rounded-lg text-neutral-100"
			v-for="(item, index) in statusList"
			:key="index"
		>
			<div class="relative">
				<img class="w-full" src="@/assets/images/chart.png" alt="chart" />
				<div class="absolute top-1 left-0 py-2 px-4">
					<div>
						{{ item.label }}
					</div>
					<div class="text-2xl mt-3">
						{{ item.value }}
					</div>
				</div>
				<div class="absolute top-1 right-0 py-2 px-4 text-3xl">
					<font-awesome-icon :icon="item.icon" />
				</div>
			</div>
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
			statusList: {},
		};
	},
	mounted() {
		setTimeout(() => {
			this.getData();
		}, 500);
	},
	methods: {
		// generating: 發電量, consuming: 用電量, consumingPercent: 契約容量占比
		getData() {
			let data = this.realtimeStatus;
			if (data) {
				let generating = 0;
				let consuming = 0;
				data.forEach((res) => {
					generating += res.generating;
					consuming += res.consuming;
				});
				this.statusList = [
					{
						label: "目前發電量",
						value: generating.toFixed(0) + " (kW)",
						icon: ["fas", "plug-circle-bolt"],
					},
					{
						label: "目前用電量",
						value: consuming.toFixed(0) + " (kW)",
						icon: ["fas", "battery-three-quarters"],
					},
					{
						label: "綠能使用率",
						value: ((generating / consuming) * 100).toFixed(0) + " (%)",
						icon: ["fas", "solar-panel"],
					},
					{
						label: "備轉容量率", // 備轉容量 => 各區用電量/契約容量
						value:
							(
								(consuming / (1200 + 790 + 1000 + 150 + 2400 + 3500 + 200)) *
								100
							).toFixed(0) + " (%)",
						icon: ["fas", "car-battery"],
					},
				];
			}
		},
	},
};
</script>
