<template>
	<div>
		<div class="flex justify-between mb-1 items-center" v-if="isShowTitle">
			<span class="text-base font-medium" :class="'text-dark-' + theme">
				{{ title }}
			</span>
			<span class="text-sm font-medium" :class="'text-dark-' + theme"
				>{{ percent }}%</span
			>
		</div>

		<div class="w-full bg-gray-200 rounded-full h-2.5" v-if="isShowTitle">
			<div
				v-if="theme && percent"
				class="h-2.5 rounded-full"
				:style="{ width: `${percent}%`, backgroundColor: theme }"
			></div>
		</div>
		<div class="grid grid-cols-3 items-center" v-else>
			<div class="w-full bg-gray-200 rounded-full h-2.5 flex-1 col-span-2">
				<div
					v-if="theme && percent"
					class="h-2.5 rounded-full"
					:style="{ width: `${percent}%`, backgroundColor: theme }"
				></div>
			</div>
			<div class="text-center">
				<span class="text-sm text-left">{{ percent }}%</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false,
		},
		theme: {
			type: String,
			required: false,
			default: "green",
		},
		percent: {
			type: [String, Number],
			required: true,
		},
		isShowTitle: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
};
</script>
