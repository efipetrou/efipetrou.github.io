<script>
	import Logo from '../images/logo.svelte';
	import RomdimLogo from '../images/romdim/Logo.svelte';
	import EatLogo from '../images/eat/LogoBig.svelte';
	import TatLogo from '../images/tat/Logo.svelte';

	import Romdim from '../components/Romdim.svelte';
	import Eat from '../components/Eat.svelte';
	import Tat from '../components/Tat.svelte';

	let rd = false;
	let eat = false;
	let tat = false;

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key == 'Escape') {
			rd = eat = tat = false;
		}
	};

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
	.fly {
		display: flex;
		flex-direction: column;
		animation: fly-up 1s;
	}
	@media only screen and (min-width: 640px) {
		.fly {
			flex-direction: row;
			animation: fly-left 1s;
		}
	}
	@keyframes fly-up {
		0% { opacity: 0; transform: translateY(100%); }
		100% { opacity: 1; transform: translateY(0%); }
	}
	@keyframes fly-left {
		0% { opacity: 0; transform: translateX(100%); }
		100% { opacity: 1; transform: translateX(0%); }
	}
</style>

<svelte:head>
	<title>Efi Petrou</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown}/>

<div class="col-span-6">
	<div class="fixed top-4 flex space-x-4 items-center font-base">
		<Logo class="w-14 h-14" />
		<a href="https://www.linkedin.com/in/efipetrou" target="_blank" alt="LinkedIn Efi Petrou" class="hover:text-hover">LINKEDIN</a>
		<p class="cursor-pointer hover:text-hover" on:click={copyToClipboard}>{emailText}</p>
	</div>

	<div class="fixed bottom-4">
		<h4 class="text-sm font-bold">Web Designer</h4>
		<h1 class="text-xl efi">EFI PETROU</h1>
		<p class="w-1/3 text-base">Born to be creative & grew up to become a critical thinking perfectionist with a well-rounded background to be inspired from. Able to empathize with people, strong in collaboration, initiative taker. Looking to explore further the magical land of UX Research.</p>
	</div>

</div>
<div class="py-4 col-span-6 flex flex-col space-y-8 {rd || eat || tat ? 'overflow-hidden' : ''}">
	<label class="border border-black aspect-w-16 aspect-h-9">
		<input type="checkbox" bind:checked={rd} class="hidden">
		<RomdimLogo class="w-1/4 m-auto" />
	</label>
	<label class="aspect-w-16 aspect-h-9">
		<input type="checkbox" bind:checked={eat} class="hidden">
		<EatLogo class="w-full m-auto" />
	</label>
	<label class="aspect-w-16 aspect-h-9 bg-tat">
		<input type="checkbox" bind:checked={tat} class="hidden">
		<TatLogo class="w-1/2 m-auto" />
	</label>
</div>

<div class="absolute top-0 left-0 w-screen hidden" class:fly={rd}>
	<div on:click={() => rd = !rd} class="h-1/12vh sm:h-screen w-screen sm:w-1/12 self-stretch"></div>
	<Romdim />
</div>

<div class="absolute top-0 left-0 w-screen hidden" class:fly={eat}>
	<div on:click={() => eat = !eat} class="h-1/12vh sm:h-screen w-screen sm:w-1/12 self-stretch"></div>
	<Eat  />
</div>

<div class="absolute top-0 left-0 w-screen hidden" class:fly={tat}>
	<div on:click={() => tat = !tat} class="h-1/12vh sm:h-screen w-screen sm:w-1/12 self-stretch"></div>
	<Tat />
</div>