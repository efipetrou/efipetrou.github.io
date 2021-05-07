<script>
  // Will use these and more when this is merged: https://github.com/codefeathers/rollup-plugin-svelte-svg/pull/20
  // import RomdimLogo from "../images/Romdim/logo.svg";
  // import RomdimContact from "../images/Romdim/contact.svg";

  import CaseListItem from '../components/romdim/CaseListItem.svelte';
  import LandingDesktop from '../components/romdim/LandingDesktop.svelte';
  import LandingTablet from '../components/romdim/LandingTablet.svelte';
  import ProjectsNumber from '../components/romdim/ProjectsNumber.svelte';

  import Header from '../images/romdim/projects/Header.svelte';
  import Artwishlist from '../images/romdim/projects/Artwishlist.svelte';
  import MyTomorrows from '../images/romdim/projects/MyTomorrows.svelte';
  import MyTomorrowsMobile from '../images/romdim/projects/MyTomorrowsMobile.svelte';
  import Mobiquity from '../images/romdim/projects/Mobiquity.svelte';

  let logoHovering: boolean = false;
  let handHovering: boolean = false;
  let textHovering: boolean = false;
  let contactHovering: boolean = false;
  let crossHovering: boolean = false;

  let bnwHovering: boolean = false;
  let iconsHovering: boolean = false;
  let carouselHovering: boolean = false;
  let gridHovering: boolean = false;
</script>

<style>
</style>

<div class="w-screen sm:w-11/12 bg-white p-4 border-t sm:border-t-0 sm:border-l border-black sm:min-h-screen">
  <h1 class="text-4xl mt-2 mb-4"><a href="https://romdim.nl" target="_blank" class="hover:text-hover">romdim.nl →</a></h1>
  <p class="text-2xl w-1/2">Alongside with Romanos from romdim, I created a minimalist portfolio website for his web engineering & consultant LC based in the Netherlands. The design process reflects the company's own approach, simplicity via optimal solution.</p>

  <div class="w-full flex flex-row flex-wrap items-center p-4 mt-16">
    <div class="w-1/2 m-auto">
      <div class="w-2/3 m-auto">
        <h3 class="text-2xl">Landing Page</h3>
        <ol class="text-xl">
          <CaseListItem number=1 description="A wordmark logo was chosen to establish a simple & memorable identification of the company's name. Comfortaa font is ideal due to its round & smooth glyphs to showcase the consultant aspect of the entrepreneur." bind:hovering={logoHovering} />
          <CaseListItem number=2 description='The hand pointer gives a sense of uniqueness & elegance to the overall minimalist & flat design. Through its animation, it triggers the visitor to discover what lies on the next page.' bind:hovering={handHovering} />
          <CaseListItem number=3 description='The golden paragraph stands out by being right aligned. Roboto Mono indicates the engineering part of romdim as one of the most common monospace fonts used in programming.' bind:hovering={textHovering} />
          <CaseListItem number=4 description='Contact icons in pyramid shape give prominence to Github where a variety of projects & open source contributions can be found.' bind:hovering={contactHovering} />
          <CaseListItem number=5 description='The cross resembles the structural approach.
          The shape of the cross & its animation is what is needed to emphasise/reflect the structure. The cross changes into an X responsively in tablet & mobile screens' bind:hovering={crossHovering} />
        </ol>
      </div>
    </div>
    <div class="w-1/2">
      <div class="w-2/3 m-auto">
        <h3 class="text-2xl text-right mb-4">Desktop</h3>
        <LandingDesktop bind:logoHovering={logoHovering} bind:handHovering={handHovering} bind:textHovering={textHovering} bind:contactHovering={contactHovering} bind:crossHovering={crossHovering} />
      </div>
      <div class="w-2/3 m-auto">
        <h3 class="text-2xl text-right mb-4">Mobile</h3>
        <div class="w-1/2 m-auto">
          <LandingTablet bind:logoHovering={logoHovering} bind:handHovering={handHovering} bind:textHovering={textHovering} bind:contactHovering={contactHovering} bind:crossHovering={crossHovering} />
        </div>
      </div>
    </div>
  </div>


  <div class="w-full flex flex-row flex-wrap items-center p-4 mt-20">
    <div class="w-1/2">
      <div class="w-2/3 m-auto">
        <h3 class="text-2xl text-right mb-4">Desktop</h3>

        <div class="grid grid-cols-12 place-items-center mt-10 -mb-2.5 px-0">
          <Header class="col-span-12 mb-4" />

          <ProjectsNumber classes='col-start-1 col-span-1 self-start mt-1/2' bind:hovering={bnwHovering} number=1 />
          <Artwishlist class="col-start-2 col-span-10" />
          
          <ProjectsNumber classes='col-start-2 col-span-2 justify-self-center -mt-1/3 mb-4' bind:hovering={iconsHovering} number=2 />
          <div class="col-span-8"></div>

          <MyTomorrows class="col-start-5 col-span-7 mb-4" />
          <ProjectsNumber classes='col-start-12 col-span-1 self-start mt-16/10' bind:hovering={carouselHovering} number=3 />
          
          <Mobiquity class="col-start-1 col-span-9 mb-4" />
          <ProjectsNumber classes='col-start-11 col-span-1 self-start mt-21/10' bind:hovering={gridHovering} number=4 />
        </div>
      </div>
    </div>
    
    <div class="w-1/2 m-auto">
      <div class="w-2/3 m-auto">
        <h3 class="text-2xl text-right mb-4">Mobile</h3>
        <div class="w-2/3 m-auto mb-8">
          <ProjectsNumber classes='text-center' bind:hovering={carouselHovering} number=3 />
          <MyTomorrowsMobile class="w-full" />
        </div>

        <h3 class="text-2xl">Projects Page</h3>
        <ol class="text-xl">
          <CaseListItem number=1 description='Black & White shades create a clean & easy to navigate website & also allow the cases to stand out with their own color.' bind:hovering={bnwHovering} />
          <CaseListItem number=2 description='The icons showcase the work experience gained using various technologies, tools & programming languages & are instantly recognisable by the targeted website visitors.' bind:hovering={iconsHovering} />
          <CaseListItem number=3 description="The carousel portrays up to 4 key elements of romdim's clients, adhering to Nielsen Norman Group's <a href='https://www.nngroup.com/articles/designing-effective-carousels/' target='_blank' class='underline'>advice</a>, depicting the 'good work' while also reassuring that the visitor remains engaged." bind:hovering={carouselHovering} />
          <CaseListItem number=4 description='Breaking the grid gives a fresh tone emphasis to the components.' bind:hovering={gridHovering} />
        </ol>
      </div>
    </div>
  </div>
</div>