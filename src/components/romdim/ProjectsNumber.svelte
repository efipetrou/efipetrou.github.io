<script>
  import toggleArrayBool from '../../lib/toggleArrayBool';
  export let classes: string = '';
  export let number: number = 1;

  export let hoverings: boolean[];
  
  const toggleHovering = () => hoverings = toggleArrayBool(hoverings, number);
</script>

<style>
  .-mt-1\/3 {
    margin-top: -33%;
  }

  .mt-1\/2 {
    margin-top: 40%;
  }

  .mt-16\/10 {
    margin-top: 160%;
  }

  .mt-21\/10 {
    margin-top: 210%;
  }
</style>

<p class={`${classes} cursor-pointer text-xs`} class:text-hover={hoverings[number-1]} on:touchend|preventDefault={toggleHovering} on:mouseover={toggleHovering}>{number}</p>