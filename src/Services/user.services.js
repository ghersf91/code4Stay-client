import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    getUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.post(`/editUser/${user_id}`, userData)
    }

    deleteUser(user_id) {
        return this.api.post(`deleteUser/${user_id}`)
    }

}

const userService = new UserService()

export default userService