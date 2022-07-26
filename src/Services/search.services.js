import axios from 'axios'

class SearchService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/search`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getContinent(continent) {
        return this.api.get(`/${continent}`)
    }

    filterProjects(query) {
        return this.api.get(`/filter/?from_to=${query}`)
    }

}

const searchService = new SearchService()

export default searchService