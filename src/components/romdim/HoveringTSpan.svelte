<script>
  export let number: string;
  export let coordinates: {x: string, y: string};
  export let hoveredText: string = 'text-xs efi';

  export let hovering = false;

  const toggleHovering = () => hovering = !hovering;
</script>


<tspan x={coordinates.x} y={coordinates.y} class={hovering ? hoveredText : '' } on:mouseenter={toggleHovering} on:mouseleave={toggleHovering}>{number}</tspan>