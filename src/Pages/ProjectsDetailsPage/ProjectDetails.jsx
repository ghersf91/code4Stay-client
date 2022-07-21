import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import projectsService from "../../Services/project.services"
import './ProjectDetails.css'



const ProjectDetailsPage = () => {

    const { id } = useParams()
    const [project, setProject] = useState({})
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        loadProject()
        setIsLoading(false)

    }, [])

    const loadProject = () => {

        projectsService
            .getOneProject(id)
            .then(({ data }) => setProject(data))
            .catch(err => setIsLoading(false))
    }


    console.log(project)
    return (

        <article className="id-card">
            {
                isLoading ?
                    <Loader /> :
                    <>
                        <img src={project.gallery[0]} alt="Germán" />

                        <footer>
                            <p> {project.description}</p>
                            <p>{project.projectType}</p>

                        </footer>
                    </>
            }
        </article>
    )
}
export default ProjectDetailsPage
