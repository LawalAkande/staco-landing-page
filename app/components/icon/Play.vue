<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--material-symbols"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    data-icon="material-symbols:play-arrow"
  >
    <path fill="currentColor" d="M8 19V5l11 7z"></path>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "w-8 h-8",
  color: "text-white",
});

const iconClass = computed(() => `${props.size} ${props.color} cursor-pointer`);
</script>
