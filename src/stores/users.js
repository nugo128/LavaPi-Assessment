import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('user', () => {
  const users = ref([])
  const getAllUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json()
      users.value.push(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  return { users, getAllUsers }
})
export default useUsersStore
