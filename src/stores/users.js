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
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, { method: 'Delete' })
      const data = await response.json()
      const index = users.value[0].users.findIndex((obj) => obj.id === id)
      users.value[0].users[index] = data
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  const updateUser = async (key, value, id) => {
    try {
      const payload = {
        [key]: value
      }
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      const index = users.value[0].users.findIndex((obj) => obj.id === id)
      users.value[0].users[index][key] = data[key]
    } catch (error) {
      console.error(error)
    }
  }

  const addUser = async (data) => {
    const newUser = data
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      const newdata = await response.json()
      users.value[0].users.unshift(newdata)
    } catch (error) {
      console.error(error)
    }
  }

  return { users, getAllUsers, deleteUser, updateUser, addUser }
})
export default useUsersStore
