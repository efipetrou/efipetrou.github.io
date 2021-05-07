<script>
  import Logo from '../images/tat/Logo.svelte';
  import Calendar from '../images/tat/Calendar.svelte';
  import PrioritiesToDo from '../images/tat/PrioritiesToDo.svelte';
  import Styles from '../images/tat/Styles.svelte';
  import Mobile from '../images/tat/Mobile.svelte';

  import Keep1 from '../images/tat/Keep1.jpg';
  import Keep2 from '../images/tat/Keep2.jpg';
</script>

<div class="w-screen sm:w-11/12 bg-white p-4 border-t sm:border-t-0 sm:border-l border-black sm:min-h-screen">
  <div class="flex mb-4">
    <Logo class="w-24 mr-4 bg-tat" />
    <p class="text-2xl w-1/2">TAT is a to-do list web app with an unvarnished non-intrusive design, has a modular layout without infinite categories, just 3 goals per day to achieve & 2 lists, to-do & notes.</p>
  </div>

  <div class="mt-8 flex w-full">
    <Calendar class="w-1/2" />
    <PrioritiesToDo class="w-1/2" />
  </div>

  <div class="mt-8 flex w-full items-center">
    <div class="text-2xl w-1/2">
      <p>It came out as a necessity when I was confronted with all the small chores needed to be done in order to turn a new house into a home. After a lot of unsuccessful trials of analog and digital overcomplicated tools and soon-to-be-lost post-its, I came up with the bare minimum viable product that I could live with, TAT.</p>
      
      <p class="mt-4">After my first project (romdim.nl), I understood the importance of the design system which builds consistency & gives the opportunity to reuse every component efficiently. 
      <p>Also, the mobile first approach is the only way forward, when you have limited space to fit the essential elements of your project.</p>
  
      <p class="mt-4">Plain & unsophisticated design with straight lines, earthy colours & a well combined typography fulfill its purpose.</p>
    </div>
    <Styles class="w-1/2" />
  </div>

  <div class="mt-8 flex w-full">
    <img src={Keep1} alt="Google Keep Sidebar" class="w-1/4 m-auto">
    <img src={Keep2} alt="Google Keep ToDo" class="w-1/4 m-auto">
    <Mobile class="w-1/3" />
  </div>
  
  <p class="w-1/2 mt-4 text-2xl">Google Keep numbers among the great list of to-do apps, yet TAT excels in its free-notification & privacy-awareness.</p>
</div>