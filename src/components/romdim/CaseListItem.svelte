<script>
  export let number: string = '1';
  export let description: string = '';

  export let hovering = false;

  const toggleHovering = () => hovering = !hovering;
</script>

<li class="flex my-4" on:mouseenter={toggleHovering} on:mouseleave={toggleHovering}>
  <p class="flex-shrink-0 w-6 cursor-pointer" class:text-hover={hovering}>{number}</p>
  <p>{@html description}</p>
</li>