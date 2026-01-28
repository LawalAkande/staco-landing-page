<template>
  <div class="relative rounded-3xl bg-red-200 max-w-112.5">
    <video ref="videoRef" autoplay class="rounded-3xl w-full h-84 object-cover">
      <source src="assets/videos/staco-video.mp4" type="video/mp4" />
    </video>

    <UButton
      size="sm"
      variant="solid"
      class="cursor-pointer absolute bottom-4 right-4 rounded-full p-2"
      @click="togglePlay"
    >
      <IconPlay v-if="!isPlaying" class="w-5 h-5 text-white" />
      <IconPause v-else class="w-5 h-5 text-white" />
    </UButton>
  </div>
</template>

<script setup lang="ts">
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
