<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--fe"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    data-icon="fe:pause"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm7 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z"
    ></path>
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
