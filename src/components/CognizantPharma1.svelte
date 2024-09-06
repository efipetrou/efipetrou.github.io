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
  
  import Logo from '../images/cognizant/Logo.svelte';
	import Pharma1 from '../images/cognizant/Pharma1.png';
</script>

<div class="w-full mb-4 text-base sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12 sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl sm:mx-2">
  <p>Research Visualisation Tool</p>
  <p class="mt-6 text-xs 4xl:mt-8 sm:text-sm lg:text-base">* Happy to share the full case study in a call!</p>
</div>

<div class="grid grid-cols-2 mb-8 text-sm sm:relative sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <p class="col-span-2 mb-8 lg:col-span-1 sm:mt-4 4xl:mb-2 sm:mx-2">As part of the assigned Cognizant team to this client I designed an internal data visualisation tool that empowers scientists to take decisions for clinical trials based on data models for a multinational pharmaceutical & healthcare corporation.</p>
  <span class="col-span-2 lg:col-span-1"></span>
  <div class="col-span-2 mb-4 lg:col-span-1 sm:mx-2 lg:mb-0">
    <p class="text-efi">Client</p>
    <p>Multinational Pharmaceutical & Healthcare Corporation</p>
    <p class="text-efi">Employer</p>
    <p>Mirabeau - a Cognizant Digital Business</p>
    <p class="text-efi">Role</p>
    <p>Product / Visual Designer</p>
    <p class="text-efi">Key Activities</p>
    <p>Data Visualisation Tool, Design System, Prototypes, User Testing, Intuitive User Interface, Handover to Developers, Stakeholder Management, Scrum</p>
  </div>
  <div class="col-span-2 lg:col-span-1 bg-cognizant-pharma sm:mx-2">
    <figure class="w-1/2 m-auto my-20">
      <img src={Pharma1} alt="Research Visualisation Tool" class="w-full">
    </figure>
  </div>
</div>

<NextProjects bind:mediahuis bind:pgb bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat bind:film currentProject='cognizantPharma1' />
