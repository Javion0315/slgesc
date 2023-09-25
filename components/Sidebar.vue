<template>
	<div class="absolute inset-0 top-16 z-50">
		<div
			class="bg-dark-black100/50 w-52 top-0 absolute inset-0 overflow-y-auto max-lg:bg-dark-black100"
		>
			<div
				class="flex justify-start items-center py-4 pl-6 pr-12 hover:text-dark-yellow cursor-pointer text-base whitespace-nowrap"
				v-for="item in menuList"
				:key="item.value"
				@click="goPath(item)"
				:class="
					menuActived === item.value
						? 'text-dark-yellow200 border-r-4 border-dark-yellow200'
						: 'text-neutral-300'
				"
			>
				<font-awesome-icon :icon="item.icon" size="lg" />
				<div class="ml-4">{{ item.label }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			menuActived: this.$route.name || "index",
			menuList: [
				{ label: "首頁", value: "index", icon: ["fas", "house"] },
				{
					label: "區域電力資訊",
					value: "generating",
					icon: ["fas", "map-location-dot"],
				},
				{
					label: "再生能源",
					value: "energy",
					icon: ["fas", "plug-circle-bolt"],
				},
				{ label: "節電成效", value: "saving", icon: ["fas", "battery-full"] },
				{ label: "友善連結", value: "link", icon: ["fas", "link"] },
				{
					label: "共桿",
					value: "commonPole",
					icon: ["fas", "tower-observation"],
				},
			],
		};
	},
	computed: {
		...mapGetters(["getToggleState"]),
	},
	methods: {
		goPath(item) {
			if (window.innerWidth <= 1080) {
				this.$store.dispatch("setMenu", false);
			}
			this.menuActived = item.value;
			this.$router.push({ name: item.value });
		},
	},
};
</script>
