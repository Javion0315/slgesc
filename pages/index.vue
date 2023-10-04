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
						<div class="mt-1 text-6xl font-bold text-dark-yellow200">
							{{ trees }}
						</div>
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
			// A區 大臺南會展中心
			// C區 資安暨智慧科技研發大樓
			// D區 綠能科技示範場域
			// C1區 臺灣智駕測試實驗室
			// E區  中研院南部院區
			// 住區  智慧綠能循環住宅園區
			// K棟  工研院k棟示範場所
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

