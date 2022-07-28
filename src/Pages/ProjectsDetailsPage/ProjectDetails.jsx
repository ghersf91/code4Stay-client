import { useEffect, useState } from "react"
import { Card, Col, Row, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Loader from "../../Components/Loader/Loader"
import JoinButton from "../../Components/JoinProjectButton/JoinProjectButton"
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
                    <Container className='mb-5 detailsCard'>
                        <Row>
                            <Col className="sm-12 lg-6  ">
                                <ProjectIdCard project={project} />
                                {/* <JoinButton project_id={project_id} /> */}

                            </Col>

                            <Col className="sm-12 lg-6  ">
                                <RatingWidget testimonials={project.testimonials} _id={project_id} />
                            </Col>
                        </Row>
                    </Container >
            }
        </article>
    )
}
export default ProjectDetailsPage


