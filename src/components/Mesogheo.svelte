<script>
  import NextProjects from './NextProjects.svelte';
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;
  
  import Logo from '../images/mesogheo/LogoSmall.svelte';
  import SWOT1 from '../images/mesogheo/1.SWOT-blurred.png';
  import SWOT2 from '../images/mesogheo/2.SWOT-blurred.png';
  // import SWOT3 from '../images/mesogheo/3.SWOT-blurred.png';
  import Persona from '../images/mesogheo/Persona.png';
  import Wireframe from '../images/mesogheo/Wireframe.png';
  import Mockup from '../images/mesogheo/Mockup.png';
  import Prototype from '../images/mesogheo/Prototype.png';
  import DesignSystem from '../images/mesogheo/DesignSystem.png';
  import Sitemap from '../images/mesogheo/Sitemap.png';

  // import Border from './eat/Border.svelte';
</script>

<div class="w-full sm:w-4/5 4xl:w-2/5 mb-4 4xl:mb-12">
  <Logo class="w-10 sm:w-12 lg:w-14 2xl:w-24 4xl:w-32 float-left mt-2 mr-2" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl"><a href="https://mesogheo.it" target="_blank" class="underline">Mesogheo</a> is a Bed & Breakfast, located at the feet of the mount Taburno in South Italy. The goal for the owners, Nicoletta & Fabrizio was to increase their online presence through the creation of a website so that everyone could find more details & book a room.</p>
</div>

<div class="relative sm:flex w-full mb-4 lg:mb-8">
  <div class="sm:w-4/5 sm:relative text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
    <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2 text-efi">The role</h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <p>I was responsible for the UX Research and the UI Design of the website but also for the photographs of it. Everything started off with an initial competitor's research of Mesogheo. Some early thoughts came to life as paper sketches, which on a later stage led to final polished designs.</p>
    </div>
  </div>

  <!-- <div class="flex flex-wrap justify-items-start items-center sm:w-1/2 sm:pt-8 sm:px-8 sm:pb-4 4xl:pb-24">
    <img src={ActionsMobile} alt="Wireframe - User Flow" class="w-7/12">
    <img src={Mobile} alt="Wireframe - Recipe - Mobile version" class="w-5/12">
    <img src={Desktop} alt="Wireframe - Recipe - Desktop version" class="w-full m-auto">
  </div> -->
</div>

<div class="sm:w-4/5 sm:relative mb-4 lg:mb-8 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2 text-efi">Research</h3>

  <div class="4xl:w-4/5 sm:pr-4">
    <p>A trip to Italy to visit the property & the surrounding area was the next step. On site I had to multitask. Apart from taking the photos for the website, I collaborated with the stakeholders in order to clarify & define the weaknesses & strengths of the B&B, resulting in a SWOT analysis & the creation of a Persona.</p>
  </div>
</div>

<div class="flex justify-items-center items-center mb-4 sm:mb-8">
  <figure>
    <img src={SWOT1} alt="SWOT Analysis 1" class="w-full">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-1">SWOT analysis</figcaption>
  </figure>
  <!-- <img src={SWOT2} alt="SWOT Analysis 2" class="w-1/2"> -->
  <!-- <img src={SWOT3} alt="SWOT Analysis 3" class="w-1/2"> -->
</div>

<div class="flex justify-items-center items-center mb-4 lg:mb-8">
  <figure class="w-full">
    <img src={Persona} alt="Persona" class="w-full">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-1">persona</figcaption>
  </figure>
</div>

<div class="sm:w-4/5 sm:relative mb-4 lg:mb-8 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2 text-efi">Design Process</h3>

  <div class="4xl:w-4/5 sm:pr-4">
    <p>I started constructing the pillars on top of which the whole website was built, the sitemap & the design system. My ultimate goal was to create a design that would provide a clear navigation through the website for the potential customers. The palette of colors was inspired from the buildings & nature that surrounds Mesogheo. In this phase, a logo redesign was deemed as necessary, in order to create a unified experience in all communication channels, the website, social media & business cards.</p>
  </div>
</div>

<div class="flex justify-items-center items-center mb-4 sm:mb-8 lg:mb-12">
  <figure class="w-full">
    <img src={Sitemap} alt="Sitemap" class="w-full">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-1">sitemap</figcaption>
  </figure>
</div>

<div class="flex justify-items-center items-center mb-4 lg:mb-8">
  <figure class="w-full">
    <img src={DesignSystem} alt="Design System" class="w-full">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-1">design system</figcaption>
  </figure>
</div>

<div class="sm:w-4/5 sm:relative mb-4 lg:mb-8 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2 text-efi">Design</h3>

  <div class="4xl:w-4/5 sm:pr-4">
    <p>The path from lo-fi wireframes to mockups and eventually to the <a href="https://www.figma.com/proto/WiLHni820Vs0aLNxR542aO/MESOGHEO?page-id=0%3A1&node-id=199%3A95&viewport=241%2C48%2C0.03&scaling=min-zoom&starting-point-node-id=199%3A95&show-proto-sidebar=1" target="_blank" class="underline">hi-fi prototype</a> had to be quick. Time constraint was a challenge as the stakeholders had to be ready for the high season that was coming up ahead. Mobile first approach was essential as more and more people use their mobile phones in their everyday life.</p>
  </div>
</div>

<div class="flex justify-items-center items-center mb-8">
  <figure>
    <img src={Wireframe} alt="Wireframe">
    <figcaption class="text-xxs lg:text-sm 2xl:text-base lg:mt-1">lo-fi wireframe</figcaption>
  </figure>
  <figure>
    <img src={Mockup} alt="Mockup">
    <figcaption class="text-xxs lg:text-sm 2xl:text-base lg:mt-1">mockup</figcaption>
  </figure>
</div>

<div class="flex justify-items-center items-center mb-8">
  <figure>
    <img src={Prototype} alt="Prototype">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-1">hi-fi prototype</figcaption>
  </figure>
</div>

<NextProjects bind:mesogheo bind:rd bind:eat bind:tat currentProject='mesogheo' />