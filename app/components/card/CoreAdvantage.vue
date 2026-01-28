<script setup lang="ts">
import type { CardProps } from "~/types/ui/card";

defineProps<CardProps>();
</script>

<template>
  <div
    class="group bg-SoftPeach space-y-5 px-6 py-8 rounded-3xl md:px-10 md:py-12 md:space-y-8"
  >
    <div>
      <img :src="icon" :alt="icon" />
    </div>

    <div class="space-y-4 mb-4 md:mb-8">
      <h3 class="font-plus-jakarta text-black text-lg font-semibold">
        {{ title }}
      </h3>

      <p class="text-BlackEel font-semibold leading-8">{{ description }}</p>
    </div>

    <div class="flex items-center justify-between pt-4 md:pt-8">
      <NuxtLink
        class="font-semibold text-BlackEel group-hover:text-ParisGreen cursor-pointer transition-colors"
        to=""
      >
        Learn more
      </NuxtLink>

      <UButton
        class="bg-Iron group-hover:bg-ParisGreen px-3 py-3.5 rounded-full text-BlackEel cursor-pointer transition-all duration-1000"
        v-if="to"
        :to="to"
      >
        <img
          src="~/assets/svgs/black-arrow.svg"
          alt=""
          class="group-hover:-rotate-45  transition-all duration-500"
        />
      </UButton>
    </div>
  </div>
</template>
