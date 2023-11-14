<template>
  <div class="flex justify-center flex-col items-center gap-10">
    <h2 class="text-4xl">
      Full details about user
      <span class="font-bold text-5xl text-light-yellow italic"
        >{{ user?.firstName }} {{ user?.lastName }}</span
      >
    </h2>
    <div class="flex gap-20 justify-center">
      <PersonalInfo :user="user"></PersonalInfo>
      <div class="flex flex-col gap-16 self w-[670px]">
        <DigitalInfo :user="user"></DigitalInfo>
        <EducationAndExperience :user="user"></EducationAndExperience>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import useUsersStore from '../stores/users'
import PersonalInfo from '../components/PersonalInfo.vue'
import DigitalInfo from '../components/DigitalInfo.vue'
import EducationAndExperience from '../components/EducationAndExperience.vue'
const user = ref({})
const route = useRoute()
const store = useUsersStore()
onBeforeMount(async () => {
  if (!store.users.length) {
    await store.getAllUsers()
  }
  user.value = store?.users[0]?.users.find((item) => item.id == route.params.id)
  console.log(user.value)
})
</script>
