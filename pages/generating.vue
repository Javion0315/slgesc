<template>
	<div>
		<div>
			<GeneratingAreaC :realtime-status="realtimeStatus" />
			<GeneratingAreaD :realtime-status="realtimeStatus" />
			<GeneratingAreaA :realtime-status="realtimeStatus" />
			<GeneratingAreaK :realtime-status="realtimeStatus" />
			<GeneratingAreaE :realtime-status="realtimeStatus" />
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
