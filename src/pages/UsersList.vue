<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center md:text-6xl text-4xl italic">You can see a list of all users here!</h2>

    <div class="flex justify-center mt-3 items-center md:gap-5 gap-2 flex-col md:flex-row">
      <label for="search" class="text-xl">Search</label>
      <input
        type="text"
        id="search"
        v-model="searchQuery"
        class="p-2 border rounded-md text-black"
      />

      <div class="flex flex-col">
        <label for="age" class="text-xl">Filter by Age</label>
        <select v-model="ageFilter" id="age" class="p-2 border rounded-md text-black">
          <option value="">All</option>
          <option v-for="age in uniqueAges" :key="age" :value="age">{{ age }}</option>
        </select>

        <label for="gender" class="text-xl">Filter by Gender</label>
        <select v-model="genderFilter" id="gender" class="p-2 border rounded-md text-black">
          <option value="">All</option>
          <option v-for="gender in uniqueGenders" :key="gender" :value="gender">
            {{ gender }}
          </option>
        </select>
      </div>
    </div>

    <h3 class="text-center md:text-4xl italic text-3xl">
      Displayed {{ paginatedUsers.length }} users
    </h3>

    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="user in paginatedUsers"
        :key="user.id"
        class="flex flex-col mb-10 max-w-max px-6 border-2 rounded-xl pb-6 border-light-yellow text-xl gap-2"
      >
        <img :src="user.image" alt="" />
        <h2 class="flex justify-between">
          <span>Name: </span><span class="font-bold">{{ user.firstName }}</span>
        </h2>
        <h2 class="flex justify-between">
          <span>Lastname: </span><span class="font-bold">{{ user.lastName }}</span>
        </h2>
        <h2 class="flex justify-between">
          <span>Age:</span><span class="font-bold">{{ user.age }}</span>
        </h2>
        <h2 class="flex justify-between">
          <span>Gender: </span><span class="font-bold">{{ user.gender }}</span>
        </h2>
        <h2 class="flex justify-between">
          <span>City: </span><span class="font-bold">{{ user.address.city }}</span>
        </h2>
        <button class="w-full bg-red-500 rounded-xl py-2 hover:font-bold text-xl">
          View Full Details
        </button>
      </div>
    </div>

    <div class="md:flex justify-center mt-5 text-xl mb-10">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 mr-2 bg-gray-300 text-gray-600 rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        :class="[
          'px-4 py-2 mx-2 rounded-md',
          {
            'bg-blue-500 text-white': page === currentPage,
            'hover:bg-blue-400': page !== currentPage
          }
        ]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 ml-2 bg-gray-300 text-gray-600 rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import useUsersStore from '../stores/users'
import { onBeforeMount, ref, computed } from 'vue'

const store = useUsersStore()

const itemsPerPage = 10
const currentPage = ref(1)
const searchQuery = ref('')
const ageFilter = ref(null)
const genderFilter = ref(null)

const uniqueAges = computed(() => {
  const ages = new Set(store.users[0]?.users.map((user) => user.age))
  return Array.from(ages).sort()
})

const uniqueGenders = computed(() => {
  const genders = new Set(store.users[0]?.users.map((user) => user.gender))
  return Array.from(genders).sort()
})

const totalUsers = computed(() => store.users[0]?.users?.length || 0)

const totalPages = computed(() => Math.ceil(totalUsers.value / itemsPerPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  let filteredUsers = store.users[0]?.users || []
  if (searchQuery.value) {
    const lowerCaseQuery = searchQuery.value.toLowerCase()
    filteredUsers = filteredUsers.filter((user) =>
      Object.values(user).some((value) => value.toString().toLowerCase().includes(lowerCaseQuery))
    )
  }
  if (ageFilter.value) {
    filteredUsers = filteredUsers.filter((user) => user.age === ageFilter.value)
  }
  if (genderFilter.value) {
    filteredUsers = filteredUsers.filter((user) => user.gender === genderFilter.value)
  }

  return filteredUsers.slice(start, end)
})

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const goToPage = (pageNum) => {
  currentPage.value = pageNum
}

onBeforeMount(() => {
  if (!store.users.length) {
    store.getAllUsers()
  }
})
</script>
