<script>
  import NextProjects from './NextProjects.svelte';
  export let cognizantPharma2: boolean = false;
  export let cognizantECommerce: boolean = false;
  export let cognizantPharma1: boolean = false;
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  import ProjectBlock from './ProjectBlock.svelte';

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

  import Border from './Border.svelte';
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

<ProjectBlock first={true}>
  <span slot="title" class="sm:mt-8">Concept</span>
  <span slot="text">
    <p class="mb-4">It came out as a necessity when I was confronted with all the small chores needed to be done in order to turn a new house into a home. After a lot of unsuccessful trials of analog and digital overcomplicated tools and soon-to-be-lost post-its, I came up with the bare minimum viable product that I could live with, TAT, after the German word for act.</p>
    <h3>Process</h3>
    <p>After my first project (romdim.nl), I understood the importance of the design system which builds consistency & gives the opportunity to reuse every component efficiently.</p>
  </span>
  <div slot="images" class="sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <DesignSystem class="w-full" />
    <Components class="mb-4 w-full" />
  </div>
</ProjectBlock>

<ProjectBlock>
  <span slot="title" class="sm:mt-8">Competition</span>
  <span slot="text">
    <p>Google Keep numbers among the great list of to-do apps, with a great yet simple design & strong features. Nevertheless, who wishes to share their most personal to-dos & notes with Google?</p>
  </span>
  <div slot="images" class="mb-4 flex flex-wrap w-full sm:w-1/2 items-center sm:px-8 sm:pb-4 4xl:pb-24">
    <div class="w-1/2">
      <img src={Keep1} alt="Competitor - Google Keep Menu" class="object-contain">
    </div>
    <div class="w-1/2">
      <img src={Keep2} alt="Competitor - Google Keep ToDo" class="object-contain">
    </div>
  </div>
</ProjectBlock>

<ProjectBlock>
  <span slot="title" class="sm:mt-8">Design</span>
  <span slot="text">
    <p>TAT keeps your data private by having them self-hosted & secure. The final goal is to provide an unobstructive way of keeping notes on a daily basis.</p>
    <p>Also, the mobile first approach is the only way forward, when you have limited space to fit the essential elements of your project.</p>
    <p>Plain & unsophisticated design with straight lines, earthy colours & a well combined typography fulfill its purpose.</p>
  </span>
  <div slot="images" class="sm:w-1/2 sm:px-8 4xl:pb-24">
    <Mobile class="w-2/3 m-auto my-4 sm:my-0" />
  </div>
</ProjectBlock>
<!-- </div> -->

<NextProjects bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat currentProject='tat' />
