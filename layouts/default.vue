<template>
	<div class="bg-dark-black text-white min-h-screen" v-cloak>
		<div>
			<Navbar />
			<div class="flex">
				<Sidebar class="sticky top-0 min-h-screen" v-if="getToggleState" />
				<main class="w-full">
					<Nuxt
						:class="[
							'p-6',
							getToggleState && windowWidth >= 840 ? 'ml-64' : 'ml-0',
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
		if (this.windowWidth <= 840) {
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
