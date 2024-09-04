<script>
  // Purgecss classes that are dynamically created and need to be parsed for production non-purging:
  // border-b border-t fixed hidden text-hover

  import { scrollToTop } from "svelte-scrollto";

	import Logo from '../images/Logo.svelte';
	import CognizantLogo from '../images/cognizant/Logo.svelte';
	import MesogheoLogo from '../images/mesogheo/Logo.svelte';
	import RomdimLogo from '../images/romdim/Logo.svelte';
	import EatLogo from '../images/eat/LogoBig.svelte';
	import TatLogo from '../images/tat/Logo.svelte';
	import SanofiLogo from '../images/cognizant/Sanofi.svelte';
	import LelyLogo from '../images/cognizant/Lely.svelte';
	import PGBLogo from '../images/cognizant/PGB.svelte';
	import MediahuisLogo from '../images/mediahuis/Logo.svelte';
	import Pharma2 from '../images/cognizant/Pharma2.png';
	import ECommerce from '../images/cognizant/ECommerce.png';
	import Pharma1 from '../images/cognizant/Pharma1.png';

	import Mediahuis from '../components/Mediahuis.svelte';
	import PGB from '../components/PGB.svelte';
	import CognizantPharma2 from '../components/CognizantPharma2.svelte';
	import CognizantECommerce from '../components/CognizantECommerce.svelte';
	import CognizantPharma1 from '../components/CognizantPharma1.svelte';
	import Mesogheo from '../components/Mesogheo.svelte';
	import Romdim from '../components/Romdim.svelte';
	import Eat from '../components/Eat.svelte';
	import Tat from '../components/Tat.svelte';
	import Film from '../components/Film.svelte';

	let mediahuis: boolean = false;
	let pgb: boolean = false;
	let cognizantPharma2: boolean = false;
	let cognizantECommerce: boolean = false;
	let cognizantPharma1: boolean = false;
	let mesogheo: boolean = false;
	let rd: boolean = false;
	let eat: boolean = false;
	let tat: boolean = false;
	let film: boolean = false;

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
	$: project = mediahuis || pgb || cognizantPharma2 || cognizantECommerce || cognizantPharma1 || mesogheo || rd || eat || tat || film;

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
		setTimeout(() => mediahuis = pgb = cognizantPharma2 = cognizantECommerce = cognizantPharma1 = mesogheo = rd = eat = tat = film = false, 500);
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

