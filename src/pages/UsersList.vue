<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center md:text-6xl text-4xl italic">You can see a list of all users here!</h2>

    <div class="flex justify-center mt-3 items-center md:gap-5 gap-2 flex-col md:flex-row">
      <label for="search" class="text-xl">Search</label>
      <input
        type="text"
        id="search"
        placeholder="type here to search user"
        v-model="searchQuery"
        class="p-2 border rounded-md text-black"
      />

      <div class="flex flex-col md:flex-row md:gap-4">
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
    <button
      @click="toggleSortByNameOrder"
      class="px-4 py-2 mx-2 rounded-md bg-blue-500 text-white self-center"
    >
      Sort by Name {{ sortByNameOrder === 'asc' ? 'Ascending' : 'Descending' }}
    </button>

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
        <RouterLink
          :to="`details/${user.id}`"
          class="w-full bg-red-500 rounded-xl py-2 hover:font-bold text-xl text-center"
        >
          View Full Details
        </RouterLink>
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
const sortByNameOrder = ref('asc')
const sort = ref(false)

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

  const allUsers = store.users[0]?.users || []

  const sortedAllUsers = allUsers.sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase()
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase()

    if (sortByNameOrder.value === 'desc' && sort.value) {
      return nameA < nameB ? -1 : 1
    } else if (sort.value) {
      return nameA > nameB ? -1 : 1
    }
  })

  const filteredUsers = sortedAllUsers.filter((user) => {
    if (
      searchQuery.value &&
      !Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    ) {
      return false
    }
    if (ageFilter.value && user.age !== ageFilter.value) {
      return false
    }
    if (genderFilter.value && user.gender !== genderFilter.value) {
      return false
    }
    return true
  })

  const paginatedUsers = filteredUsers.slice(start, end)

  return paginatedUsers
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

const toggleSortByNameOrder = () => {
  sort.value = true
  sortByNameOrder.value = sortByNameOrder.value === 'asc' ? 'desc' : 'asc'
}

onBeforeMount(() => {
  if (!store.users.length) {
    store.getAllUsers()
  }
})
</script>
