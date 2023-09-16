<template>
	<div>
		<div
			class="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-4 m-auto px-4"
		>
			<div
				class="bg-dark-black200/80 h-full flex flex-col p-2 rounded-lg"
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
					class="my-2 px-2 text-lg break-words flex-1"
					v-html="item.content"
				></div>
			</div>
		</div>
		<div class="bg-dark-black200/80 p-4 rounded-lg text-neutral-100 mt-4">
			<div class="text-2xl text-neutral-100 text-center font-bold">
				節能成效
			</div>
			<SavingTable @consuming-total="consumingTotal = $event" />
		</div>
	</div>
</template>

<script>
import { getRealtimeStatus } from "~/api/main";

export default {
	data() {
		return {
			imgList: [],
			consumingTotal: 0,
		};
	},
	watch: {
		consumingTotal(newVal, oldVal) {
			if (newVal !== oldVal) {
				this.consumingTotal = newVal;
				this.getData();
			}
		},
	},
	methods: {
		getData() {
			getRealtimeStatus().then((res) => {
				let data = res.data.summary;
				if (data) {
					// 減碳量(每月更新)：太陽光電發電量*電力排放係數
					// 綠能滲透率(每月更新)：各區太陽光電發電量/各區用電量
					// generating: 發電量, consuming: 用電量
					let generating = 0;
					let consuming = 0;
					data.forEach((ele) => {
						generating += ele.generating;
						consuming += ele.consuming;
					});
					let floor = 4.29 + 5.33 + 2.2 + 7.44 + 7.3 + 1.39 + 4.29;
					// 當月總用電量 / 總樓地板面積
					this.imgList = [
						{
							img: "consumption",
							content: `月平均 EUI <br /> <span class="text-lg text-dark-yellow200 font-bold">
          ${(this.consumingTotal / floor).toFixed(2)} </span> (kWh/m2)`,
						},
						{
							img: "solar",
							content: `總綠電滲透率 <span class="text-lg text-dark-yellow200 font-bold">${(
								(generating / consuming) *
								100
							).toFixed(1)}(%) </span> <br /> 總發電量
              <span class="text-lg text-dark-yellow200 font-bold"> ${generating.toFixed(
								2
							)} </span> (kWp/月)`,
						},
						{
							img: "CO2",
							content: `月減碳量 <br /> <span class="text-lg text-dark-yellow200 font-bold">
              55,648 </span>(kg-CO2/度)`,
						},
					];
				}
			});
		},
	},
};
</script>
