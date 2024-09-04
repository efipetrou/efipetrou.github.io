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
  
  import Logo from '../images/mediahuis/LogoSmall.svelte';
  import TLDesignSystem from '../images/mediahuis/TL_Design System_Project.png';
  import DataVisualisation from '../images/mediahuis/Data_Project.png';
  import EmailsCampaigns from '../images/mediahuis/Emails_Campaigns_Project.png';
</script>

<div class="w-full mb-4 sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12">
  <Logo class="float-left w-10 h-10 mt-2 mr-2 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-24 2xl:h-24 4xl:w-32 4xl:h-32" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">At Mediahuis, responsibilities include maintaining design systems for Telegraaf.nl and the Subscription System, enhancing them in collaboration with CRO and marketing teams. Key tasks also involve designing scalable email templates, providing UX/UI feedback for Dumpert.nl, and working with Chameleon, our white-label system. Additionally, I optimise Figma workflows, improve  design processes, and mentor design interns.</p>
</div>

<ProjectBlock first={true}>
  <span slot="title" class="sm:mt-8">Telegraaf's Design System</span>
  <span slot="text">
    <p class="mb-4">The "Telegraaf Design System" project involved maintaining and updating the primary design system for Mediahuis' most complex initiative. Significant updates included the introduction of new, consistent colour palettes designed with accessibility standards in mind.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={TLDesignSystem} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock first={true}>
  <span slot="title" class="sm:mt-8">Marketing Emails</span>
  <span slot="text">
    <p class="mb-4">The "Marketing Emails" project focused on creating scalable and reusable email templates for various Mediahuis brands. Through research, design iterations, and visual and feasibility check-ins, the design system was updated to accommodate these templates. The result was a set of versatile email templates with variants incorporated into Telegraaf's design system, ensuring consistency and efficiency across the brand's communications.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={EmailsCampaigns} alt="Emails & Campaigns" >
  </div>
</ProjectBlock>

<ProjectBlock>
  <span slot="title" class="sm:mt-8">Data Visualisation</span>
  <span slot="text">
    <p>This "Data Visualisation" project involved creating templates for various entities within the Mediahuis ecosystem. Following the Chameleon White Label design system, the templates incorporate Mediahuis' brand identity, ensuring consistency in colors, typography, and overall visual language. The result is a set of versatile templates that effectively communicate data while aligning with the brand's design standards.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={DataVisualisation} alt="Data Visualisation">
  </div>
</ProjectBlock>

<NextProjects bind:mediahuis bind:pgb bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat bind:film currentProject='mediahuis' />
