<script>
  export let classes: string = '';
  export let hovering = false;
  export let number: string = '1';

  const toggleHovering = () => hovering = !hovering;
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

<p class={`${classes} cursor-pointer text-xl`} class:text-hover={hovering} on:mouseenter={toggleHovering} on:mouseleave={toggleHovering}>{number}</p>