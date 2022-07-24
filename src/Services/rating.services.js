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

    createRating(ratingData) {
        return this.api.post('/createRating', ratingData)
    }

}

const ratingsService = new RatingService()

export default ratingsService