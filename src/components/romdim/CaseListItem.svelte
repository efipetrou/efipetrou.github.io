<script>
  // Purgecss classes that are dynamically created and need to be parsed for production non-purging:
  // text-hover
  
  import toggleArrayBool from '../../lib/toggleArrayBool';
  export let number: number = 1;
  export let description: string = '';

  export let hoverings: boolean[];
  const toggleHovering = () => hoverings = toggleArrayBool(hoverings, number);
</script>

<li class="flex my-4 cursor-pointer 4xl:my-10" on:touchend|preventDefault={toggleHovering} on:mouseover={toggleHovering} on:focus={toggleHovering}>
  <p class="flex-shrink-0 w-6" class:text-hover={hoverings[number-1]}>{number}</p>
  <p>{@html description}</p>
</li>
