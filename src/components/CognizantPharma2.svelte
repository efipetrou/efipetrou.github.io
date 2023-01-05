<script>
  import NextProjects from './NextProjects.svelte';
  export let cognizantPharma2: boolean = false;
  export let cognizantECommerce: boolean = false;
  export let cognizantPharma1: boolean = false;
  export let mesogheo: boolean = false;
  export let rd: boolean = false;
  export let eat: boolean = false;
  export let tat: boolean = false;
  
  import Logo from '../images/cognizant/Logo.svelte';
	import Pharma2 from '../images/cognizant/Pharma2.png';
</script>

<div class="w-full mb-4 text-base sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12 sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">
  <p>Digital Innovation Ecosystem</p>
</div>

<div class="grid grid-cols-2 mb-8 text-sm sm:relative sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <p class="col-span-2 mb-8 lg:col-span-1 sm:mt-8 4xl:mb-2">This is my current project, a platform that acts as a central place for everything digital innovation related in one of the biggest multinational pharmaceutical & healthcare corporations.</p>
  <span class="col-span-2 lg:col-span-1"></span>
  <div class="col-span-2 lg:col-span-1">
    <p class="text-efi">Client</p>
    <p>Multinational Pharmaceutical & Healthcare Corporation</p>
    <p class="text-efi">Employer</p>
    <p>Mirabeau / Cognizant</p>
  </div>
  <div class="col-span-2 lg:col-span-1">
    <p class="text-efi">Role</p>
    <p>Product / Visual Designer</p>
    <p class="text-efi">Key Activities</p>
    <p>Conceptualisation, Hi-Fi Wireframes, Scrum - Kanban</p>
  </div>
</div>

<div class="flex items-center mb-4 justify-items-center sm:mb-8 bg-cognizant-pharma">
  <figure class="w-1/2 m-auto my-20">
    <img src={Pharma2} alt="Digital Innovation Ecosystem" class="w-full">
  </figure>
</div>

<NextProjects bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat currentProject='cognizantPharma2' />
