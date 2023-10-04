<template>
	<div>
		<div>
			<GeneratingAreaC
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[0]"
				:name-list="nameList"
				v-if="powerMonth[0]"
			/>
			<GeneratingAreaD
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[1]"
				:name-list="nameList"
				v-if="powerMonth[1]"
			/>
			<GeneratingAreaA
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[2]"
				:name-list="nameList"
				v-if="powerMonth[2]"
			/>
			<GeneratingAreaK
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[3]"
				:name-list="nameList"
				v-if="powerMonth[3]"
			/>
			<GeneratingAreaE
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[4]"
				:name-list="nameList"
				v-if="powerMonth[4]"
			/>
			<GeneratingAreaR
				:realtime-status="realtimeStatus"
				:power-month="powerMonth[5]"
				:name-list="nameList"
				v-if="powerMonth[5]"
			/>
			<GeneratingAreaC1 :realtime-status="realtimeStatus" />
		</div>
	</div>
</template>

<script>
import { getRealtimeStatus, getPowerMonthSummary } from "~/api/main";

export default {
	data() {
		return {
			realtimeStatus: [],
			isLoading: false,
			powerMonth: [],
			nameList: ["最高發電量", "最高用電量", "平均發電量", "平均用電量"],
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
		this.getData();
	},
	methods: {
		getData() {
			let year = this.$moment().year();
			let month = this.$moment().format("M");
			this.isLoading = true;
			getPowerMonthSummary(year, month)
				.then((res) => {
					let data = res.data;
					if (data) {
						let removeSL = data.filter((entry) => entry.monitorID !== 6);
						this.powerMonth = removeSL.map((item) => ({
							name: item.displayName,
							data: [
								item.maxGenerating,
								item.maxConsuming,
								item.avgGenerating,
								item.avgConsuming,
							],
						}));
					}
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>
