<template>
  <section
    class="relative overflow-hidden bg-Dark text-white px-4 py-4 md:px-0 md:h-[90vh]"
  >
    <Navbar />

    <div
      class="container mx-auto py-6 flex flex-col space-y-0 items-center md:flex-row md:space-y-4 md:justify-between md:py-34"
    >
      <div class="space-y-4 md:space-y-8">
        <h1
          class="font-plus-jakarta font-bold text-4xl text-white tracking-wide leading-12 md:leading-22 md:text-[60px]"
        >
          Financial Security
          <span class="flex space-x-3">
            <span> Made </span> <WordRotator />
          </span>
        </h1>

        <p
          class="font-semibold text-[18px] md:heading-[3rem] md:leading-8 md:max-w-148"
        >
          Staco is the dedicated platform for human management that helps to
          grow your startup business quickly.
        </p>

        <div class="flex flex-col items-center gap-4 pt-6">
          <ButtonSlideToTop
            topText="Get Start For Free"
            bottomText="Get Start For Free"
            width="w-72"
          />

          <Button
            class="bg-transparent text-white hover:bg-transparent hover:text-ParisGreen font-bold text-md px-10 py-4 duration-500 animate-all md:px-5 md:py-2"
          >
            Let’s talk →
          </Button>
        </div>
      </div>

      <VideoPlayer />
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from "../layout/Navbar.vue";
import Button from "../ui/btn/Button.vue";
import ButtonSlideToTop from "../ui/btn/ButtonSlideToTop.vue";
import VideoPlayer from "../ui/VideoPlayer.vue";
import WordRotator from "../ui/WordRotator.vue";
</script>
