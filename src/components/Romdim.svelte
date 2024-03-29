<script>
  import NextProjects from './NextProjects.svelte';
  export let cognizantPharma2: boolean = false;
  export let cognizantECommerce: boolean = false;
  export let cognizantPharma1: boolean = false;
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  import Logo from '../images/romdim/Logo.svelte';
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
  .text-upright {
    writing-mode: tb;
    text-orientation: upright;
  }
</style>

<div class="w-full sm:w-4/5 xl:w-1/2 4xl:w-2/5 mb-4">
  <Logo class="w-10 sm:w-12 lg:w-16 2xl:w-28 4xl:w-36 p-2 2xl:p-6 float-left border border-black mt-2 mr-2 2xl:mr-4" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">Alongside Romanos from <a href="https://romdim.nl" target="_blank" class="underline hover:text-hover">romdim.nl</a>, I created a minimalist portfolio website for his web engineering & consultant LC based in the Netherlands. The design process reflects the company's own approach, simplicity via optimal solution.</p>
</div>

<div class="w-full flex flex-col-reverse sm:flex-row flex-wrap sm:items-center mt-4 sm:mt-8 lg:mt-16">
  <div class="sm:w-1/2 sm:m-auto">
    <h3 class="hidden sm:block sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">Landing Page</h3>
    <ol class="4xl:w-4/5 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
      <CaseListItem number={1} description="A wordmark logo was chosen to establish a simple & memorable identification of the company's name. Comfortaa font is ideal due to its round & smooth glyphs to showcase the consultant aspect of the entrepreneur." bind:hoverings={landingHoverings} />
      <CaseListItem number={2} description='The hand pointer implies a sense of uniqueness & elegance in the overall minimalist & flat design. Through its animation, it triggers the visitor to discover what lies on the next page.' bind:hoverings={landingHoverings}/>
      <CaseListItem number={3} description='The golden paragraph stands out by being right aligned. Roboto Mono indicates the engineering part of romdim as one of the most common monospace fonts used in programming.' bind:hoverings={landingHoverings} />
      <CaseListItem number={4} description='Contact icons in pyramid shape give prominence to Github where a variety of projects & open source contributions can be found.' bind:hoverings={landingHoverings} />
      <CaseListItem number={5} description='The cross divides the 4 core elements of the portfolio, whilst it reflects the structural identity of romdim. In tablet & mobile screens it transforms responsively into an X.' bind:hoverings={landingHoverings} />
    </ol>
  </div>
  <div class="w-full sm:w-1/2 sticky sm:relative top-16 sm:top-0 bg-white">
    <h3 class="text-sm sm:text-base sm:hidden mb-4">Landing Page</h3>
    <div class="w-full flex items-center sm:space-y-16 sm:block">
      <div class="w-2/3 sm:w-full lg:3/4 xl:w-2/3 sm:m-auto sm:relative">
        <h3 class="hidden sm:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 text-xxs 2xl:text-sm 4xl:text-lg text-upright">DESKTOP</h3>
        <LandingDesktop bind:hoverings={landingHoverings} />
      </div>
      <div class="w-1/2 sm:w-full xl:w-2/3 sm:m-auto sm:relative">
        <h3 class="hidden sm:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 text-xxs 2xl:text-sm 4xl:text-lg text-upright">MOBILE</h3>
        <div class="sm:w-10/12 sm:m-auto">
          <div class="w-5/6 sm:w-2/3 m-auto">
            <LandingTablet bind:hoverings={landingHoverings} />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex sm:hidden sm:mb-4">
      <h3 class="w-2/3 text-xs text-left">Desktop</h3>
      <h3 class="w-5/12 text-xs text-left">Mobile</h3>
    </div>
  </div>
</div>


<div class="w-full flex flex-row sm:flex-row-reverse flex-wrap items-center sm:items-start mt-4 sm:mt-8 lg:mt-16">
  <div class="w-full sm:w-1/2 sticky sm:relative top-16 sm:top-14 lg:top-4 bg-white">
    <h3 class="sm:hidden mb-4 text-sm sm:text-base">Projects Page</h3>
    <div class="w-full flex items-center sm:block">
      <div class="w-1/2 sm:w-11/12 lg:w-2/3 sm:m-auto sm:mb-8 sm:relative">
        <h3 class="hidden sm:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 text-xxs 2xl:text-sm 4xl:text-lg text-upright">DESKTOP</h3>
        <div class="grid grid-cols-12 place-items-center lg:mt-10 -mb-2.5 px-0">
          <Header class="col-span-12 mb-4 hidden sm:block" />

          <ProjectsNumber classes='col-start-1 col-span-1 self-start lg:mt-1/2' bind:hoverings={projectsHoverings} number={1} />
          <div class="col-start-2 col-span-10 w-full">
            <Artwishlist />
          </div>
          
          <ProjectsNumber classes='col-start-2 col-span-2 justify-self-center -mt-1/3 lg:mb-4' bind:hoverings={projectsHoverings} number={2} />
          <div class="col-span-8"></div>

          <div class="col-start-5 col-span-7 lg:mb-4 w-full">
            <MyTomorrows />
          </div>
          <ProjectsNumber classes='col-start-12 col-span-1 self-start mt-16/10' bind:hoverings={projectsHoverings} number={3} />
          
          <div class="col-start-1 col-span-9 lg:mb-4 w-full">
            <Mobiquity />
          </div>
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
    <div class="w-full flex sm:hidden">
      <div class="w-1/2 sticky top-16 bg-white">
        <h3 class="text-xs text-left">Desktop</h3>
      </div>
      <div class="w-1/2 sticky top-16 bg-white">
        <h3 class="text-xs text-left">Mobile</h3>
      </div>
    </div>
  </div>
  
  <div class="sm:w-1/2 m-auto">
    <h3 class="hidden sm:block sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl mb-4">Projects Page</h3>
    <ol class="4xl:w-4/5 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
      <CaseListItem number={1} description='Black & White shades create a clean & easy to navigate website allowing the cases to stand out with their own color.' bind:hoverings={projectsHoverings} />
      <CaseListItem number={2} description='The icons showcase the work experience gained using various technologies, tools & programming languages & are instantly recognisable by the targeted website visitors.' bind:hoverings={projectsHoverings} />
      <CaseListItem number={3} description="The carousel portrays up to 4 key elements for each of romdim's clients, adhering to Nielsen Norman Group's <a href='https://www.nngroup.com/articles/designing-effective-carousels/' target='_blank' class='underline hover:text-hover'>advice</a>, reassuring that the visitor remains engaged." bind:hoverings={projectsHoverings} />
      <CaseListItem number={4} description="Breaking the grid drives the visitor's focus. The difference in size suggests the variety in role, tools and time spent with each employer." bind:hoverings={projectsHoverings} />
    </ol>

    <div class="hidden sm:block lg:w-2/3 4xl:w-4/5 m-auto 4xl:mx-0 4xl:mt-16">
      <div class="w-full sm:w-2/3 4xl:w-1/2 m-auto mb-8 sm:relative">
        <h3 class="absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 text-xxs 2xl:text-sm 4xl:text-lg text-upright">MOBILE</h3>
        <ProjectsNumber classes='text-center' bind:hoverings={projectsHoverings} number={3} />
        <MyTomorrowsMobile class="w-full" />
      </div>
    </div>
  </div>
</div>

<NextProjects bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat currentProject='rd' />
