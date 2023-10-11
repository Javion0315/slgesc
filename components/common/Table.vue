<template>
	<div class="mx-4 max-sm:-mx-8 px-4 max-sm:px-8 py-4 overflow-x-auto">
		<div class="inline-block min-w-full shadow-md overflow-hidden">
			<table class="min-w-full leading-normal max-sm:hidden">
				<thead>
					<tr>
						<th
							class="px-5 py-2 border-b-2 border-gray-600 bg-dark text-left text-base font-semibold text-neutral-300 tracking-wider whitespace-nowrap normal-case"
							v-for="item in thList"
							:key="item.value"
						>
							{{ item.label }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in tableData" :key="index">
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base whitespace-nowrap"
						>
							{{ item.ID }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base whitespace-nowrap"
						>
							{{ item.name }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-xl text-dark-yellow200 font-bold whitespace-nowrap"
						>
							{{ item.generating }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base font-bold whitespace-nowrap"
						>
							{{ item.maxGenerating }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base font-bold whitespace-nowrap"
						>
							{{ item.maxConsuming }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base font-bold whitespace-nowrap"
						>
							{{ item.avgGenerating }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base font-bold whitespace-nowrap"
						>
							{{ item.avgConsuming }}
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-base whitespace-nowrap w-full"
						>
							<!-- 即時用電量 (RealtimeStatus)/各區契約用電量 -->
							<CommonProgressBar
								class="w-40"
								:is-show-title="false"
								:percent="item.consuming"
								:theme="item.theme"
							/>
						</td>
						<td
							class="px-5 py-2 border-b border-gray-600 bg-dark text-sm whitespace-nowrap"
						>
							<span
								class="rounded-full px-4"
								:class="
									item.status === '正常' ? 'bg-dark-green' : 'bg-dark-red'
								"
								>{{ item.status }}</span
							>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="hidden max-sm:flex flex-col">
				<div
					class="px-5 py-2 border-b border-gray-600 bg-dark text-base leading-8"
					v-for="(val, idx) in tableData"
					:key="val.ID + idx"
				>
					<div>
						編號 <span>{{ val.ID }}</span>
					</div>
					<div>
						單位名稱 <span>{{ val.name }}</span>
					</div>
					<div>
						即時發電量(kW)
						<span class="text-lg text-dark-yellow200 font-bold">{{
							val.generating
						}}</span>
					</div>
					<div>
						用電量(kW) <span>{{ val.consuming }}</span>
					</div>
					<div>
						最高發電量(kW) <span>{{ val.maxGenerating }}</span>
					</div>
					<div>
						用最高用電量電量(kW) <span>{{ val.maxConsuming }}</span>
					</div>
					<div>
						平均發電量(kW) <span>{{ val.avgGenerating }}</span>
					</div>
					<div>
						平均用電量(kW) <span>{{ val.avgConsuming }}</span>
					</div>
					<div>
						狀態
						<span
							class="rounded-full px-2 ml-2 text-sm"
							:class="val.status === '正常' ? 'bg-dark-green' : 'bg-dark-red'"
							>{{ val.status }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tableData: {
			type: Array,
			required: true,
		},
		thList: {
			type: Array,
			required: true,
		},
	},
};
</script>
