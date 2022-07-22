import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import projectsService from "../../Services/project.services"
import './ProjectDetails.css'


const ProjectDetailsPage = () => {

    const { project_id } = useParams()
    const [project, setProject] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadProject()
    }, [])

    const loadProject = () => {
        projectsService
            .getOneProject(project_id)
            .then(({ data }) => {
                setProject(data)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(false))
    }

    return (

        <article className="id-card">
            {
                isLoading ?
                    <Loader /> :
                    <>
                        <Card className='projectDetails'>
                            <Card.Img variant="top" src={project.gallery} />
                            <Card.Body>
                                <Card.Title>{project.projectName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Site: {project.city}, {project.country}</Card.Subtitle>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
            }
        </article>
    )
}
export default ProjectDetailsPage
