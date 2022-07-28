import { useEffect, useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import projectsService from "../../Services/project.services"
import RatingWidget from "../../Components/RatingWidget/RatingWidget"
import ProjectIdCard from "../../Components/ProjectIdCard/ProjectIdCard"
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

        <article id="id-card">
            {
                isLoading ?
                    <Loader /> :
                    <Container className='mb-5'>
                        <Row>
                            <Col className="md-12 lg-6  ">
                                <ProjectIdCard project={project} />
                            </Col>
                            <Col className="md-12 lg-6  ">
                                <RatingWidget testimonials={project.testimonials} _id={project_id} />
                            </Col>
                        </Row>
                    </Container >
            }
        </article>
    )
}
export default ProjectDetailsPage


