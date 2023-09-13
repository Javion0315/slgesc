<template>
	<div
		class="grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:gap-0 m-auto px-10"
	>
		<div
			class="cursor-pointer h-full flex flex-col"
			v-for="link in linkList"
			:key="link.id"
			@click="goPath(link.href)"
		>
			<div class="bg-white p-1 rounded-t-lg h-24">
				<img
					class="max-w-full max-h-full object-contain m-auto flex justify-center items-center"
					:src="require(`@/assets/images/link/${link.img}.png`)"
					alt="link.img"
				/>
			</div>
			<div class="bg-dark-black200 p-2 rounded-b-lg break-words flex-1">
				{{ link.href }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			linkList: [
				{ id: "tainan", img: "tncity", href: "https://www.tainan.gov.tw/" },
				{
					id: "economic",
					img: "tnec",
					href: "https://economic.tainan.gov.tw/",
				},
				{ id: "moeaboe", img: "mebe", href: "https://www.moeaboe.gov.tw/" },
				{
					id: "taipower",
					img: "taipower",
					href: "https://www.taipower.com.tw/",
				},
				{ id: "mrpv", img: "solar", href: "https://www.mrpv.org.tw/" },
				{ id: "energy", img: "energy", href: "https://www.energypark.org.tw/" },
			],
		};
	},
	methods: {
		goPath(url) {
			window.open(url, "_blank");
		},
	},
};
</script>
