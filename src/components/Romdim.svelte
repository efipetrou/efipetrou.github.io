<script>
  import { scrollToTop } from 'svelte-scrollto';

	import EatLogo from '../images/eat/LogoBig.svelte';
	import TatLogo from '../images/tat/Logo.svelte';

  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

	const close: void = () => {
		scrollToTop();
		setTimeout(() => rd = false, 500);
	};
  const openEat: void = () => {
    close();
    eat=true;
  };
  const openTat: void = () => {
    close();
    tat=true;
  };

  import CaseListItem from '../components/romdim/CaseListItem.svelte';
  import LandingDesktop from '../components/romdim/LandingDesktop.svelte';
  import LandingTablet from '../components/romdim/LandingTablet.svelte';
  import ProjectsNumber from '../components/romdim/ProjectsNumber.svelte';

  import Header from '../images/romdim/projects/Header.svelte';
  import Artwishlist from '../images/romdim/projects/Artwishlist.svelte';
  import MyTomorrows from '../images/romdim/projects/MyTomorrows.svelte';
  import MyTomorrowsMobile from '../images/romdim/projects/MyTomorrowsMobile.svelte';
  import Mobiquity from '../images/romdim/projects/Mobiquity.svelte';

  let landingHoverings: boolean[] = [
    true, // Logo
    false, // Hand
    false, // Text
    false, // Contact
    false // Cross
  ];

  let projectsHoverings: boolean[] = [
    true, // Black & White
    false, // Icons
    false, // Carousel
    false // Grid
  ];
</script>

<style>
</style>

<h1 class="text-2xl sm:text-4xl sm:mt-2"><a href="https://romdim.nl" target="_blank" class="hover:text-hover">romdim.nl →</a></h1>
<p class="text-sm sm:text-2xl sm:w-1/2 mt-3">Alongside Romanos from romdim, I created a minimalist portfolio website for his web engineering & consultant LC based in the Netherlands. The design process reflects the company's own approach, simplicity via optimal solution.</p>

<div class="w-full flex flex-col-reverse sm:flex-row flex-wrap items-center mt-4 sm:mt-16">
  <div class="sm:w-1/2 m-auto">
    <div class="sm:w-2/3 m-auto">
      <h3 class="hidden sm:block sm:text-2xl">Landing Page</h3>
      <ol class="text-sm sm:text-xl">
        <CaseListItem number={1} description="A wordmark logo was chosen to establish a simple & memorable identification of the company's name. Comfortaa font is ideal due to its round & smooth glyphs to showcase the consultant aspect of the entrepreneur." bind:hoverings={landingHoverings} />
        <CaseListItem number={2} description='The hand pointer gives a sense of uniqueness & elegance to the overall minimalist & flat design. Through its animation, it triggers the visitor to discover what lies on the next page.' bind:hoverings={landingHoverings}/>
        <CaseListItem number={3} description='The golden paragraph stands out by being right aligned. Roboto Mono indicates the engineering part of romdim as one of the most common monospace fonts used in programming.' bind:hoverings={landingHoverings} />
        <CaseListItem number={4} description='Contact icons in pyramid shape give prominence to Github where a variety of projects & open source contributions can be found.' bind:hoverings={landingHoverings} />
        <CaseListItem number={5} description='The cross resembles the structural approach.
        The shape of the cross & its animation is what is needed to emphasise/reflect the structure. The cross changes into an X responsively in tablet & mobile screens' bind:hoverings={landingHoverings} />
      </ol>
    </div>
  </div>
  <div class="w-full sm:w-1/2 sticky top-16 bg-white">
    <h3 class="text-base sm:hidden mb-4">Landing Page</h3>
    <div class="w-full flex items-center sm:block">
      <div class="w-2/3 sm:m-auto">
        <LandingDesktop bind:hoverings={landingHoverings} />
      </div>
      <div class="w-1/2 sm:w-2/3 sm:m-auto">
        <div class="w-5/6 sm:w-1/2 m-auto">
          <LandingTablet bind:hoverings={landingHoverings} />
        </div>
      </div>
    </div>
    <div class="w-full flex sm:block sm:mb-4">
      <h3 class="w-2/3 text-sm sm:text-2xl text-left">Desktop</h3>
      <h3 class="w-5/12 text-sm sm:text-2xl text-left">Mobile</h3>
    </div>
  </div>
