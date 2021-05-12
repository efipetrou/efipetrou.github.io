<script>
  import toggleArrayBool from '../../lib/toggleArrayBool';
  export let number: number = 1;
  export let description: string = '';

  export let hoverings: boolean[];
  const toggleHovering = () => hoverings = toggleArrayBool(hoverings, number);
</script>

<li class="flex my-4" on:touchend|preventDefault={toggleHovering} on:mouseover={toggleHovering}>
  <p class="flex-shrink-0 w-6 cursor-pointer" class:text-hover={hoverings[number-1]}>{number}</p>
  <p>{@html description}</p>
</li>