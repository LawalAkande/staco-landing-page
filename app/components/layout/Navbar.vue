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

        <ButtonSlideToTop topText="Start Free" bottomText="Start Free" />
      </div>

      <div class="lg:hidden">
        <MenuIcon />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../ui/btn/Button.vue";
import MenuIcon from "../../components/icons/MenuIcon.vue";
import StacoLogo from "../../assets/svgs/staco-logo.svg";
import ButtonSlideToTop from "../ui/btn/ButtonSlideToTop.vue";

const handleClick = () => {
  console.log("Button clicked");
};
</script>
