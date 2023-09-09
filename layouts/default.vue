<template>
	<div class="bg-neutral-950 text-white min-h-screen">
		<div>
			<Navbar />
			<main class="flex">
				<Sidebar v-if="getToggleState" />
				<Nuxt />
			</main>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getToggleState"]),
	},
};
</script>
