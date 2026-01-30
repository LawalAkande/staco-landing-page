<template>
  <button
    class="group bg-LightGrayGreen hover:bg-ParisGreen relative cursor-pointer overflow-hidden rounded-full px-4 py-7 transition-all duration-300 ease-in-out"
    :class="[widthClass, colorClass]"
  >
    <span
      class="absolute top-1/2 left-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:-top-full font-bold text-black"
    >
      {{ topText }}
    </span>

    <span
      class="absolute -bottom-full left-1/2 inline-block -translate-x-1/2 translate-y-1/2 transition-all duration-300 ease-in-out group-hover:bottom-1/2 font-bold text-white"
    >
      {{ bottomText }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  topText: string;
  bottomText: string;
  width?: string;
  colorClass?: string;
}>();

const widthClass = computed(() => props.width ?? "");
const colorClass = computed(() => props.colorClass ?? "");
</script>
