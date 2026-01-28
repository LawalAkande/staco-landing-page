<template>
  <p class="fromleft f2 max-w-fit text-LightGrayGreen">Accountable</p>
</template>

<style scoped>
.f2:after {
  display: block;
  content: "";
  border-bottom: solid 5px #fff;
  transform: scaleX(0);
  transition: transform 1000ms ease-in-out;
}

.f2:hover:after {
  transform: scaleX(1);
}

.f2.fromleft:after {
  transform-origin: 0 30%;
}
</style>