<main class="h-screen p-4 pt-0 font-sans bg-white sm:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-2">
	<div class="lg:col-span-6">
		<div class="z-50 flex items-center w-screen h-16 -mx-4 space-x-4 text-base bg-white border-black lg:w-1/2 lg:z-auto lg:border-b-0 sm:-mx-8 sm:px-4 lg:fixed lg:top-4 sm:text-lg 2xl:text-3xl 4xl:text-4xl" class:fixed={projectAfter1} class:border-b={projectAfter1}>
			<div class="fixed w-screen h-16 lg:hidden" class:hidden={!projectAfter1} on:click={close} on:keydown={close}></div>
			<a href="/" alt="Home"><Logo class="w-12 h-12 sm:w-14 sm:h-14 2xl:w-20 2xl:h-20" /></a>
			<a href="https://www.linkedin.com/in/efipetrou" target="_blank" class:text-hover={linkedInHover} on:mouseenter={linkedInHoverOn} on:mouseleave={linkedInHoverOff} on:touchstart={toggleLinkedInFor10}>LINKEDIN</a>
			<p class="cursor-pointer hover:text-hover" class:text-hover={copied} on:touchend|preventDefault={copyEmail} on:click={copyEmail} on:keydown={copyEmail}>{emailText}</p>
			<label class="cursor-pointer hover:text-hover"><input type="checkbox" bind:checked={film} class="hidden">FILM</label>
		</div>

		<div class="mt-2 mb-4 sm:mt-4 lg:mb-0 lg:block lg:fixed lg:bottom-8" class:hidden={projectAfter1}>
			<h4 class="text-sm font-bold sm:text-base 2xl:text-2xl 4xl:text-3xl 2xl:mb-1">Product Designer</h4>
			<h1 class="text-xl sm:text-2xl 2xl:text-4xl 4xl:text-5xl 2xl:mb-3 efi">EFI PETROU</h1>
			<p class="text-base lg:w-5/12 3xl:w-1/4 sm:text-lg 2xl:text-3xl 4xl:text-4xl">Born to be creative and honed into a critical-thinking perfectionist, I bring a well-rounded background that fuels my inspiration. I firmly believe that teams create optimal solutions, and I excel in collaboration while also taking initiative. With a keen ability to empathise with people, I am exploring the dynamic field of Design in the Netherlands.</p>
		</div>
	</div>

	<div class="flex flex-col space-y-4 lg:col-span-6 lg:justify-between xl:justify-around sm:space-y-8 xl:mb-8" class:hidden={projectAfter1}>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-mediahuis" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 lg:-space-y-4 place-content-center">
				<MediahuisLogo class="w-2/5 lg:h-2/5"/>
				<!-- <p class="text-xl text-white"></p> -->
			</div>
			<input type="checkbox" bind:checked={mediahuis} class="hidden">
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-pgb" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 lg:-space-y-4 place-content-center">
				<PGBLogo class="w-2/5 lg:h-2/5"/>
				<!-- <p class="text-xl text-white"></p> -->
			</div>
			<input type="checkbox" bind:checked={pgb} class="hidden">
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-sanofi" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 lg:-space-y-4 place-content-center">
				<SanofiLogo class="w-2/5 lg:h-2/5"/>
				<p class="text-xl text-white">Digital Innovation Ecosystem</p>
			</div>
			<input type="checkbox" bind:checked={cognizantPharma2} class="hidden">
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-lely" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 lg:-space-y-4 place-content-center">
				<LelyLogo class="w-1/2 lg:h-2/5"/>
				<!-- <p class="text-xl text-cognizant2">E-commerce Platform</p> -->
			</div>
			<input type="checkbox" bind:checked={cognizantECommerce} class="hidden">
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-sanofi" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 lg:-space-y-4 place-content-center">
				<SanofiLogo class="w-2/5 lg:h-2/5"/>
				<p class="text-xl text-white">Research Visualisation Tool</p>
			</div>
			<input type="checkbox" bind:checked={cognizantPharma1} class="hidden">
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-mesogheo22" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<input type="checkbox" bind:checked={mesogheo} class="hidden">
			<MesogheoLogo class="w-1/2 m-auto text-mesogheo92" />
		</label>
		<label class="border border-black cursor-pointer aspect-h-9 aspect-w-16" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<input type="checkbox" bind:checked={rd} class="hidden">
			<RomdimLogo class="w-1/4 m-auto" />
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<input type="checkbox" bind:checked={eat} class="hidden">
			<EatLogo class="w-full m-auto" />
		</label>
		<label class="cursor-pointer aspect-h-9 aspect-w-16 bg-tat" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<input type="checkbox" bind:checked={tat} class="hidden">
			<TatLogo class="w-1/2 m-auto" />
		</label>
		<label class="text-white bg-black cursor-pointer aspect-h-9 aspect-w-16" on:click={() => scrollToTop()}  on:keydown={() => scrollToTop()}>
			<input type="checkbox" bind:checked={film} class="hidden">
			<div class="absolute flex flex-col items-center w-full h-full space-y-6 place-content-center">
				<h3 class="text-4xl">IN THE FOOTSTEPS OF PAN</h3>
				<p>Film</p>
			</div>
		</label>
		<div class="w-full h-1 lg:hidden"></div>
	</div>

	<div class="absolute top-0 left-0 hidden w-screen lg:left-1/12 lg:w-11/12" class:fly={project}>
		<div class="hidden lg:block absolute top-0 left-0 w-1/12+2 h-full transform -translate-x-full" on:click={close} on:keydown={close}></div>
		<div class:border-t={project && !projectAfter1} class="w-full p-4 mt-16 bg-white border-black lg:mt-0 lg:border-t-0 sm:px-8 lg:border-l lg:min-h-screen">
			{#if mediahuis}
				<Mediahuis
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if pgb}
				<PGB
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if cognizantPharma2}
				<CognizantPharma2
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if cognizantECommerce}
				<CognizantECommerce
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if cognizantPharma1}
				<CognizantPharma1
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if mesogheo}
				<Mesogheo
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if rd}
				<Romdim
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if eat}
				<Eat
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else if tat}
				<Tat
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{:else}
				<Film
					bind:mediahuis
					bind:pgb
					bind:cognizantPharma2
					bind:cognizantECommerce
					bind:cognizantPharma1
					bind:mesogheo
					bind:rd
					bind:eat
					bind:tat
					bind:film
				/>
			{/if}
		</div>
	</div>
</main>
