<template>
	<div></div>
</template>

<script>
import { getWeatherReport } from "~/api/main";

export default {
	mounted() {
		this.init();
	},
	methods: {
		init() {
			getWeatherReport().then((res) => {
				console.log(res);
			});
		},
	},
};
</script>
