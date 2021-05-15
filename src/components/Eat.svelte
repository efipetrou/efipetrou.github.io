<script>
  import { scrollToTop } from "svelte-scrollto";

  import RomdimLogo from '../images/romdim/Logo.svelte';
  import TatLogo from '../images/tat/Logo.svelte';

  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  const close = (): void => {
    scrollToTop();
    setTimeout(() => eat = false, 500);
  };
  const openRd = (): void => {
    close();
    rd=true;
  };
  const openTat = (): void => {
    close();
    tat=true;
  };
  
  import Logo from '../images/eat/Logo.svelte';
  import WeeklyPlanner from '../images/eat/weekly-planner.jpg';
  import Bookshelf from '../images/eat/bookshelf.jpg';
  import Circle from './eat/Circle.svelte';
  import Cutlery from '../images/eat/gravure/cutlery.png';
  import Calendar from '../images/eat/gravure/calendar.png';
  import GroceryList from '../images/eat/gravure/grocery-list.png';
  import Tips from '../images/eat/gravure/tips.png';
  import RecipeBookCover from '../images/eat/recipe-book-cover.jpg';
  import RecipeBookFront from '../images/eat/recipe-book-front.jpg';
  import ActionsDesktop from '../images/eat/actions-desktop.jpg';
  import ActionsMobile from '../images/eat/actions-mobile.jpg';
  import Desktop from '../images/eat/desktop.jpg';
  import Mobile from '../images/eat/mobile.jpg';
</script>

<style>
  .w-1\/10 {
    width: 10%;
  }
  .w-7\/8 {
    width: 87.5%;
  }
</style>

<div class="w-full sm:w-1/2 mb-4">
  <Logo class="w-24 mr-4 float-left" />
  <p class="text-sm sm:text-2xl">Eat web app has food as its protagonist & 3 primary functions: to gather recipes, organise a weekly planner & write down a grocery list, using old-fashioned recipe books as an aesthetic guide.</p>
</div>

<div class="relative sm:flex w-full pl-4">
  <h3 class="text-base">UX Research</h3>

  <div class="text-sm sm:text-xl">
    <p>After conducting a small scale UX Research with a target group of 5 individuals, aged 25-35, which is usually when people move out of their parental home & create their own, I figured out that one of the main pain points for everyone was: "What am I going to cook for tomorrow?"</p>
    <p>The result? A tailor-made solution for everyone, a weekly planner through their own digital recipes with an auto-generate shuffling functionality.</p>
  </div>

  <figure class="w-2/3 m-auto">
    <img src={WeeklyPlanner} alt="Eat Weekly Planner">
    <figcaption class="text-center mt-2 text-sm sm:text-2xl">Stack of Weekly Planners</figcaption>
  </figure>

  <div class="border-l border-black h-32 w-px absolute left-0 top-1/2 transform -translate-y-1/2">
    <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 absolute transform -left-4 top-1/2 translate-x-1/2 -translate-y-1/2 bg-efi">
    </div>
  </div>
</div>

<!-- <p class="text-right mt-8 text-sm sm:text-2xl">Stack of Weekly Planners</p>
<div class="flex items-center my-4 w-full">
  <div class="w-1/2 text-sm sm:text-xl flex-shrink-0">
    <p>After conducting a small scale UX Research with a target group of 5 individuals, aged 25-35, which is usually when people move out of their parental home & create their own, I figured out that one of the main pain points for everyone was: "What am I going to cook for tomorrow?"</p>
    <p>The result? A tailor-made solution for everyone, a weekly planner through their own digital recipes with an auto-generate shuffling functionality.</p>
  </div>

  <div class="w-1/3 m-auto">
    <img src={WeeklyPlanner} alt="Eat Weekly Planner">
  </div>
</div> -->

