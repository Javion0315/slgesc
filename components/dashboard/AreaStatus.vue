<template>
	<div>
		<div
			class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"
			v-if="$route.name === 'index'"
		>
			<div
				class="bg-dark-black200/80 p-1 rounded-lg text-neutral-300"
				v-for="(item, index) in statusList"
				:key="index"
			>
				<div class="relative">
					<img class="w-full" src="@/assets/images/chart1.png" alt="chart" />
					<div class="absolute top-1 left-0 py-2 px-4">
						<div>
							{{ item.label }}
						</div>
						<div class="text-2xl mt-3 font-bold text-dark-yellow200">
							{{ item.value }}
						</div>
					</div>
					<div class="absolute top-1 right-0 py-2 px-4 text-3xl">
						<font-awesome-icon :icon="item.icon" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="grid grid-cols-2 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:mt-4"
			v-else
		>
			<div class="bg-dark-black200/80 p-1 rounded-lg text-neutral-300 relative">
				<div class="border-b-2 border-gray-600 pt-4 pb-2 mx-4">
					<div class="flex justify-between items-center flex-col">
						<font-awesome-icon
							:icon="['fas', 'plug-circle-bolt']"
							class="text-3xl font-bold text-dark-yellow200 flex items-center"
						/>
						<div
							class="text-3xl mt-3 font-bold text-dark-yellow200 flex items-center"
						>
							{{ generating.toFixed(0) }} (kW)
						</div>
						<div class="text-lg mt-2">目前發電量</div>
					</div>
				</div>
				<div>
					<div class="flex justify-between items-center flex-col">
						<font-awesome-icon
							:icon="['fas', 'battery-three-quarters']"
							class="text-3xl font-bold text-dark-yellow200 flex items-center mt-3"
						/>
						<div
							class="text-3xl mt-3 font-bold text-dark-yellow200 flex items-center"
						>
							{{ consuming.toFixed(0) }} (kW)
						</div>
						<div class="text-lg mt-2">目前用電量</div>
					</div>
				</div>
			</div>

			<div class="bg-dark-black200/80 p-1 rounded-lg text-neutral-300 relative">
				<div class="border-b-2 border-gray-600 pt-4 pb-2 mx-4">
					<div class="flex justify-between items-center flex-col">
						<font-awesome-icon
							:icon="['fas', 'solar-panel']"
							class="text-3xl font-bold text-dark-yellow200 flex items-center"
						/>
						<div
							class="text-3xl mt-3 font-bold text-dark-yellow200 flex items-center"
						>
							{{ ((generating / consuming) * 100).toFixed(0) }} (%)
						</div>
						<div class="text-lg mt-2">綠能使用率</div>
					</div>
				</div>
				<div>
					<div class="flex justify-between items-center flex-col">
						<font-awesome-icon
							:icon="['fas', 'car-battery']"
							class="text-3xl font-bold text-dark-yellow200 flex items-center mt-3"
						/>
						<div
							class="text-3xl mt-3 font-bold text-dark-yellow200 flex items-center"
						>
							{{
								(
									(consuming / (1200 + 790 + 1000 + 150 + 2400 + 3500 + 200)) *
									100
								).toFixed(0)
							}}
							(%)
						</div>
						<div class="text-lg mt-2">備轉容量率</div>
					</div>
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
			generating: 0,
			consuming: 0,
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
				let removeSL = data.filter((entry) => entry.monitorID !== 6);
				removeSL.forEach((res) => {
					generating += res.generating;
					consuming += res.consuming;
				});
				this.generating = generating;
				this.consuming = consuming;
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
						label: "綠能滲透率",
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
