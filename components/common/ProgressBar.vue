<template>
	<div>
		<div class="flex justify-between mb-1 items-center">
			<span class="text-base font-medium" :class="'text-dark-' + theme">
				{{ title }}
			</span>
			<span class="text-sm font-medium" :class="'text-dark-' + theme"
				>{{ percent }}%</span
			>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2.5">
			<div
				v-if="theme && percent"
				class="h-2.5 rounded-full"
				:style="{ width: `${percent}%`, backgroundColor: theme }"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
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
	},
};
</script>
