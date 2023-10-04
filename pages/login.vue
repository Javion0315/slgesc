<template>
	<div>
		<div
			class="bg-login h-fill m-4 mx-auto rounded-lg h-[85vh] w-full bg-no-repeat bg-cover max-lg:hidden"
		>
			<div class="grid grid-cols-4 gap-9 h-full p-4">
				<div class="text-center col-span-2 text-3xl mt-36 font-bold">
					分層式架構
				</div>
				<div
					class="col-span-2 flex flex-col h-full backdrop-blur-sm bg-dark-black200/60 mx-4 rounded-lg justify-center items-center"
				>
					<div
						class="text-7xl mb-14 w-32 h-32 flex justify-center items-center"
					>
						<font-awesome-icon :icon="['fas', 'user-lock']" />
					</div>
					<div class="w-[60%]">
						<div class="mb-10 border-b-2 border-white flex items-center">
							<font-awesome-icon :icon="['fas', 'user']" />
							<input
								type="text"
								class="bg-transparent p-3 focus-visible:outline-none font-bold text-base text-dark-yellow200"
								placeholder="input account"
							/>
						</div>

						<div class="border-b-2 border-white flex mt-10 items-center">
							<font-awesome-icon :icon="['fas', 'unlock-keyhole']" />
							<input
								type="password"
								name="password"
								class="bg-transparent p-3 focus-visible:outline-none font-bold text-base text-dark-yellow200"
								placeholder="input password"
							/>
						</div>
					</div>

					<div
						class="mt-16 bg-dark-yellow200 text-slate-950 rounded-lg w-[60%] text-center py-2 cursor-pointer"
					>
						<button class="font-bold text-xl">LOGIN</button>
					</div>
				</div>
			</div>
		</div>
		<div class="max-lg:flex max-lg:flex-col hidden">
			<div class="text-center text-3xl font-bold mb-6">分層式架構</div>
			<div
				class="flex flex-col py-6 h-full backdrop-blur-sm bg-dark-black200/80 mx-4 rounded-lg justify-center items-center"
			>
				<div class="text-7xl mb-14 w-32 h-32 flex justify-center items-center">
					<font-awesome-icon :icon="['fas', 'user-lock']" />
				</div>
				<div class="w-[80%]">
					<div class="mb-10 border-b-2 border-white flex items-center">
						<font-awesome-icon :icon="['fas', 'user']" />
						<input
							type="text"
							class="bg-transparent p-3 focus-visible:outline-none text-dark-yellow200 font-bold text-base"
							placeholder="input account"
						/>
					</div>

					<div class="border-b-2 border-white flex mt-10 items-center">
						<font-awesome-icon :icon="['fas', 'unlock-keyhole']" />
						<input
							type="password"
							name="password"
							class="bg-transparent p-3 focus-visible:outline-none text-dark-yellow200 font-bold text-base"
							placeholder="input password"
						/>
					</div>
				</div>

				<div
					class="mt-16 bg-dark-yellow200 text-slate-950 rounded-lg w-[80%] text-center py-2 cursor-pointer"
				>
					<button class="font-bold text-xl">LOGIN</button>
				</div>
			</div>
		</div>
	</div>
</template>
