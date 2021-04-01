<script>
	import { fly } from 'svelte/transition';
	// import Logo from '../images/logo.svg';
	import romdim from '../images/romdim.png';
	let un1 = false;
	let un2 = false;
	let un3 = false;

	let emailText = 'E-MAIL';
	const copyToClipboard = () => {
		const email = 'efinpetrou@gmail.com';
		navigator.clipboard.writeText(email).then(() => {
			// Copied successfully
			emailText = 'COPIED';
			setTimeout(() => { emailText = 'E-MAIL' }, 1000);
		}, () => {
			// Could not copy to clipboard
			window.location.href = `mailto:${email}`;
		});
	};
</script>

<style>
</style>

<svelte:head>
	<title>Efi Petrou</title>
</svelte:head>

<div class="col-span-6">
	<div class="fixed top-4 flex space-x-4 items-center">
		<!-- <div class="w-7 h-7 bg-black"></div> -->
		<!-- <div>
			<div class="mr-3.5 w-7 h-7 bg-red-600"></div>
			<div class="w-7 h-7 rounded-full bg-blue-600 absolute top-0 left-3.5"></div>
			<div class="h-7 w-3.5 rounded-l-3xl bg-yellow-400 absolute top-0 left-3.5"></div>
		</div> -->
		<!-- <Logo /> -->
		<img src="img/logo.svg" alt="" class="w-14 h-14" />
		<a href="https://www.linkedin.com/in/efipetrou" target="_blank" alt="LinkedIn Efi Petrou" class="hover:text-hover">LINKEDIN</a>
		<p class="cursor-pointer hover:text-hover" on:click={copyToClipboard}>{emailText}</p>
	</div>

	<div class="fixed bottom-4">
		<h4 class="text-sm font-bold">Web Designer</h4>
		<h1 class="text-xl">EFI PETROU</h1>
		<p class="w-1/3 text-base">Multi-talented perfectionist with creative thinking and a rich background to be inspired from, enthusiast about UX Research, in love with minimalist design
			Critical Thinking & Observation
			initiative
			Teamwork - team player</p>
	</div>

</div>
<div class="py-4 col-span-6 flex flex-col space-y-8 {un1 || un2 || un3 ? 'overflow-hidden' : ''}">
	<label class="border border-black">
		<input type="checkbox" bind:checked={un1} class="hidden">
		<img src="{romdim}" alt="romdim">
	</label>
	<label>
		<input type="checkbox" bind:checked={un2} class="hidden">
		<img src="img/un1.jpg" alt="test" />
	</label>
	<label>
		<input type="checkbox" bind:checked={un3} class="hidden">
		<img src="img/un2.jpg" alt="test" />
	</label>
</div>

{#if un1}
	<div transition:fly="{{ x: 200, duration: 1000 }}" class="absolute top-0 left-0 w-screen flex">
		<div on:click={() => un1 = !un1} class="w-1/12 h-screen"></div>
		<div class="w-11/12 bg-white flex flex-col justify-evenly">
			<h1 class="font-bold text-2xl">Romdim</h1>
			<div class="flex justify-start space-x-8">
				
				<div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
					<img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
						<p class="text-grey-darker text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
				</div>

				<div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
					<img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
						<p class="text-grey-darker text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
{/if}