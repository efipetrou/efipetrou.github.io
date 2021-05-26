<script>
  import { scrollToTop } from "svelte-scrollto";

  import RomdimLogo from '../images/romdim/Logo.svelte';
  import TatLogo from '../images/tat/Logo.svelte';

  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;

  const close = (): void => {
    eat = false;
		scrollToTop({duration: 0});
  };
  const openRd = (): void => {
    close();
		setTimeout(() => rd = true, 100);
  };
  const openTat = (): void => {
    close();
		setTimeout(() => tat = true, 100);
  };
  
  import Logo from '../images/eat/Logo.svelte';
  import WeeklyPlanner from '../images/eat/weekly-planner.jpg';
  import Circle from './eat/Circle.svelte';
  import Bookshelf from '../images/eat/bookshelf.jpg';
  import Cutlery from '../images/eat/gravure/cutlery.png';
  import Calendar from '../images/eat/gravure/calendar.png';
  import GroceryList from '../images/eat/gravure/grocery-list.png';
  import Tips from '../images/eat/gravure/tips.png';
  import RecipeBook from '../images/eat/recipe-book.png';
  // import Moodboard from '../images/eat/Moodboard.svelte';
  import ActionsDesktop from '../images/eat/actions-desktop.jpg';
  import ActionsMobile from '../images/eat/actions-mobile.jpg';
  import Desktop from '../images/eat/desktop.jpg';
  import Mobile from '../images/eat/mobile.jpg';

  import Border from './eat/Border.svelte';
</script>

<div class="w-full sm:w-4/5 xl:w-1/2 4xl:w-2/5 mb-4 4xl:mb-12">
  <Logo class="w-10 sm:w-12 lg:w-14 2xl:w-24 4xl:w-32 float-left mt-2 mr-2" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">web app has food as its protagonist & 3 primary functions: to gather recipes, organise a weekly planner & write down a grocery list, using old-fashioned recipe books as an aesthetic guide.</p>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 translate-y-8 bg-efi z-40">
    </div>
    <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2">UX Research</h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <p>After conducting a small scale UX Research with a target group of 5 individuals, aged 25-35, which is usually when people move out of their parental home & create their own, I figured out that one of the main pain points for everyone was: "What am I going to cook for tomorrow?"</p>
      <p>The result? A tailor-made solution for everyone, a weekly planner through their own digital recipes with an auto-generate shuffling functionality.</p>
    </div>
  </div>

  <figure class="w-2/3 sm:w-1/2 m-auto sm:p-8 4xl:pb-24">
    <img src={WeeklyPlanner} alt="Analog Weekly Planners" class="m-auto">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-2 2xl:mt-4">Analog Weekly Planners</figcaption>
  </figure>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative mb-2 sm:mb-0 text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 translate-y-2 bg-efi z-30">
    </div>
    <h3 class="sm:mt-2 sm:pr-4 4xl:mb-2">Moodboard</h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <p>The initial moodboard creates a unique atmosphere & communicates the experience of the forthcoming result.</p>
      <p>Seeking inspiration from various sources enabled me to avoid sterile commonality. Cinema, vintage images & my old fashioned recipe book was the perfect combination to get ideas from.</p>
      <p>The vibrant color palette which is influenced by Wes Anderson's masterpiece "The Grand Budapest Hotel”, cultivates intense emotions, whilst nostalgia is the primary feeling that arises from the gravure icons.</p>
    </div>
  </div>

  <!-- <div class="w-full sm:w-1/2 sm:px-8 sm:pb-8">
    <Moodboard />
  </div> -->

  <div class="flex flex-row-reverse items-center w-full sm:w-1/2 sm:px-8 sm:pb-8 4xl:pb-24">
    <div class="flex-1 flex-col items-stretch space-y-4 h-full m-auto">
      <Circle color="#733080" title="eminence" />
      <Circle color="#F4BAC8" title="chantilly" />
      <Circle color="#A40607" title="sangria" />
      <Circle color="#7288B9" title="wild blue yonder" />
      <Circle color="#F0C595" title="new tan" />
      <Circle color="#F5EBC6" title="scotch mist" />
    </div>

    <div class="pr-2 w-7/8 sm:w-86/100">
      <div class="flex flex-row-reverse items-center pb-2">
        <div class="w-3/5 px-4">
          <div class="flex items-center">
              <img src={Cutlery} alt="Moodboard - Cutlery" class="w-2/3 object-contain">
              <img src={GroceryList} alt="Moodboard - Grocery List" class="w-1/3 object-contain">
          </div>
          <div class="flex items-center">
              <img src={Calendar} alt="Moodboard - Calendar" class="w-1/2 object-contain">
              <img src={Tips} alt="Moodboard - Tips" class="w-1/2 object-contain">
          </div>
        </div>
        <img src={Bookshelf} alt="Moodboard - Book Kiosk" class="w-2/5 object-contain" />
      </div>

      <img src={RecipeBook} alt="Moodboard - Recipe Book" class="w-full object-contain"/>
    </div>
  </div>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:relative text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 translate-y-8 bg-efi z-20">
    </div>
    <h3 class="sm:mt-8 sm:pr-4 4xl:mb-2">Wireframes</h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <p>In a social media addicted society I wanted to create a digital solution for recipes which would be free of the endless information bombardment that we experience in our everyday life.</p>
      <p>Thus, my recipes would be shareable but not explorable and therefore no likes or comments would take place either.</p>
    </div>
  </div>

  <div class="flex flex-wrap justify-items-start items-center sm:w-1/2 sm:pt-8 sm:px-8 sm:pb-4 4xl:pb-24">
    <img src={ActionsMobile} alt="Wireframe - User Flow" class="w-7/12">
    <img src={Mobile} alt="Wireframe - Recipe - Mobile version" class="w-5/12">
    <img src={Desktop} alt="Wireframe - Recipe - Desktop version" class="w-full m-auto">
  </div>
</div>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0 sm:-mt-4 4xl:-mt-24 4xl:mb-24">
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black sm:absolute sm:transform sm:-translate-y-full text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
    <!-- <div class="hidden lg:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 sticky transform left-full top-8 translate-x-1/2 translate-y-8 bg-efi z-10">
    </div> -->
    <h3 class="sm:pr-4 4xl:mb-2">Next Steps</h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <p>Subsequent plans include the design of an MVP, launching the web app and performing a new UX research with live interviews of testing the product under observation.</p>
    </div>
  </div>
</div>

<div class="w-full m-auto sm:flex sm:space-x-4">
  <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full cursor-pointer mt-8 bg-tat" on:click={openTat}>
    <TatLogo class="w-1/2 m-auto" />
  </div>
  <div class="aspect-w-16 aspect-h-9 sm:aspect-h-4.5 w-full border border-black cursor-pointer mt-8" on:click={openRd}>
    <RomdimLogo class="w-1/4 m-auto" />
  </div>
</div>