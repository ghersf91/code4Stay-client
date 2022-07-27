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


    // useEffect(() => {
    //     loadProject()
    // }, [project.testimonials])




    const loadProject = () => {
        projectsService
            .getOneProject(project_id)
            .then(({ data }) => {
                console.log(data)
                setProject(data)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(false))
    }
    console.log(project)
    return (

        <article id="id-card">
            {
                isLoading ?
                    <Loader /> :
                    <Container className='mb-5'>
                        <Row>
                            <Col className="sm-12 lg-6  ">
                                <ProjectIdCard project={project} />
                            </Col>
                            <Col className="sm-12 lg-6  ">
                                <RatingWidget testimonials={project.testimonials} _id={project_id} />
                            </Col>
                        </Row>
                        <JoinButton project_id={project_id} />
                    </Container >
            }
        </article>
    )
}
export default ProjectDetailsPage

// const Container = styled.img`
//       width: 400px;
//     object-fit: cover;
//     margin: 20px;
// `;

const CommentList = styled.img`
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
`;
