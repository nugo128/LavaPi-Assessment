export async function getAllUsers() {
  try {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
