<template>
	<div>
		<CommonLoading v-if="isLoading" />
		<DashboardAreaStatus :realtime-status="realtimeStatus" />
		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
			<DashboardConsuming
				:realtime-status="realtimeStatus"
				class="col-span-3"
			/>
			<div>
				<div
					class="py-4 px-2 rounded-lg mt-4 bg-tree h-72 bg-no-repeat bg-cover w-full relative"
				>
					<div class="ml-2 mt-1 text-2xl font-bold">節能減碳量</div>
					<div
						class="absolute right-[10%] top-[50%] transform -translate-x-[10%] -translate-y-[50%] text-right max-lg:right-[3%] max-lg:-translate-x-[3%]"
					>
						<div class="mt-1 text-lg font-bold">相當於種植</div>
						<div class="mt-1 text-6xl font-bold text-dark-yellow200">731</div>
						<div class="mt-1 text-lg font-bold">棵樹</div>
					</div>
				</div>
				<DashboardWeather :realtime-status="realtimeStatus" />
				<div class="bg-dark-black200/80 p-1 rounded-lg mt-4">
					<div class="ml-2 mt-1 text-2xl font-bold">區域概覽</div>
					<img class="w-full" src="@/assets/images/area.png" alt="area" />
				</div>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
			<DashboardAreaChart class="col-span-3" />
			<DashboardGreenPercent :realtime-status="realtimeStatus" />
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
		};
	},
	created() {
		this.isLoading = true;
		getRealtimeStatus()
			.then((res) => {
				let data = res.data.summary;
				if (data) {
					this.realtimeStatus = data;
				}
			})
			.finally(() => {
				this.isLoading = false;
			});
	},
};
</script>


