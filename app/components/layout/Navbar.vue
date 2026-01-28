<template>
  <section class="">
    <div
      class="container mx-auto flex items-center justify-between bg-Tuna/50 backdrop-blur-sm px-8 py-4 rounded-full"
    >
      <NuxtLink to="/">
        <img src="assets/svgs/staco-logo.svg" alt="HealthBookapp Logo" />
      </NuxtLink>

      <div class="hidden lg:flex space-x-4">
        <UiButton
          class="text-md bg-transparent text-white hover:bg-transparent hover:opacity-80"
        >
          Sign in
        </UiButton>

        <UiButton
          class="font-bold text-md bg-LightGrayGreen text-black hover:bg-green-300 px-4 py-2"
        >
          Start Free
        </UiButton>
      </div>

      <div class="lg:hidden">
        <IconMenu />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
