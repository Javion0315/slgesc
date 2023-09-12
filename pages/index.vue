<template>
	<div>
		<DashboardAreaStatus :realtime-status="realtimeStatus" />
		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
			<DashboardAreaChart class="col-span-3" />
			<div>
				<DashboardWeather />
				<div class="bg-dark-black200 p-1 rounded-lg mt-4">
					<div class="text-neutral-100 ml-2 mt-1 text-lg">區域概覽</div>
					<img class="w-full" src="@/assets/images/area.png" alt="area" />
				</div>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
			<DashboardConsuming
				:realtime-status="realtimeStatus"
				class="col-span-3"
			/>
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
		};
	},
	created() {
		getRealtimeStatus().then((res) => {
			let data = res.data.summary;
			if (data) {
				this.realtimeStatus = data;
			}
		});
	},
};
</script>


