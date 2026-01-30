<template>
  <section class="">
    <div
      class="container mx-auto flex items-center justify-between bg-Tuna/50 backdrop-blur-sm px-8 py-4 rounded-full"
    >
      <NuxtLink to="/">
        <img :src="StacoLogo" alt="Staco Logo" />
      </NuxtLink>

      <div class="hidden lg:flex space-x-4">
        <Button
          class="text-md bg-transparent text-white hover:bg-transparent hover:opacity-80"
        >
          Sign in
        </Button>

        <ButtonSlideToTop topText="Start Free" bottomText="Start Free" width="w-40"/>
      </div>

      <div class="lg:hidden">
        <img :src="MenuIcon" alt="mobile menu icon">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../ui/btn/Button.vue";
import MenuIcon from "../../assets/svgs/menu-icon.svg";
import StacoLogo from "../../assets/svgs/staco-logo.svg";
import ButtonSlideToTop from "../ui/btn/ButtonSlideToTop.vue";
</script>
