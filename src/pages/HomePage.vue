<template>
  <div class="flex justify-center items-center flex-col gap-12 mt-48">
    <img
      src="../../public/images/avatar1.jpg"
      alt="Your Image"
      class="absolute bottom-52 right-[82%] w-48 rounded-full border-2 border-light-yellow"
    />
    <div class="custom-shape bg-light-yellow top-20 left-1/3 absolute w-32"></div>
    <img
      src="../../public/images/avatar2.jpeg"
      alt="Your Image"
      class="absolute top-28 right-1/3 w-44 rounded-full border-2 border-light-yellow"
    />
    <div class="custom-shape-2 bg-light-yellow bottom-[18%] left-1/3 absolute w-24"></div>
    <div class="custom-shape-3 bg-light-yellow top-[40%] right-[10%] absolute w-44"></div>
    <img
      src="../../public/images/avatar3.jpeg"
      alt="Your Image"
      class="absolute top-3/4 left-2/3 w-40 rounded-full border-2 border-light-yellow"
    />

    <h1
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } transition-all duration-[3000ms] ease-in-out overflow-hidden text-6xl font-bold italic`"
    >
      Welcome to User Management Application
    </h1>
    <h2
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      } transition-all duration-[4000ms] ease-in-out overflow-hidden text-4xl font-bold italic`"
    >
      You can Add, Edit or Delete users here!
    </h2>
    <RouterLink
      to="/list"
      :class="`${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-44'
      } transition-all duration-[5000ms] ease-in-out overflow-hidden text-4xl font-bold bg-red-500 rounded-xl px-4 py-2`"
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
