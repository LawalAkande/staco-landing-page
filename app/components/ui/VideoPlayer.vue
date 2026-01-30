<template>
  <div class="relative rounded-3xl bg-red-200 max-w-112.5 mt-10 md:mt-0">
    <video ref="videoRef" autoplay class="rounded-3xl w-full h-84 object-cover">
      <source :src="HeroVideo" type="video/mp4" />
    </video>

    <Button
      class="cursor-pointer absolute bottom-4 right-4 rounded-full p-2"
      @click="togglePlay"
    >
      <PlayIcon v-if="!isPlaying" class="w-5 h-5 text-white" />
      <PauseIcon v-else class="w-5 h-5 text-white" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./btn/Button.vue";
import PlayIcon from "../icons/PauseIcon.vue";
import PauseIcon from "../icons/PauseIcon.vue";
import HeroVideo from "../../assets/videos/staco-video.mp4";

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(true);

const togglePlay = () => {
  if (!videoRef.value) return;

  if (videoRef.value.paused) {
    videoRef.value.play();
    isPlaying.value = true;
  } else {
    videoRef.value.pause();
    isPlaying.value = false;
  }
};
</script>
