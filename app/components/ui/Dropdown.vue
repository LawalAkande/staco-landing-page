<script setup lang="ts">
defineProps<{
  label: string;
  items: { label: string; to?: string }[];
}>();
</script>

<template>
  <UDropdown :items="[items]">
    <button
      class="flex items-center gap-1 text-sm font-medium hover:text-primary"
    >
      {{ label }}
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
    </button>
  </UDropdown>
</template>
