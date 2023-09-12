<template>
	<div
		class="bg-dark-black200 border-b border-gray-400 p-4 flex justify-start items-center text-lg h-16"
	>
		<font-awesome-icon
			class="mr-4 cursor-pointer"
			:icon="['fas', 'bars']"
			size="lg"
			@click="toggle"
		/>
		<!-- <img width="50" src="@/assets/images/logo.svg" alt="logo" /> -->
		<div>沙崙能源管理系統</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	mounted() {
		this.onScreenResize();
	},
	methods: {
		...mapMutations(["toggle"]),
		onScreenResize() {
			window.addEventListener("resize", () => {
				if (window.innerWidth <= 840) {
					this.$store.dispatch("setMenu", false);
				} else {
					this.$store.dispatch("setMenu", true);
				}
			});
		},
	},
};
</script>
