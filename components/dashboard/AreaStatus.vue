<template>
	<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
		<div
			class="bg-neutral-800 p-1 rounded-lg"
			v-for="(item, index) in statusList"
			:key="index"
		>
			<div class="relative">
				<img class="w-full" src="@/assets/images/chart.png" alt="chart" />
				<div class="absolute top-3 left-0 py-2 px-4">
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
import { getRealtimeStatus, getConsumptionCompare } from "~/api/main";

export default {
	data() {
		return {
			statusList: {},
		};
	},
	mounted() {
		// generating: 發電量, consuming: 用電量
		getRealtimeStatus().then((res) => {
			let data = res.data.summary;
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
						label: "備轉容量率",
						value: 0 + " (%)",
						icon: ["fas", "car-battery"],
					},
				];
			}
		});
	},
};
</script>
