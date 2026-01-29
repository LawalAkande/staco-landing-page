<template>
  <svg
    :class="iconClass"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: "w-8 h-8",
  color: "text-white"
})

const iconClass = computed(
  () => `${props.size} ${props.color} cursor-pointer`
)
</script>
