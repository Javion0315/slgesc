<template>
	<div v-cloak>
		<div
			class="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-4 m-auto px-4"
		>
			<CommonLoading v-if="isLoading" />
			<div
				class="bg-dark-black200/80 h-full flex flex-col p-2 rounded-lg"
				v-for="item in imgList"
				:key="item.img"
			>
				<div class="p-1 rounded-t-lg h-70 w-70">
					<div
						v-if="imageLoaded"
						class="h-72 w-72 object-contain m-auto flex justify-center items-center"
					>
						Loading...
					</div>
					<img
						class="max-w-full max-h-full object-contain m-auto flex justify-center items-center"
						:src="getImagePath(item.img)"
						:alt="item.img"
						@load="onImageLoad"
						v-show="!imageLoaded"
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
import { getRealtimeStatus, getPowerYearSummary } from "~/api/main";

export default {
	data() {
		return {
			imgList: [],
			consumingTotal: 0,
			imageLoaded: true,
			isLoading: true,
			carbon: 0,
		};
	},
	watch: {
		consumingTotal(newVal, oldVal) {
			this.carbon = 0;
			if (newVal !== oldVal) {
				this.consumingTotal = newVal;
				let year = this.$moment().year();
				// 每年減碳量(t) = 每年發電量(kWh) * 0.495/1000
				getPowerYearSummary(year).then((res) => {
					let data = res.data;
					if (data) {
						data.forEach((val) => {
							this.carbon += val.generating;
						});
						this.getData();
					}
				});
			}
		},
	},
	methods: {
		getImagePath(imgName) {
			return require(`@/assets/images/${imgName}.jpg`);
		},
		onImageLoad() {
			this.imageLoaded = false;
			setTimeout(() => {
				this.isLoading = false;
			}, 100);
		},
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
							content: `月平均 EUI <br /> <span class="text-2xl text-dark-yellow200 font-bold">
          ${(this.consumingTotal / floor).toFixed(2)} </span> (kWh/m2)`,
						},
						{
							img: "solar",
							content: `總綠電滲透率 <span class="text-2xl text-dark-yellow200 font-bold">${(
								(generating / consuming) *
								100
							).toFixed(1)}(%) </span> <br /> 總發電量
              <span class="text-2xl text-dark-yellow200 font-bold"> ${generating.toFixed(
								2
							)} </span> (kWp/月)`,
						},
						{
							img: "CO2",
							content: `月減碳量 <br /> <span class="text-2xl text-dark-yellow200 font-bold">
              ${((this.carbon * 0.495) / 1000).toFixed(2)} </span>(kg-CO2/度)`,
						},
					];
				}
			});
		},
	},
};
</script>
