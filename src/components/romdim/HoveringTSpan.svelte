<script>
  // Purgecss classes that are dynamically created and need to be parsed for production non-purging:
  // efi
  
  import toggleArrayBool from '../../lib/toggleArrayBool';
  export let number: number = 1;
  export let coordinates: {x: string, y: string};
  // const hoveredText: string = 'lg:text-xs efi';
  
  export let hoverings: boolean[];

  const toggleHovering = () => hoverings = toggleArrayBool(hoverings, number);
</script>

<tspan x={coordinates.x} y={coordinates.y} class:efi={hoverings[number-1]} on:touchend|preventDefault={toggleHovering} on:mouseover={toggleHovering} on:focus={toggleHovering}>{number}</tspan>
