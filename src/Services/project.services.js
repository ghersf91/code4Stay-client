import axios from 'axios'

class ProjectService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/projects`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getProjects() {
        return this.api.get('/getAllProjects')
    }

    getOneProject(project_id) {
        return this.api.get(`getOneProject/${project_id}`)
    }

    createProject(projectData) {
        return this.api.post('/create', projectData)
    }

    editProject(project_id, projectData) {
        return this.api.put(`/edit/${project_id}`, projectData)

    }

    requestsProject(project_id) {
        return this.api.put(`details/${project_id}`)
    }

    joinProject(user_id) {
        return this.api.put(`join/${user_id}`)
    }

    denyProject(user_id) {
        return this.api.put(`deny/${user_id}`)
    }

    deleteProject(project_id) {
        return this.api.delete(`/delete/${project_id}`)
    }
}

const projectsService = new ProjectService()

export default projectsService