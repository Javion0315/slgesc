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
			<div
				class="backdrop-blur-sm bg-white/30 mt-6 mx-2 rounded-lg px-4 pt-4 pb-6"
			>
				<div
					class="flex justify-between items-center border-b-2 border-gray-300 pb-1 mb-2"
				>
					<div class="font-bold text-xl">最新消息</div>
					<div
						class="text-sm cursor-pointer"
						@click="goNews('https://www.ssgesc.tw/#/news')"
					>
						more...
					</div>
				</div>

				<div
					class="border-b border-dark-yellow200 py-2 cursor-pointer hover:text-dark-yellow200"
					v-for="item in newList"
					:key="item.title"
					@click="goNews(item.link)"
				>
					<div
						class="whitespace-nowrap text-ellipsis overflow-hidden w-full text-base"
					>
						{{ item.title }}
					</div>
					<div class="text-sm text-slate-800">{{ item.date }}</div>
				</div>
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
				// {
				// 	label: "分層式架構",
				// 	value: "login",
				// 	icon: ["fas", "arrow-right-to-bracket"],
				// },
			],
			newList: [
				{
					id: 1,
					title: "「滿意度問卷抽好禮」得獎名單出爐",
					date: "2023/09/26",
					link: "https://www.ssgesc.tw/#/news-content?newsId=185",
				},
				{
					id: 2,
					title:
						"10/13 Keep Going！零信任導入經驗分享與供應鏈資安探討｜沙崙資安研討會",
					date: "2023/09/22",
					link: "https://www.ssgesc.tw/#/news-content?newsId=182",
				},
				{
					id: 3,
					title: "智慧科技創意應用競賽 報名邁入倒數",
					date: "2023/09/22",
					link: "https://www.ssgesc.tw/#/news-content?newsId=184",
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
		goNews(link) {
			window.open(link, "_blank");
		},
	},
};
</script>
