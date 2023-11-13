<template>
  <div class="hidden md:flex items-center justify-center py-3 gap-8">
    <RouterLink
      to="/"
      class="text-3xl hover:font-bold text-center w-20 hover:text-light-yellow"
      :class="path.fullPath === '/' ? 'text-light-yellow' : ''"
      >Home</RouterLink
    >
    <RouterLink
      to="/list"
      class="text-3xl hover:font-bold w-40 text-center hover:text-light-yellow"
      :class="path.fullPath === '/list' ? 'text-light-yellow' : ''"
      >Users List</RouterLink
    >
    <RouterLink
      to="/details"
      class="text-3xl hover:font-bold w-40 text-center hover:text-light-yellow"
      :class="path.fullPath === '/details' ? 'text-light-yellow' : ''"
      >User Details</RouterLink
    >
    <RouterLink
      to="/create"
      class="text-3xl hover:font-bold w-40 text-center hover:text-light-yellow"
      :class="path.fullPath === '/create' ? 'text-light-yellow' : ''"
      >Create User</RouterLink
    >
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-10 h-10 ml-2 mt-2 md:hidden block z-20"
    @click="toggleHamburger"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  <div
    v-show="hamburgerActive"
    class="md:hidden flex absolute flex-col justify-center py-3 px-10 gap-8 bg-gray-600 h-screen z-10"
  >
    <RouterLink
      to="/"
      class="text-3xl hover:font-bold text-center w-20 hover:text-light-yellow"
      :class="path.fullPath === '/' ? 'text-light-yellow' : ''"
      >Home</RouterLink
    >
    <RouterLink
      to="/list"
      class="text-3xl hover:font-bold w-32 text-center hover:text-light-yellow"
      :class="path.fullPath === '/list' ? 'text-light-yellow' : ''"
      >Users List</RouterLink
    >
    <RouterLink
      to="/details"
      class="text-3xl hover:font-bold w-40 text-center hover:text-light-yellow"
      :class="path.fullPath === '/details' ? 'text-light-yellow' : ''"
      >User Details</RouterLink
    >
    <RouterLink
      to="/create"
      class="text-3xl hover:font-bold w-40 text-center hover:text-light-yellow"
      :class="path.fullPath === '/create' ? 'text-light-yellow' : ''"
      >Create User</RouterLink
    >
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const hamburgerActive = ref(false)
const toggleHamburger = () => {
  hamburgerActive.value = !hamburgerActive.value
}
const route = useRoute()
const path = ref(route)
</script>
