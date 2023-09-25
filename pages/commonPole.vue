<template>
	<div>
		<CommonLoading v-if="isLoading" />
		<div>
			<DashboardWeather :realtime-status="realtimeStatus" />
		</div>
		<div
			class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4 auto-rows-max"
		>
			<div
				class="py-4 px-2 rounded-lg bg-tree h-72 bg-no-repeat bg-cover w-full relative max-lg:bg-center"
			>
				<div class="ml-2 mt-1 text-2xl font-bold">節能減碳量</div>
				<div
					class="absolute right-[10%] top-[50%] transform -translate-x-[10%] -translate-y-[50%] text-right"
				>
					<div class="mt-1 text-lg font-bold">相當於種植</div>
					<div class="mt-1 text-6xl font-bold text-dark-yellow200">
						{{ trees }}
					</div>
					<div class="mt-1 text-lg font-bold">棵樹</div>
				</div>
			</div>
			<DashboardAreaStatus
				class="col-span-2"
				:realtime-status="realtimeStatus"
			/>
			<div class="bg-dark-black200/80 p-1 rounded-lg max-lg:mt-4">
				<div class="ml-2 mt-1 text-2xl font-bold">區域概覽</div>
				<img class="w-full" src="@/assets/images/area.png" alt="area" />
			</div>
		</div>

		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-lg:gap-0">
			<DashboardConsuming
				:realtime-status="realtimeStatus"
				class="col-span-4"
			/>
		</div>
		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
			<DashboardAreaChart class="col-span-3" />
			<DashboardGreenPercent :realtime-status="realtimeStatus" />
		</div>
		<div>
			<DashboardColumnChart />
		</div>
	</div>
</template>

<script>
import { getRealtimeStatus } from "~/api/main";

export default {
	data() {
		return {
			realtimeStatus: [],
			isLoading: false,
			trees: 0,
		};
	},
	created() {
		this.isLoading = true;
		getRealtimeStatus()
			.then((res) => {
				// 目前發電量Ｘ0.495 / 12KG＝ 幾棵樹
				let data = res.data.summary;
				if (data) {
					let generating = 0;
					data.forEach((res) => {
						generating += res.generating;
					});
					this.trees = ((generating * 0.495) / 12).toFixed(0);
					this.realtimeStatus = data;
				}
			})
			.finally(() => {
				this.isLoading = false;
			});
	},
};
</script>


