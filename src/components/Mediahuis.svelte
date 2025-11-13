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
  import TLDesignSystem from '../images/mediahuis/TLDesignSystem.png';
  import SubscriptionShop from '../images/mediahuis/SubscriptionShop.png';
  import DesignOps from '../images/mediahuis/DesignOps.png';
  import Podcasts from '../images/mediahuis/Podcasts.png';
  import MarketingEmails from '../images/mediahuis/MarketingEmails.png';
  import NewslettersRegionalTitles from '../images/mediahuis/NewslettersRegionalTitles.png';
  import CRO from '../images/mediahuis/CRO.png';
  import DataVisualisation from '../images/mediahuis/DataVisualisation.png';
</script>

<div class="w-full mb-4 sm:w-4/5 xl:w-1/2 4xl:w-2/5 4xl:mb-12">
  <Logo class="float-left w-10 h-10 mt-2 mr-2 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-24 2xl:h-24 4xl:w-32 4xl:h-32" />
  <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl 4xl:text-4xl">Worked as a Product Designer at Mediahuis, previously serving as Design System Manager, with responsibilities spanning design ops.</p>
</div>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Telegraaf's Design System</span>
  <span slot="text">
    <p class="mb-4">The exercise involves maintaining and updating the primary design system for Mediahuis' most complex initiative. Significant updates included the introduction of new, consistent colour palettes designed with accessibility standards in mind.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={TLDesignSystem} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Subscription Shop</span>
  <span slot="text">
    <p class="mb-4">The project involved collaborating with a multidisciplinary team of developers, CRO specialists, a visual designer, and key stakeholders to update the live product for Telegraaf and Regional Titles. The project introduced new grids for all devices while simultaneously updating the design system to ensure consistency and scalability across brands.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={SubscriptionShop} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Design Ops</span>
  <span slot="text">
    <p class="mb-4">Recognising the need for a more structured and transparent workflow, I initiated this Design Ops project to break down silos within the company and improve efficiency. After gathering feedback from various departments, and after exploring different approaches, I collaborated with a scrum master to develop a unified process. Key improvements included cleaning up the Figma environment for better accessibility, introducing new team rituals, and mentoring new interns, all aimed at creating a more cohesive and efficient design workflow.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={DesignOps} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Podcasts</span>
  <span slot="text">
    <p class="mb-4">Partnering with the editorial team and a brand marketer, the design team aimed to to create fresh thumbnails for Telegraaf's podcast series. Research, co-design ideation sessions, and moodboards guided the process, leading to multiple design iterations. The final thumbnails successfully reflected the brand's identity while capturing the distinct vision of each podcast, satisfying both the brand and stakeholders' expectations.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={Podcasts} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Marketing Emails</span>
  <span slot="text">
    <p class="mb-4">The goal of this project was to develop scalable and reusable email templates for multiple Mediahuis brands. By conducting thorough research and iterating on designs with visual and feasibility check-ins, the design system was updated to accommodate these templates. This resulted in a flexible set of email templates, with variants integrated into Telegraaf’s design system, ensuring brand consistency across all communications.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={MarketingEmails} alt="Emails & Campaigns" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Newsletters for the Regional Titles</span>
  <span slot="text">
    <p class="mb-4">The focus here was on designing new newsletters based on the website redesign, ensuring templates were integrated with the Chameleon White Label design system and tokens. Collaboration with editorial teams, product owners, art directors, developers, and design system team members was essential throughout the process. Extensive research, design iterations, and feasibility check-ins ensured the final product aligned with both brand standards and technical requirements before handoff.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={NewslettersRegionalTitles} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">CRO A/B testing</span>
  <span slot="text">
    <p class="mb-4">Working alongside CRO specialists, the goal was to optimise the CTA buttons in the Subscription Shop by testing various colour options. Taking into account the distinct brand palettes and design system, multiple variations were developed and tested. This process led to a notable increase in the conversion rate, highlighting the effectiveness of targeted design improvements.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={CRO} alt="Telegraaf's Design System" >
  </div>
</ProjectBlock>

<ProjectBlock moveUp={true}>
  <span slot="title" class="sm:mt-8">Data Visualisation</span>
  <span slot="text">
    <p>Following the Chameleon White Label design system, this project involved creating templates for various entities within the Mediahuis ecosystem. The templates incorporate Mediahuis' brand identity, ensuring consistency in colours, typography, and overall visual language. The outcome is a set of versatile templates that effectively communicate data while aligning with the brand's design standards.</p>
  </span>
  <div slot="images" class="w-full mb-4 sm:w-1/2 sm:pt-8 sm:px-8 4xl:pb-24">
    <img src={DataVisualisation} alt="Data Visualisation">
  </div>
</ProjectBlock>

<NextProjects bind:mediahuis bind:pgb bind:cognizantPharma2 bind:cognizantECommerce bind:cognizantPharma1 bind:mesogheo bind:rd bind:eat bind:tat bind:film currentProject='mediahuis' />
