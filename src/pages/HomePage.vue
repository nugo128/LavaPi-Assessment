<template>
  <div class="flex justify-center items-center flex-col gap-12 mt-48">
    <div class="custom-shape bg-light-yellow top-20 md:left-1/3 right-1/3 absolute w-32"></div>
    <div
      class="custom-shape-2 bg-light-yellow md:bottom-[18%] md:left-1/3 bottom-[72px] left-0 absolute md:w-24 w-32"
    ></div>
    <div
      class="custom-shape-3 bg-light-yellow md:top-[40%] md:right-[10%] top-[73%] left-2/3 absolute md:w-44 w-32"
    ></div>
    <img
      src="../../public/images/avatar1.jpg"
      alt="Your Image"
      class="absolute bottom-28 md:bottom-52 left-[2%] md:left-[18%] w-28 md:w-48 rounded-full border-2 border-light-yellow"
    />
    <img
      src="../../public/images/avatar2.jpeg"
      alt="Your Image"
      class="absolute top-28 right-1/3 w-28 md:w-44 rounded-full border-2 border-light-yellow"
    />
    <img
      src="../../public/images/avatar3.jpeg"
      alt="Your Image"
      class="absolute top-3/4 left-2/3 w-28 md:w-40 rounded-full border-2 border-light-yellow"
    />

    <h1
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } transition-all duration-[3000ms] ease-in-out overflow-hidden lg:text-6xl md:text-4xl text-3xl  font-bold text-center italic px-4`"
    >
      Welcome to User Management Application
    </h1>
    <h2
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      } transition-all duration-[4000ms] ease-in-out overflow-hidden lg:text-4xl md:text-3xl text-2xl  font-bold text-center italic px-4`"
    >
      You can Add, Edit or Delete users here!
    </h2>
    <RouterLink
      to="/list"
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-44'
      } transition-all duration-[5000ms] ease-in-out overflow-hidden md:text-4xl text-2xl font-bold bg-red-500 rounded-xl px-4 py-2`"
      >GET STARTED</RouterLink
    >
  </div>
</template>
<style>
.custom-shape {
  aspect-ratio: 3 / 4;
  border-radius: 100% / 85% 125% 85% 125%;
}
.custom-shape-2 {
  aspect-ratio: 3 / 4;
  border-radius: 100% / 125% 85% 125% 85%;
}
.custom-shape-3 {
  aspect-ratio: 3 / 4;
  border-radius: 100% / 85% 85% 125% 125%;
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
const animate = ref(null)
onMounted(() => {
  setTimeout(() => {
    animate.value = true
  }, 100)
})
</script>
