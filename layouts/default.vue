<template>
	<div
		class="text-white min-h-screen bg-tech bg-no-repeat bg-cover bg-center bg-fixed bg-black"
		v-cloak
	>
		<div class="backdrop-blur-[1px]">
			<Navbar />
			<div class="flex">
				<Sidebar class="sticky top-0 min-h-screen" v-if="getToggleState" />
				<main class="w-full">
					<Nuxt
						:class="[
							'p-6',
							getToggleState && windowWidth >= 840 ? 'ml-52' : 'ml-0',
						]"
					/>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			windowWidth: "",
		};
	},
	mounted() {
		this.windowWidth = window.innerWidth;
		if (this.windowWidth <= 1080) {
			this.$store.dispatch("setMenu", false);
		}
		window.addEventListener("resize", () => {
			this.windowWidth = window.innerWidth;
		});
	},
	computed: {
		...mapGetters(["getToggleState"]),
	},
};
</script>
