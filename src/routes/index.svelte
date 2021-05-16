<script>
  import { scrollToTop } from "svelte-scrollto";

	import Logo from '../images/Logo.svelte';
	import RomdimLogo from '../images/romdim/Logo.svelte';
	import EatLogo from '../images/eat/LogoBig.svelte';
	import TatLogo from '../images/tat/Logo.svelte';

	import Romdim from '../components/Romdim.svelte';
	import Eat from '../components/Eat.svelte';
	import Tat from '../components/Tat.svelte';

	let rd: boolean = false;
	let eat: boolean = false;
	let tat: boolean = false;

	let emailText: string = 'E-MAIL';
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

	let project: boolean;
	$: project = rd || eat || tat;

	let projectAfter1: boolean = false;
	$: {
		if (project) {
			setTimeout(() => {
				projectAfter1 = true;
			}, 1000);
		} else {
			projectAfter1 = false;
		};
	}

	const close = (): void => {
		scrollToTop();
		setTimeout(() => rd = eat = tat = false, 500);
	};

	const escape = (event: KeyboardEvent): void => {
		if (event.key == 'Escape') {
			close();
		}
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

<svelte:window on:keydown={escape}/>

<div class="sm:col-span-6">
	<div class="h-16 w-screen sm:w-1/2 z-10 sm:z-auto bg-white sm:border-b-0 border-black -mx-4 sm:fixed sm:top-4 flex space-x-4 items-center font-base" class:fixed={projectAfter1} class:border-b={projectAfter1}>
		<div class="w-screen h-16 sm:w-1/12 sm:h-screen fixed" class:hidden={!projectAfter1} on:click={close}></div>
		<Logo class="w-12 h-12 sm:w-14 sm:h-14" />
		<a href="https://www.linkedin.com/in/efipetrou" target="_blank" alt="LinkedIn Efi Petrou" class="hover:text-hover">LINKEDIN</a>
		<p class="cursor-pointer hover:text-hover" on:click={copyToClipboard}>{emailText}</p>
	</div>

	<div class="mt-4 sm:block sm:fixed sm:bottom-4" class:hidden={projectAfter1}>
		<h4 class="text-sm font-bold">Web Designer</h4>
		<h1 class="text-xl efi">EFI PETROU</h1>
		<p class="sm:w-1/3 text-base font-medium">Born to be creative & grew up to become a critical thinking perfectionist with a well-rounded background to be inspired from. Able to empathise with people, strong in collaboration, initiative taker. Currently living in the Netherlands, looking to explore further the magical land of UX Research.</p>
	</div>
</div>

<div class="mt-8 sm:col-span-6 flex flex-col space-y-8" class:hidden={projectAfter1}>
	<label class="border border-black aspect-w-16 aspect-h-9 cursor-pointer" on:click={() => scrollToTop()}>
		<input type="checkbox" bind:checked={rd} class="hidden">
		<RomdimLogo class="w-1/4 m-auto" />
	</label>
	<label class="aspect-w-16 aspect-h-9 cursor-pointer #f4bac8" on:click={() => scrollToTop()}>
		<input type="checkbox" bind:checked={eat} class="hidden">
		<EatLogo class="w-full m-auto" />
	</label>
	<label class="aspect-w-16 aspect-h-9 bg-tat cursor-pointer" on:click={() => scrollToTop()}>
		<input type="checkbox" bind:checked={tat} class="hidden">
		<TatLogo class="w-1/2 m-auto" />
	</label>
</div>

<div class="absolute top-0 left-0 sm:left-1/12 w-screen hidden" class:fly={project}>
	<div class:border-t={project && !projectAfter1} class="mt-16 sm:mt-0 sm:border-t-0 w-screen sm:w-11/12 bg-white p-4 sm:border-l border-black sm:min-h-screen">
		{#if rd}
			<Romdim bind:rd bind:eat bind:tat/>
		{:else if eat}
			<Eat bind:rd bind:eat bind:tat/>
		{:else}
			<Tat bind:rd bind:eat bind:tat/>
		{/if}
	</div>
</div>