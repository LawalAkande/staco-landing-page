<template>
  <section class="h-[90vh] relative overflow-hidden bg-Dark text-white py-4">
    <LayoutNavbar />

    <div
      class="container mx-auto py-34 flex flex-col space-y-0 items-center md:flex-row md:space-y-4 md:justify-between"
    >
      <div class="space-y-4 md:space-y-8">
        <h1
          class="font-plus-jakarta font-bold text-4xl text-white tracking-wide leading-16 md:leading-22 md:text-[60px]"
        >
          Financial Security
          <span class="flex space-x-3">
            <span> Made </span> <UiWordRotator />
          </span>
        </h1>

        <p
          class="font-semibold text-[18px] heading-[3rem] leading-8 md:max-w-148"
        >
          Staco is the dedicated platform for human management that helps to
          grow your startup business quickly.
        </p>

        <div class="mt-8 flex items-center gap-4">
          <UiButton
            class="bg-green-300 text-white hover:bg-LightGrayGreen ont-bold text-md duration-500 animate-all px-5 py-2 md:px-10 md:py-4"
          >
            Get Start For Free
          </UiButton>

          <UiButton
            class="bg-transparent text-white hover:bg-transparent hover:text-ParisGreen font-bold text-md px-10 py-4 duration-500 animate-all md:px-5 md:py-2"
          >
            Let’s talk →
          </UiButton>
        </div>
      </div>

      <UiVideoPlayer />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
