<template>
	<div class="bg-dark-black text-white min-h-screen">
		<div>
			<Navbar />
			<main>
				<Sidebar v-if="getToggleState" />
				<Nuxt
					:class="[
						'p-6',
						getToggleState && windowWidth >= 840 ? 'ml-64' : 'ml-0',
					]"
				/>
			</main>
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
		window.addEventListener("resize", () => {
			this.windowWidth = window.innerWidth;
		});
	},
	computed: {
		...mapGetters(["getToggleState"]),
	},
};
</script>
