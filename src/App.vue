<script setup>
import { RouterView } from 'vue-router'
import MainCard from './components/MainCard.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <MainCard>
    <NavBar></NavBar>
    <RouterView />
  </MainCard>
</template>
