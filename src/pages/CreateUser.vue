<template>
  <form @submit.prevent="submitForm" class="flex justify-center">
    <div
      class="bg-gray-700 flex flex-col gap-5 px-2 sm:px-10 lg:px-28 md:px-16 py-20 rounded-3xl w-full sm:w-1/2 2xl:px-40"
    >
      <h2 class="text-4xl self-center font-bold">Add new user</h2>
      <div class="flex flex-col">
        <label for="firstName" class="text-xl">Firstname</label>
        <input ref="firstNameRef" type="text" name="firstName" class="rounded-xl py-3 text-black" />
      </div>
      <div class="flex flex-col">
        <label for="lastName" class="text-xl">Lastname</label>
        <input ref="lastNameRef" type="text" name="lastName" class="rounded-xl py-3 text-black" />
      </div>
      <div class="flex flex-col">
        <label for="age" class="text-xl">Age</label>
        <input ref="ageRef" type="number" name="age" class="rounded-xl py-3 text-black" />
      </div>
      <div class="flex flex-col">
        <label for="height" class="text-xl">Height in cm</label>
        <input ref="heightRef" type="number" name="height" class="rounded-xl py-3 text-black" />
      </div>
      <div class="flex flex-col">
        <label for="gender" class="text-xl">Gender</label>
        <select name="gender" id="" ref="genderRef" class="text-black py-3 rounded-xl">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <h2 v-show="emptyError" class="text-red-500 font-bold text-2xl self-center">
        Values must not be empty!
      </h2>
      <h2 v-show="ageError" class="text-red-500 font-bold text-2xl self-center">Invalid age</h2>
      <h2 v-show="heightError" class="text-red-500 font-bold text-2xl self-center">
        Invalid Height
      </h2>
      <button type="submit" class="bg-red-500 w-52 py-4 rounded-xl self-center">Submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useUsersStore from '../stores/users'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const firstNameRef = ref(null)
const lastNameRef = ref(null)
const ageRef = ref(null)
const genderRef = ref(null)
const heightRef = ref(null)
const emptyError = ref(false)
const ageError = ref(false)
const heightError = ref(false)
const store = useUsersStore()
const router = useRouter()

const submitForm = () => {
  const formData = {
    firstName: firstNameRef.value.value,
    lastName: lastNameRef.value.value,
    age: ageRef.value.value,
    height: heightRef.value.value,
    gender: genderRef.value.value,
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  if (
    !firstNameRef.value.value.length ||
    !lastNameRef.value.value.length ||
    !ageRef.value.value.length ||
    !heightRef.value.value.length ||
    !genderRef.value.value.length
  ) {
    emptyError.value = true
  } else {
    emptyError.value = false
  }
  if (ageRef.value.value < 0 || ageRef.value.value > 100) {
    ageError.value = true
  } else {
    ageError.value = false
  }
  if (heightRef.value.value < 100 || heightRef.value.value > 250) {
    heightError.value = true
  } else {
    heightError.value = false
  }
  if (!emptyError.value && !ageError.value && !heightError.value) {
    store.addUser(formData)
    router.replace('/list')
  }
}
onBeforeMount(() => {
  if (!store.users.length) {
    store.getAllUsers()
  }
})
</script>
