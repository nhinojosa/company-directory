/* import { ref } from 'vue'

const dbUsers= 
[]

const isAuthenticated =ref(false)
const user = ref({})



export const useAuth = () => {
    const login = (username, password) => {
        const user = dbUsers.find((u) => u.username == username && u.password == password)  
        
        if (user) {

            const { name, role, email, username } = user 
        isAuthenticated.value = true
        user.value = {name, role, email, username }
        }
    }
    return { isAuthenticated, user, login }
} */

import router from '@/router'
import { firebaseApp } from '@/composables/useFirebase'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
  const login = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password)
    return isAuthenticated.value
  }

  const logout = async () => {
    await signOut(auth)
    router.push({ name: 'Home' })
  }
  return { isAuthenticated, user, login, logout }
}