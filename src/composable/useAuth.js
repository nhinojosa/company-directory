import { ref } from 'vue'

const dbUsers= [
 {
    username: 'admin',
    password: 'admin',
    name: 'Admin',
    role: 'admin',
    eamil: 'admin@cool-company,com',
 },
{
    username: 'user',
    password: 'user',
    name: 'User',
    role: 'user',
    eamil: 'user@cool-company,com',
},

]

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