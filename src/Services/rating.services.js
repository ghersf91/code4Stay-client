import axios from 'axios'

class RatingService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/ratings`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getRatings(project_id) {
        return this.api.get(`getRatings/${project_id}`)
    }

    createRating(project_id, ratingData) {
        return this.api.post(`/createRating/${project_id}`, ratingData)
    }

}

const ratingsService = new RatingService()

export default ratingsService