<div class="relative sm:flex w-full pr-4">
  <h3 class="text-base">Moodboard</h3>

  <div class="text-sm sm:text-xl">
    <p>The initial moodboard creates a unique atmosphere & communicates the experience of the forthcoming result.</p>
    <p>Seeking inspiration from various sources enabled me to avoid sterile commonality. Cinema, vintage images & my old fashioned recipe book was the perfect combination to get ideas from.</p>
    <p>The vibrant color palette which is influenced by Wes Anderson's masterpiece "The Grand Budapest Hotel”, cultivates intense emotions, whilst nostalgia is the primary feeling that arises from the gravure icons.</p>
  </div>

  <div class="flex items-center w-full">
    <div class="flex-1 flex-col items-stretch space-y-4 h-full m-auto">
      <Circle color="#733080" />
      <Circle color="#F4BAC8" />
      <Circle color="#A40607" />
      <Circle color="#728889" />
      <Circle color="#F0C595" />
      <Circle color="#F5EBC6" />
    </div>

    <div class="w-7/8">
      <div class="flex items-center">
        <div class="w-3/5 px-4">
          <div class="flex items-center">
              <img src={Cutlery} alt="Eat Moodboard - Cutlery Gravure" class="w-2/3 object-contain">
              <img src={GroceryList} alt="Eat Moodboard - Grocery List Gravure" class="w-1/3 object-contain">
          </div>
          <div class="flex items-center">
              <img src={Calendar} alt="Eat Moodboard - Calendar Gravure" class="w-1/2 object-contain">
              <img src={Tips} alt="Eat Moodboard - Tips Gravure" class="w-1/2 object-contain">
          </div>
        </div>
        <img src={Bookshelf} alt="Eat Moodboard - Bookshelf" class="w-2/5 object-contain" />
      </div>

      <img src={RecipeBookFront} alt="Eat Moodboard - Recipe Book Front" class="w-full object-contain"/>
    </div>

  </div>
  <div class="flex flex-row-reverse w-full">
    <!-- <img src={RecipeBookCover} alt="Eat Moodboard - Recipe Book Cover" class="w-2/6 object-contain absolute left-1/3 transform -translate-x-1/2" /> -->
  </div>

  <div class="border-r border-black h-32 w-px absolute right-0 top-1/2 transform -translate-y-1/2">
    <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 absolute transform -left-4 top-1/2 translate-x-1/2 -translate-y-1/2 bg-efi">
    </div>
  </div>
</div>

<!-- <p class="my-4 text-right text-sm sm:text-2xl">Moodboard</p>
<div class="sm:flex items-center my-4 w-full">
  <div class="w-full sm:w-1/2 text-sm sm:text-xl">
    <p>The initial moodboard creates a unique atmosphere & communicates the experience of the forthcoming result.</p>
    <p>Seeking inspiration from various sources enabled me to avoid sterile commonality. Cinema, vintage images & my old fashioned recipe book was the perfect combination to get ideas from.</p>
    <p>The vibrant color palette which is influenced by Wes Anderson's masterpiece "The Grand Budapest Hotel”, cultivates intense emotions, whilst nostalgia is the primary feeling that arises from the gravure icons.</p>
  </div>

  <div class="sm:flex space-x-4 w-full sm:w-1/2">
    <img src={Bookshelf} alt="Eat Moodboard - Bookshelf" class="w-1/3 h-1/2" />
  
    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-1"></div>
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-2"></div>
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-3"></div>
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-4"></div>
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-5"></div>
        <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 flex place-items-center eat-color-6"></div>
      </div>

      <div class="flex space-x-4 h-20">
        <img src={Cutlery} alt="Eat Moodboard - Cutlery Gravure" class="w-8 sm:w-32">
        <img src={Calendar} alt="Eat Moodboard - Calendar Gravure" class="w-6 sm:w-24">
        <img src={GroceryList} alt="Eat Moodboard - Grocery List Gravure" class="w-4 sm:w-16">
        <img src={Tips} alt="Eat Moodboard - Tips Gravure" class="w-6 sm:w-24">
      </div>

      <div class="flex space-x-4 h-48">
        <img src={RecipeBookCover} alt="Eat Moodboard - Recipe Book Cover" class="w-1/3 sm:w-48" />
        <img src={RecipeBookFront} alt="Eat Moodboard - Recipe Book Front" class="w-2/3 sm:w-60"/>
      </div>
    </div>
  </div>
