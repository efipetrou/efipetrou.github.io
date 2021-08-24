<script>
  // Purgecss classes that are dynamically created and need to be parsed for production non-purging:
  // border-b border-t fixed hidden text-hover

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

	const copyToClipboard = (text) => {
		const elem = document.createElement('textarea');
		elem.value = text;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
		document.body.removeChild(elem);
	};

	let copied: boolean = false;
	let emailText: string = 'E-MAIL';
	const copyEmail = () => {
		const email = 'efinpetrou@gmail.com';
		copyToClipboard(email);
		emailText = 'COPIED';
		copied = true;
		setTimeout(() => {
			emailText = 'E-MAIL';
			copied = false;
		}, 1000);
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

	let linkedInHover: boolean = false;
	let comingFromMobile: boolean = false;
	// const toggleLinkedInHover = (): void => linkedInHover = 
	const linkedInHoverOn = (): void => linkedInHover = comingFromMobile ?  false : true;
	const linkedInHoverOff = (): void => linkedInHover = false;
	const toggleLinkedInFor10 = (): void => {
		linkedInHoverOn();
		comingFromMobile = true;
		setTimeout(() => {
			linkedInHoverOff();
		}, 100);
	};
</script>

<style>
	.fly {
		display: flex;
		flex-direction: column;
		animation: fly-up 1s;
	}
	@media only screen and (min-width: 1024px) {
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
	.w-1\/12\+2 {
		width: calc(8.333333% + 2rem);
	}
</style>

<svelte:window on:keydown={escape}/>

<div class="lg:col-span-6">
	<div class="h-16 w-screen lg:w-1/2 z-50 lg:z-auto bg-white lg:border-b-0 border-black -mx-4 sm:-mx-8 sm:px-4 lg:fixed lg:top-4 flex space-x-4 items-center text-base sm:text-lg 2xl:text-3xl 4xl:text-4xl" class:fixed={projectAfter1} class:border-b={projectAfter1}>
		<div class="w-screen h-16 lg:hidden fixed" class:hidden={!projectAfter1} on:click={close}></div>
		<Logo class="w-12 h-12 sm:w-14 sm:h-14 2xl:w-20 2xl:h-20" />
		<a href="https://www.linkedin.com/in/efipetrou" target="_blank" class:text-hover={linkedInHover} on:mouseenter={linkedInHoverOn} on:mouseleave={linkedInHoverOff} on:touchstart={toggleLinkedInFor10}>LINKEDIN</a>
		<p class="cursor-pointer hover:text-hover" class:text-hover={copied} on:touchend|preventDefault={copyEmail} on:click={copyEmail}>{emailText}</p>
	</div>

	<div class="mt-2 sm:mt-4 mb-4 lg:mb-0 lg:block lg:fixed lg:bottom-8" class:hidden={projectAfter1}>
		<h4 class="text-sm sm:text-base 2xl:text-2xl 4xl:text-3xl font-bold 2xl:mb-1">Web Designer</h4>
		<h1 class="text-xl sm:text-2xl 2xl:text-4xl 4xl:text-5xl 2xl:mb-3 efi">EFI PETROU</h1>
		<p class="lg:w-5/12 3xl:w-1/4 text-base sm:text-lg 2xl:text-3xl 4xl:text-4xl">Born to be creative & grew up to become a critical thinking perfectionist with a well-rounded background to be inspired from. Able to empathise with people, strong in collaboration, initiative taker. Currently living in the Netherlands, exploring further the magical land of UX Research.</p>
	</div>
</div>

<div class="lg:col-span-6 flex flex-col lg:justify-between xl:justify-around space-y-4 sm:space-y-8 xl:mb-8" class:hidden={projectAfter1}>
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
	<div class="h-1 w-full lg:hidden"></div>
</div>

<div class="absolute top-0 left-0 lg:left-1/12 w-screen lg:w-11/12 hidden" class:fly={project}>
	<div class="hidden lg:block absolute top-0 left-0 w-1/12+2 h-full transform -translate-x-full" on:click={close}></div>
	<div class:border-t={project && !projectAfter1} class="mt-16 lg:mt-0 lg:border-t-0 w-full bg-white p-4 sm:px-8 lg:border-l border-black lg:min-h-screen">
		{#if rd}
			<Romdim bind:rd bind:eat bind:tat/>
		{:else if eat}
			<Eat bind:rd bind:eat bind:tat/>
		{:else}
			<Tat bind:rd bind:eat bind:tat/>
		{/if}
	</div>
</div>