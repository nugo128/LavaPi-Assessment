<template>
  <div class="flex items-center justify-center py-3 gap-8">
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
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const path = ref(route)
</script>
