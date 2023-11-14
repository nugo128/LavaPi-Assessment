<template>
  <div
    :class="showConfirmation ? 'block fixed w-[99vw] h-screen bg-black opacity-70' : 'hidden'"
    @click="showConfirmation = !showConfirmation"
  ></div>
  <div
    :class="showConfirmation ? 'flex flex-col gap-4 opacity-100' : 'hidden'"
    class="fixed bg-white text-black text-2xl sm:top-[40%] top-1/4 xl:left-[40%] sm:left-[6%] md:left-[20%] p-10 rounded-3xl"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-16 h-16 self-center"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>

    <h2>
      Do you really want to delete user
      <span class="font-bold">{{ user.firstName + ' ' + user.lastName }}</span
      >?
    </h2>
    <div class="flex justify-center gap-10">
      <button class="bg-red-600 px-4 py-2 rounded-xl font-bold" @click="confirmUserDeletion">
        YES!
      </button>
      <button
        class="border-2 border-red-600 px-4 py-2 rounded-xl font-bold"
        @click="showConfirmation = !showConfirmation"
      >
        NO
      </button>
    </div>
  </div>
  <div class="flex justify-center flex-col items-center gap-10">
    <div class="flex gap-6 flex-col lg:flex-row">
      <h2 class="lg:text-4xl text-3xl">Full details about user</h2>
      <span class="text-center font-bold lg:text-5xl text-4xl text-light-yellow italic"
        >{{ user?.firstName }} {{ user?.lastName }}</span
      >
      <button @click="deleteUser" class="bg-red-600 rounded-xl lg:text-4xl text-3xl px-4 py-2">
        Delete User
      </button>
    </div>
    <div class="flex gap-10 justify-center flex-col xl:flex-row px-0 sm:px-10 xl:px-0 w-screen">
      <PersonalInfo :user="user"></PersonalInfo>
      <div class="flex flex-col gap-16 self xl:w-[670px]">
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
import { useRouter } from 'vue-router'
const router = useRouter()
const showConfirmation = ref(false)
const user = ref({})
const route = useRoute()
const store = useUsersStore()
const deleteUser = () => {
  showConfirmation.value = true
}

const confirmUserDeletion = () => {
  store.deleteUser(user.value.id)
  router.replace('/list')
}
onBeforeMount(async () => {
  if (!store.users.length) {
    await store.getAllUsers()
  }
  user.value = store?.users[0]?.users.find((item) => item.id == route.params.id)
  console.log(user.value.id)
})
</script>
