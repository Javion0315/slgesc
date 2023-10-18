<template>
	<div>
		<div>
			<energyAreaC :realtime-status="realtimeStatus" />
			<energyAreaD :realtime-status="realtimeStatus" />
			<energyAreaA :realtime-status="realtimeStatus" />
			<energyAreaE :realtime-status="realtimeStatus" />
			<energyAreaR :realtime-status="realtimeStatus" />
			<energyAreaC1 :realtime-status="realtimeStatus" />
			<energyAreaK :realtime-status="realtimeStatus" />
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
