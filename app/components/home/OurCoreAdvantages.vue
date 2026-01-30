<template>
  <section class="container mx-auto grid gap-10 md:grid-cols-3 py-4 md:py-24 px-4 md:px-0">
    <CoreAdvantage
      v-for="(advantage, index) in advantages"
      :key="index"
      v-bind="advantage"
    />
  </section>
</template>

<script setup lang="ts">
import { advantages } from "~/mockdata/card";
import CoreAdvantage from "../card/CoreAdvantage.vue";
</script>
