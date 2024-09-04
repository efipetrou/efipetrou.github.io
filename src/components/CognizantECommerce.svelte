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
	import ECommerce from '../images/cognizant/ECommerce.png';
</script>

<div class="w-full mb-4 text-base sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12 sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl sm:mx-2">
  <p>E-commerce Platform</p>
</div>

<div class="grid grid-cols-2 mb-8 text-sm sm:relative sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl">
  <p class="col-span-2 mb-8 lg:col-span-1 sm:mt-8 4xl:mb-2 sm:mx-2">I was one of the 2 designers responsible for redesigning some of the key features of the e-commerce platform for this Dutch agricultural machine manufacturer in order to increase the leads and the conversion of their website.</p>
  <span class="col-span-2 lg:col-span-1"></span>
  <div class="col-span-2 mb-4 lg:col-span-1 sm:mx-2 lg:mb-0">
    <p class="text-efi">Client</p>
    <p>Dutch agricultural machine manufacturer</p>
    <p class="text-efi">Employer</p>
    <p>Mirabeau / Cognizant</p>
    <p class="text-efi">Role</p>
    <p>Product / Visual Designer</p>
    <p class="text-efi">Key Activities</p>
    <p>Workshops, Web Responsive Screens, Design Optimisations, Handover to Developers</p>
  </div>
  <div class="col-span-2 lg:col-span-1 bg-cognizant-ecommerce sm:mx-2">
    <figure class="w-1/2 m-auto my-16">
      <img src={ECommerce} alt="E-commerce Platform" class="w-full">
    </figure>
  </div>
</div>

<NextProjects bind:mediahuis bind:pgb bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat bind:film currentProject='cognizantECommerce' />
