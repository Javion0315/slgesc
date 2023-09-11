<template>
	<div class="mt-4">
		<div class="bg-dark-black200 px-6 py-4 rounded-lg">
			<div class="text-2xl">
				{{ locat }}
			</div>
			<div class="mt-1">
				{{ desc }}
			</div>
			<div class="flex justify-between items-center gap-10 mb-1 mt-2">
				<div class="text-3xl">{{ temp }}°C</div>
				<div v-if="icon">
					<img
						:src="require(`@/assets/images/weather/${icon}.svg`)"
						:alt="icon"
					/>
				</div>
			</div>
			<div class="text-sm">
				<font-awesome-icon :icon="['fas', 'cloud-rain']" class="mr-1" />
				{{ rain }}%
			</div>
			<div class="text-sm mt-1">
				<font-awesome-icon :icon="['fas', 'wind']" class="mr-1" />
				{{ wind }} / {{ speed }}
			</div>
		</div>
	</div>
</template>

<script>
import { getWeatherReport } from "~/api/main";

export default {
	data() {
		return {
			desc: "", // 天氣描述
			temp: "", // 溫度
			locat: "", // 地區
			rain: "", // 降雨機率
			confort: "", // 舒適度
			wind: "", // 風向
			humi: "", // 濕度
			speed: "", // 風速
			icon: "", // 天氣圖
		};
	},
	mounted() {
		let isNight = this.$moment().hour() >= 18 || this.$moment().hour() <= 6;
		getWeatherReport().then((res) => {
			let data = res.data.records;
			if (data && data.locations) {
				let location = data.locations[0];
				this.locat = location.locationsName;

				let detail = location.location[0].weatherElement;
				this.desc = detail[1].time[0].elementValue[0].value;
				this.icon = isNight
					? "night" + detail[1].time[0].elementValue[1].value
					: "day" + detail[1].time[0].elementValue[1].value;
				this.temp = detail[3].time[0].elementValue[0].value;
				this.rain = detail[7].time[0].elementValue[0].value;
				this.confort = detail[5].time[0].elementValue[1].value;
				this.wind = detail[9].time[0].elementValue[0].value;
				this.humi = detail[4].time[0].elementValue[0].value;
				this.speed =
					detail[8].time[0].elementValue[0].value +
					detail[8].time[0].elementValue[0].measures;
			}
		});
	},
};
</script>
