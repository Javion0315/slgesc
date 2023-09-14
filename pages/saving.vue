<template>
	<div>
		<div
			class="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-4 m-auto px-4"
		>
			<div
				class="bg-[#010101] h-full flex flex-col p-2 rounded-lg"
				v-for="item in imgList"
				:key="item.img"
			>
				<div class="p-1 rounded-t-lg h-70">
					<img
						class="max-w-full max-h-full object-contain m-auto flex justify-center items-center"
						:src="require(`@/assets/images/${item.img}.jpg`)"
						:alt="item.img"
					/>
				</div>
				<div
					class="bg-[#010101] my-2 px-2 text-lg break-words flex-1"
					v-html="item.content"
				></div>
			</div>
		</div>
		<div class="bg-dark-black200 p-4 rounded-lg text-neutral-100 mt-4">
			<div class="text-2xl text-neutral-100 text-center font-bold">
				節能成效
			</div>
			<SavingTable />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgList: [
				{ img: "consumption", content: "月平均 EUI <br /> 8.36 (kWh/m2)" },
				{
					img: "solar",
					content: "總綠電滲透率 30.0(%) <br /> 總發電量 109,328 (kWp/月)",
				},
				{
					img: "CO2",
					content: "月減碳量 <br /> 55,648 (kg-CO2/度)",
				},
			],
		};
	},
};
</script>