</div>


<div class="w-full flex flex-row flex-wrap items-center mt-4 sm:mt-16">
  <div class="w-full sm:w-1/2 sticky top-16 bg-white">
    <h3 class="sm:hidden text-base sm:text-2xl mb-4">Projects Page</h3>
    <div class="w-full flex items-center sm:block">
      <div class="w-1/2 sm:w-2/3 sm:m-auto">
        <div class="grid grid-cols-12 place-items-center sm:mt-10 -mb-2.5 px-0">
          <Header class="col-span-12 mb-4 hidden sm:block" />

          <ProjectsNumber classes='col-start-1 col-span-1 self-start sm:mt-1/2' bind:hoverings={projectsHoverings} number={1} />
          <Artwishlist class="col-start-2 col-span-10" />
          
          <ProjectsNumber classes='col-start-2 col-span-2 justify-self-center -mt-1/3 sm:mb-4' bind:hoverings={projectsHoverings} number={2} />
          <div class="col-span-8"></div>

          <MyTomorrows class="col-start-5 col-span-7 sm:mb-4" />
          <ProjectsNumber classes='col-start-12 col-span-1 self-start mt-16/10' bind:hoverings={projectsHoverings} number={3} />
          
          <Mobiquity class="col-start-1 col-span-9 sm:mb-4" />
          <ProjectsNumber classes='col-start-11 col-span-1 self-start mt-21/10' bind:hoverings={projectsHoverings} number={4} />
        </div>
      </div>
      <div class="w-1/2 sm:hidden">
        <div class="w-5/6 m-auto">
          <ProjectsNumber classes='text-center' bind:hoverings={projectsHoverings} number={3} />
          <MyTomorrowsMobile class="w-full" />
        </div>
      </div>
    </div>
    <div class="w-full flex sm:block sm:mb-4">
      <div class="w-1/2 sm:w-2/3 sm:m-auto sticky top-16 bg-white">
        <h3 class="text-sm sm:text-2xl text-left">Desktop</h3>
      </div>
      <div class="w-1/2 sm:hidden sticky top-16 bg-white">
        <h3 class="text-sm sm:text-2xl text-left">Mobile</h3>
      </div>
    </div>
  </div>
  
  <div class="sm:w-1/2 m-auto">
    <div class="sm:w-2/3 m-auto">
      <h3 class="hidden sm:block text-2xl text-right mb-4">Mobile</h3>
      <div class="hidden sm:block w-2/3 m-auto mb-8">
        <ProjectsNumber classes='text-center' bind:hoverings={projectsHoverings} number={3} />
        <MyTomorrowsMobile class="w-full" />
      </div>

      <h3 class="hidden sm:block text-lg sm:text-2xl">Projects Page</h3>
      <ol class="text-sm sm:text-xl">
        <CaseListItem number={1} description='Black & White shades create a clean & easy to navigate website & also allow the cases to stand out with their own color.' bind:hoverings={projectsHoverings} />
        <CaseListItem number={2} description='The icons showcase the work experience gained using various technologies, tools & programming languages & are instantly recognisable by the targeted website visitors.' bind:hoverings={projectsHoverings} />
        <CaseListItem number={3} description="The carousel portrays up to 4 key elements of romdim's clients, adhering to Nielsen Norman Group's <a href='https://www.nngroup.com/articles/designing-effective-carousels/' target='_blank' class='underline'>advice</a>, depicting the 'good work' while also reassuring that the visitor remains engaged." bind:hoverings={projectsHoverings} />
        <CaseListItem number={4} description='Breaking the grid gives a fresh tone emphasis to the components.' bind:hoverings={projectsHoverings} />
      </ol>
    </div>
  </div>
</div>

<div class="w-full cursor-pointer mt-8" on:click={openEat}>
  <EatLogo class="w-full m-auto" />
</div>
<div class="w-full cursor-pointer mt-8" on:click={openTat}>
  <TatLogo class="w-full m-auto bg-tat" />
</div>