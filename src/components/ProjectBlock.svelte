<script>
  import Border from './Border.svelte';

  export let absolute: boolean = false;
  export let first: boolean = false;
</script>

<Border />
<div class="relative sm:flex w-full mb-4 sm:mb-0" class:sm:-mt-4={absolute} class:4xl:-mt-24={absolute} class:4xl:mb-24={absolute}>
  <div class="sm:w-1/2 sm:border-r 2xl:border-r-2 border-black text-sm sm:text-base lg:text-xl 2xl:text-2xl 4xl:text-3xl" class:sm:absolute={absolute} class:sm:transform={absolute} class:sm:-translate-y-full={absolute} class:sm:relative={!absolute}>
    <div class="hidden sm:block rounded-full h-5 w-5 2xl:h-8 2xl:w-8 absolute transform left-full -translate-x-1/2+1 bg-efi z-40" class:translate-y-8={first} class:lg:translate-y-1={!first}>
    </div>
    <h3 class="sm:pr-4 4xl:mb-2" class:sm:mt-8={first}>
      <slot name="title"></slot>
    </h3>

    <div class="4xl:w-4/5 sm:pr-4">
      <slot name="text"></slot>
    </div>
  </div>

  <slot name="images"></slot>
</div>