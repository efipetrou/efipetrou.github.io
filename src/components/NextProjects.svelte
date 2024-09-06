<script>
  import { scrollToTop } from "svelte-scrollto";

	import CognizantSmallLogo from '../images/cognizant/LogoSmall.svelte';
  import MesogheoLogo from '../images/mesogheo/Logo.svelte';
  import RomdimLogo from '../images/romdim/Logo.svelte';
  import EatLogo from '../images/eat/LogoBig.svelte';
  import TatLogo from '../images/tat/Logo.svelte';
	import Pharma2 from '../images/cognizant/Pharma2.png';
	import ECommerce from '../images/cognizant/ECommerce.png';
	import Pharma1 from '../images/cognizant/Pharma1.png';
	import SanofiLogo from '../images/cognizant/Sanofi.svelte';
	import LelyLogo from '../images/cognizant/Lely.svelte';
	import PGBLogo from '../images/cognizant/PGB.svelte';
	import MediahuisLogo from '../images/mediahuis/Logo.svelte';

  export let mediahuis: boolean = false;
  export let pgb: boolean = false;
  export let cognizantPharma2: boolean = false;
  export let cognizantECommerce: boolean = false;
  export let cognizantPharma1: boolean = false;
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;
  export let film: boolean = false;

  export let currentProject: string = 'cognizantPharma2';
  const projectList: string[] = [
    'mediahuis',
    'pgb',
    'cognizantPharma2',
    'cognizantECommerce',
    'cognizantPharma1',
    'mesogheo',
    'rd',
    'eat',
    'tat',
    'film'
  ];
  let current: number = projectList.indexOf(currentProject);
  const previous: number = current === 0 ? projectList.length-1 : current-1;
  const next: number = current === projectList.length-1 ? 0 : current+1;
  let sortedArray: number[] = [];
  for (let i=current+1; i<projectList.length; i++) {
    sortedArray.push(i);
  }
  for (let i=0; i<current; i++) {
    sortedArray.push(i);
  }

  const close = (): void => {
    mediahuis = pgb = cognizantPharma2 = cognizantECommerce = cognizantPharma1 = mesogheo = rd = eat = tat = false;
    scrollToTop({duration: 0});
  };
  const openMediahuis = (): void => {
    close();
		setTimeout(() => mediahuis = true, 100);
  };
  const openPGB = (): void => {
    close();
		setTimeout(() => pgb = true, 100);
  };
  const openCognizantPharma2 = (): void => {
    close();
		setTimeout(() => cognizantPharma2 = true, 100);
  };
  const openCognizantECommerce = (): void => {
    close();
		setTimeout(() => cognizantECommerce = true, 100);
  };
  const openCognizantPharma1 = (): void => {
    close();
		setTimeout(() => cognizantPharma1 = true, 100);
  };
  const openMesogheo = (): void => {
    close();
		setTimeout(() => mesogheo = true, 100);
  };
  const openRd = (): void => {
    close();
    setTimeout(() => rd = true, 100);
  };
  const openEat = (): void => {
    close();
    setTimeout(() => eat = true, 100);
  };
  const openTat = (): void => {
    close();
    setTimeout(() => tat = true, 100);
  };
  const openFilm = (): void => {
    close();
    setTimeout(() => film = true, 100);
  };

  const click = (num: number): void => {
    if (num === 0) {
      openMediahuis();
    } else if (num === 1) {
      openPGB();
    } else if (num === 2) {
      openCognizantPharma2();
    } else if (num === 3) {
      openCognizantECommerce();
    } else if (num === 4) {
      openCognizantPharma1();
    } else if (num === 5) {
      openMesogheo();
    } else if (num === 6) {
      openRd();
    } else if (num === 7) {
      openEat();
    } else if (num === 8){
      openTat();
    } else {
      openFilm();
    }
  };

  const clickPrevious = (event: KeyboardEvent): void => {
    if (e.keyCode == '37') {
      click(previous);
    }
  };

  const clickNext = (event: KeyboardEvent): void => {
    if (event.key == '39') {
      click(next);
    }
  };
</script>

<style>
  @media (min-width: 640px) {
    .sm\:w-1\/2-with-mx-2 {
      width: calc(50% - 2rem);
    }
  }
</style>

<div class="w-full m-auto sm:flex sm:flex-wrap">
  {#each sortedArray as value}
    {#if value === 0}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-mediahuis" on:click={openMediahuis} on:keydown={openMediahuis}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-6 place-content-center">
          <MediahuisLogo class="w-1/2" />
        </div>
      </div>
    {:else if value === 1}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-pgb" on:click={openPGB} on:keydown={openPGB}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-6 place-content-center">
          <PGBLogo class="w-1/2" />
				  <CognizantSmallLogo class="absolute bottom-0 w-1/12 sm:bottom-2 md:bottom-4 right-2 lg:right-4 lg:w-auto"/>
          <!-- <p class="text-xl text-cognizant2">Digital Innovation Ecosystem</p> -->
        </div>
      </div>
    {:else if value === 2}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-sanofi" on:click={openCognizantPharma2} on:keydown={openCognizantPharma2}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-6 place-content-center">
          <SanofiLogo class="w-1/2" />
          <p class="text-white text-md sm:text-lg lg:text-xl">Digital Innovation Ecosystem</p>
				  <CognizantSmallLogo class="absolute bottom-0 w-1/12 sm:bottom-2 md:bottom-4 right-2 lg:right-4 lg:w-auto"/>
        </div>
      </div>
    {:else if value === 3}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-lely" on:click={openCognizantECommerce} on:keydown={openCognizantECommerce}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-6 place-content-center">
          <LelyLogo class="w-1/2" />
				  <CognizantSmallLogo class="absolute bottom-0 w-1/12 sm:bottom-2 md:bottom-4 right-2 lg:right-4 lg:w-auto"/>
          <!-- <p class="text-xl text-cognizant2">E-commerce Platform</p> -->
        </div>
      </div>
    {:else if value === 4}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-sanofi" on:click={openCognizantPharma1} on:keydown={openCognizantPharma1}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-4 lg:space-y-6 place-content-center">
          <SanofiLogo class="w-1/2" />
          <p class="text-white text-md sm:text-lg lg:text-xl">Research Visualisation Tool</p>
				  <CognizantSmallLogo class="absolute bottom-0 w-1/12 sm:bottom-2 md:bottom-4 right-2 lg:right-4 lg:w-auto"/>
        </div>
      </div>
    {:else if value === 5}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 bg-mesogheo22 cursor-pointer mt-8" on:click={openMesogheo} on:keydown={openMesogheo}>
        <MesogheoLogo class="w-1/2 m-auto text-mesogheo92" />
      </div>
    {:else if value === 6}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 border border-black cursor-pointer mt-8" on:click={openRd} on:keydown={openRd}>
        <RomdimLogo class="w-1/4 m-auto" />
      </div>
    {:else if value === 7}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8" on:click={openEat} on:keydown={openEat}>
        <EatLogo class="w-full m-auto" />
      </div>
    {:else if value === 8}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-tat" on:click={openTat} on:keydown={openTat}>
        <TatLogo class="w-1/2 m-auto" />
      </div>
    {:else}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-black text-white" on:click={openFilm} on:keydown={openFilm}>
        <div class="absolute flex flex-col items-center w-full h-full space-y-2 xl:space-y-6 place-content-center">
          <h3 class="xl:text-4xl">IN THE FOOTSTEPS OF PAN</h3>
				  <p class="text-xs xl:text-base">Film</p>
        </div>
      </div>
    {/if}
  {/each}
</div>
