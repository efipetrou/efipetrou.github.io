<script>
  import { scrollToTop } from "svelte-scrollto";

  import CognizantLogo from '../images/cognizant/Logo.svelte';
  import MesogheoLogo from '../images/mesogheo/Logo.svelte';
  import RomdimLogo from '../images/romdim/Logo.svelte';
  import EatLogo from '../images/eat/LogoBig.svelte';
  import TatLogo from '../images/tat/Logo.svelte';
	import Pharma2 from '../images/cognizant/Pharma2.png';
	import ECommerce from '../images/cognizant/ECommerce.png';
	import Pharma1 from '../images/cognizant/Pharma1.png';

  export let cognizantPharma2: boolean = false;
  export let cognizantECommerce: boolean = false;
  export let cognizantPharma1: boolean = false;
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  export let currentProject: string = 'cognizantPharma2';
  const projectList: string[] = [
    'cognizantPharma2',
    'cognizantECommerce',
    'cognizantPharma1',
    'mesogheo',
    'rd',
    'eat',
    'tat'
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
    cognizantPharma2 = cognizantECommerce = cognizantPharma1 = mesogheo = rd = eat = tat = false;
    scrollToTop({duration: 0});
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

  const click = (num: number): void => {
    if (num === 0) {
      openCognizantPharma2();
    } else if (num === 1) {
      openCognizantECommerce();
    } else if (num === 2) {
      openCognizantPharma1();
    } else if (num === 3) {
      openMesogheo();
    } else if (num === 4) {
      openRd();
    } else if (numm === 5) {
      openEat();
    } else {
      openTat();
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
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 flex-auto" on:click={openCognizantPharma2}>
        <div class="absolute top-0 left-0 flex w-1/2 h-full bg-black">
          <CognizantLogo class="w-5/6 m-auto text-cognizant opacity-30" />
        </div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2 bg-cognizant-pharma"></div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2">
          <img src={Pharma2} class="w-5/6 m-auto" alt="img" />
        </div>
      </div>
    {:else if value === 1}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 flex-auto" on:click={openCognizantECommerce}>
        <div class="absolute top-0 left-0 flex w-1/2 h-full bg-black">
          <CognizantLogo class="w-5/6 m-auto text-cognizant opacity-30" />
        </div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2 bg-cognizant-ecommerce"></div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2">
          <img src={ECommerce} class="w-5/6 m-auto" alt="img" />
        </div>
      </div>
    {:else if value === 2}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 flex-auto" on:click={openCognizantPharma1}>
        <div class="absolute top-0 left-0 flex w-1/2 h-full bg-black">
          <CognizantLogo class="w-5/6 m-auto text-cognizant opacity-30" />
        </div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2 bg-cognizant-pharma"></div>
        <div class="absolute top-0 flex w-1/2 h-full left-1/2">
          <img src={Pharma1} class="w-5/6 m-auto" alt="img" />
        </div>
      </div>
    {:else if value === 3}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 bg-mesogheo22 cursor-pointer mt-8 flex-auto" on:click={openMesogheo}>
        <MesogheoLogo class="w-1/2 m-auto text-mesogheo92" />
      </div>
    {:else if value === 4}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 border border-black cursor-pointer mt-8 flex-auto" on:click={openRd}>
        <RomdimLogo class="w-1/4 m-auto" />
      </div>
    {:else if value === 5}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 flex-auto" on:click={openEat}>
        <EatLogo class="w-full m-auto" />
      </div>
    {:else}
      <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full sm:w-1/2-with-mx-2 sm:mx-2 cursor-pointer mt-8 bg-tat flex-auto" on:click={openTat}>
        <TatLogo class="w-1/2 m-auto" />
      </div>
    {/if}
  {/each}
</div>
