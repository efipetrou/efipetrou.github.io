<script>
  import NextProjects from './NextProjects.svelte';
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

  import ProjectBlock from './ProjectBlock.svelte';

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
</script>

<div class="w-full mb-4 sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12">
  <Logo class="float-left w-10 mt-2 mr-2 sm:w-12 lg:w-14 2xl:w-24 4xl:w-32" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">web app has food as its protagonist & 3 primary functions: to gather recipes, organise a weekly planner & write down a grocery list, using old-fashioned recipe books as an aesthetic guide.</p>
</div>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">UX Research</span>
  <span slot="text">
    <p>After conducting a small scale UX Research with a target group of 5 individuals, aged 25-35, which is usually when people move out of their parental home & create their own, I figured out that one of the main pain points for everyone was: "What am I going to cook for tomorrow?"</p>
    <p>The result? A tailor-made solution for everyone, a weekly planner through their own digital recipes with an auto-generate shuffling functionality.</p>
  </span>
  <figure slot="images" class="w-2/3 m-auto sm:w-1/2 sm:p-8 4xl:pb-24">
    <img src={WeeklyPlanner} alt="Analog Weekly Planners" class="m-auto">
    <figcaption class="text-center text-xxs lg:text-sm 2xl:text-base lg:mt-2 2xl:mt-4">Analog Weekly Planners</figcaption>
  </figure>
</ProjectBlock>

<ProjectBlock>
  <span slot="title" class="sm:mt-2">Moodboard</span>
  <span slot="text">
    <p>The initial moodboard creates a unique atmosphere & communicates the experience of the forthcoming result.</p>
    <p>Seeking inspiration from various sources enabled me to avoid sterile commonality. Cinema, vintage images & my old fashioned recipe book was the perfect combination to get ideas from.</p>
    <p>The vibrant color palette which is influenced by Wes Anderson's masterpiece "The Grand Budapest Hotel”, cultivates intense emotions, whilst nostalgia is the primary feeling that arises from the gravure icons.</p>
  </span>

  <!-- <div class="w-full sm:w-1/2 sm:px-8 sm:pb-8">
    <Moodboard />
  </div> -->

  <div slot="images" class="flex flex-row-reverse items-center w-full sm:w-1/2 sm:px-8 sm:pb-8 4xl:pb-24">
    <div class="flex-col items-stretch flex-1 h-full m-auto space-y-4">
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
              <img src={Cutlery} alt="Moodboard - Cutlery" class="object-contain w-2/3">
              <img src={GroceryList} alt="Moodboard - Grocery List" class="object-contain w-1/3">
          </div>
          <div class="flex items-center">
              <img src={Calendar} alt="Moodboard - Calendar" class="object-contain w-1/2">
              <img src={Tips} alt="Moodboard - Tips" class="object-contain w-1/2">
          </div>
        </div>
        <img src={Bookshelf} alt="Moodboard - Book Kiosk" class="object-contain w-2/5" />
      </div>

      <img src={RecipeBook} alt="Moodboard - Recipe Book" class="object-contain w-full"/>
    </div>
  </div>
</ProjectBlock>

<ProjectBlock>
  <span slot="title" class="sm:mt-8">Wireframes</span>
  <span slot="text">
    <p>In a social media addicted society I wanted to create a digital solution for recipes which would be free of the endless information bombardment that we experience in our everyday life.</p>
    <p>Thus, my recipes would be shareable but not explorable and therefore no likes or comments would take place either.</p>
  </span>
  <div slot="images" class="flex flex-wrap items-center justify-items-start sm:w-1/2 sm:pt-8 sm:px-8 sm:pb-4 4xl:pb-24">
    <img src={ActionsMobile} alt="Wireframe - User Flow" class="w-7/12">
    <img src={Mobile} alt="Wireframe - Recipe - Mobile version" class="w-5/12">
    <img src={Desktop} alt="Wireframe - Recipe - Desktop version" class="w-full m-auto">
  </div>
</ProjectBlock>

<ProjectBlock absolute={true}>
  <span slot="title">Next Steps</span>
  <span slot="text">
    <p>Subsequent plans include the design of an MVP, launching the web app and performing a new UX research with live interviews of testing the product under observation.</p>
  </span>
</ProjectBlock>

<NextProjects bind:mediahuis bind:pgb bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat bind:film currentProject='eat' />
