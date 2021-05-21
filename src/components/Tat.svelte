<script>
  import { scrollToTop } from "svelte-scrollto";

  import RomdimLogo from '../images/romdim/Logo.svelte';
	import EatLogo from '../images/eat/LogoBig.svelte';

  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  const close = (): void => {
    tat = false;
		scrollToTop({duration: 0});
  };
  const openRd = (): void => {
    close();
		setTimeout(() => rd = true, 100);
  };
  const openEat = (): void => {
    close();
		setTimeout(() => eat = true, 100);
  };

  // let clientHeight: number;
  // let offsetHeight: number;
  // let height: number;
  // let y: number;
  // let ypx: string = '0';
  // let circleY;

  // $: console.log('client height ' + clientHeight);
  // $: console.log('offset height ' + offsetHeight);
  // $: console.log('height ' + height);
  // $: console.log('y ' + y);
	// $: ypx = `--ypx:${y > 72 ? y-72 : 0}px`;
  // $: console.log('ypx ' + ypx);
  
  import Logo from '../images/tat/Logo.svelte';
  import Mobile from '../images/tat/Mobile.svelte';

  import DesignSystem from '../images/tat/DesignSystem.svelte';
  import Components from '../images/tat/Components.svelte';

  import Keep1 from '../images/tat/Keep1.jpg';
  import Keep2 from '../images/tat/Keep2.jpg';

  import Border from './eat/Border.svelte';
</script>

<style>
  /* .translate-y-dyn {
    --tw-translate-y: calc(var(--ypx, 0) + 2rem);
  } */
</style>

<!-- <svelte:window bind:innerHeight={height} bind:scrollY={y}/> -->

<div class="w-full sm:w-4/5 xl:w-1/2 4xl:w-2/5 mb-4 4xl:mb-12">
  <Logo class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-24 2xl:h-24 4xl:w-32 4xl:h-32 mt-2 mr-2 float-left bg-tat" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">is a to-do list web app with an unvarnished non-intrusive design, has a modular layout without infinite categories, just 3 goals per day to achieve & 2 lists, to-do & notes.</p>
</div>

<!-- <div class="lg:relative" style="{ypx}"> -->
  <!-- <div class="hidden lg:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 sticky top-0 left-1/2 transition-transform transition-duration-75 transform -translate-x-1/2-1 translate-y-8 bg-efi z-10" data-scroll data-scroll-sticky> -->
  <!-- <div class="hidden lg:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 sticky top-0 left-1/2 transition-transform transition-duration-75 transform -translate-x-1/2-1 translate-y-8 bg-efi z-10">
  </div> -->
<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative sm:pt-8">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 lg:translate-y-1 bg-efi z-30">
    </div>
    <div class="mb-4 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl 4xl:w-4/5 sm:pr-4">
      <h3 class="4xl:mb-2">Concept</h3>
      <p class="mb-4">It came out as a necessity when I was confronted with all the small chores needed to be done in order to turn a new house into a home. After a lot of unsuccessful trials of analog and digital overcomplicated tools and soon-to-be-lost post-its, I came up with the bare minimum viable product that I could live with, TAT, after the German word for act.</p>
      <h3>Process</h3>
      <p>After my first project (romdim.nl), I understood the importance of the design system which builds consistency & gives the opportunity to reuse every component efficiently.</p>
    </div>
  </div>

  <div class="sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <DesignSystem class="w-full" />
    <Components class="mb-4 w-full" />
  </div>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 lg:translate-y-1 bg-efi z-20">
    </div>
    <div class="mb-4 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl 4xl:w-4/5 sm:pr-4">
      <h3 class="4xl:mb-2">Competition</h3>
      <p>Google Keep numbers among the great list of to-do apps, with a great yet simple design & strong features. Nevertheless, who wishes to share their most personal to-dos & notes with Google?</p>
    </div>
  </div>

  <div class="mb-4 flex flex-wrap w-full sm:w-1/2 items-center sm:px-8 sm:pb-4 4xl:pb-24">
    <div class="w-1/2">
      <img src={Keep1} alt="Google Keep Sidebar" class="object-contain">
    </div>
    <div class="w-1/2">
      <img src={Keep2} alt="Google Keep ToDo" class="object-contain">
    </div>
  </div>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 lg:translate-y-1 bg-efi z-10">
    </div>
    <div class="mb-4 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl 4xl:w-4/5 sm:pr-4">
      <h3 class="4xl:mb-2">Design</h3>
      <p>TAT keeps your data private by having them self-hosted & secure. The final goal is to provide an unobstructive way of keeping notes on a daily basis.</p>
      <p>Also, the mobile first approach is the only way forward, when you have limited space to fit the essential elements of your project.</p>
      <p>Plain & unsophisticated design with straight lines, earthy colours & a well combined typography fulfill its purpose.</p>
    </div>
  </div>
  <div class="sm:w-1/2 sm:px-8 4xl:pb-24">
    <Mobile class="w-2/3 m-auto my-4 sm:my-0" />
  </div>
</div>
<!-- </div> -->

<div class="w-full m-auto sm:flex sm:space-x-4">
  <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full border border-black cursor-pointer mt-8" on:click={openRd}>
    <RomdimLogo class="w-1/4 m-auto" />
  </div>
  <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full cursor-pointer mt-8" on:click={openEat}>
    <EatLogo class="w-full m-auto" />
  </div>
</div>