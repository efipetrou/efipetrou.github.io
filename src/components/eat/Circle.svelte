<script>
  export let color: string = "black";
  export let title: string = "Color Title";
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" aria-labelledby="logoTitle logoDesc" role="img" class="{$$props.class}">
  <title id="logoTitle">{title} circle</title>
  <desc id="logoDesc">Colored circles for Eat Project</desc>
  <circle cx="1" cy="1" r="1" stroke="none" fill={color} />
</svg>