</div> -->

<div class="relative sm:flex w-full pl-4">
  <h3 class="text-base">Wireframes</h3>

  <div class="text-sm sm:text-xl">
    <p>In a social media addicted society I wanted to create a digital solution for recipes which would be free of the endless information bombardment that we experience in our everyday life.</p>
    <p>Thus, my recipes would be shareable but not explorable and therefore no likes or comments would take place either.</p>
  </div>

  <figure class="w-2/3 m-auto">
    <img src={ActionsMobile} alt="Actions">
    <!-- <img src={ActionsDesktop} alt="Actions" class="w-full m-auto"> -->
    <figcaption class="text-center mt-2 text-sm sm:text-2xl">Actions</figcaption>
  </figure>

  <div class="border-l border-black h-32 w-px absolute left-0 top-1/2 transform -translate-y-1/2">
    <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 absolute transform -left-4 top-1/2 translate-x-1/2 -translate-y-1/2 bg-efi">
    </div>
  </div>
</div>

<div class="relative sm:flex w-full pr-4">
  <h3 class="text-base">Next Steps</h3>

  <div class="text-sm sm:text-xl">
    <p>Next steps include the design of an MVP, launching the web app and performing a new UX research with live interviews of testing the product under observation.</p>
  </div>

  <div class="flex justify-items-start items-center">
    <figure class="w-2/3 m-auto">
      <img src={Desktop} alt="Recipe Wireframe Desktop">
      <figcaption class="text-center mt-2 text-sm sm:text-2xl">Actions</figcaption>
    </figure>
    <figure class="w-1/4 m-auto">
      <img src={Mobile} alt="Recipe Wireframe Mobile">
      <figcaption class="text-center mt-2 text-sm sm:text-2xl">Actions</figcaption>
    </figure>
  </div>

  <div class="border-r border-black h-32 w-px absolute right-0 top-1/2 transform -translate-y-1/2">
    <div class="rounded-full h-4 w-4 sm:h-16 sm:w-16 absolute transform -left-4 top-1/2 translate-x-1/2 -translate-y-1/2 bg-efi">
    </div>
  </div>
</div>

<!-- <div class="my-4 text-right">
  <p>Wireframes</p>
  <p>Desktop & Mobile</p>
</div>
<img src={ActionsDesktop} alt="Actions" class="w-full m-auto">
<img src={ActionsMobile} alt="Actions" class="w-1/2 float-right">

<hr class="border-t-4 border-efi"/>

<div class="flex justify-items-start items-center">
  <img src={Desktop} alt="Recipe Wireframe Desktop" class="w-2/3">
  <img src={Mobile} alt="Recipe Wireframe Mobile" class="pt-8 w-1/4">
</div>

<hr class="border-t-4 border-efi"/>

<p class="w-1/2 text-sm sm:text-xl">In a social media addicted society I wanted to create a digital solution for recipes which would be free of the endless information bombardment that we experience in our everyday life.</p>
<p class="w-1/2 text-sm sm:text-xl">Thus, my recipes would be shareable but not explorable and therefore no likes or comments would take place either.</p>
<p class="w-1/2 text-sm sm:text-xl">Next steps include the design of an MVP, launching the web app and performing a new UX research with live interviews of testing the product under observation.</p> -->

<div class="w-full cursor-pointer mt-8" on:click={openTat}>
  <TatLogo class="w-full m-auto bg-tat" />
</div>
<div class="w-full border border-black aspect-w-16 aspect-h-9 cursor-pointer mt-8" on:click={openRd}>
  <RomdimLogo class="w-1/4 m-auto" />
</div>