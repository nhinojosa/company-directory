import { ref } from 'vue'

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
}