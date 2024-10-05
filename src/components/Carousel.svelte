<script>
  import { Carousel } from "flowbite-svelte";
  import { CarouselTransition } from "flowbite-svelte";
  import { images } from "./imagesData/+server.js";
  let showThumbs = false;
  let showCaptions = false;
</script>

<div class="max-w-xs lg:max-w-lg xl:max-w-xl">
  <CarouselTransition
    {images}
    loop
    transitionType="fade"
    transitionParams={{ duration: 100 }}
    showCaptions={false}
    showThumbs={false}
    duration="4000"
  />
</div>
