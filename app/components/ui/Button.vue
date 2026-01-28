<script setup lang="ts">
defineProps<{
  label?: string;
  to?: string;
  variant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}>();
</script>

<template>
  <UButton
    v-if="to"
    :to="to"
    :variant="variant"
    :size="size"
    class="cursor-pointer rounded-full font-semibold"
  >
    <slot>{{ label }}</slot>
  </UButton>

  <UButton
    v-else
    :variant="variant"
    :size="size"
    class="cursor-pointer rounded-full font-semibold"
  >
    <slot>{{ label }}</slot>
  </UButton>
</template>
