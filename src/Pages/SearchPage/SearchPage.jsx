import { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import MapGoogle from "../../Components/MapGoogle/MapGoogle"
import ProjectCard from "../../Components/ProjectsCard/ProjectsCard"
import ContinentButton from "../../Components/SearchBar/ContinentButton"
import searchService from "../../Services/search.services"
import './SearchPage.css'

const SearchPage = () => {
    const { continent } = useParams()
    const navigate = useNavigate()

    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects()
    }, [continent])

    const loadProjects = () => {
        searchService
            .getContinent(continent)
            .then(({ data }) => {
                setProjects(data)
            })
            .catch(err => console.log(err))
    }

    const goBack = () => {
        navigate('/projects')
    }

    return (
        <Container>
            <div className="d-none d-md-block">
                <MapGoogle projects={projects} />
            </div>
            <h1>These are the projects in {continent}</h1>
            <ContinentButton />
            <Row>
                {
                    projects
                        .map(project => {
                            return (
                                <Col lg={3} md={6} key={project._id} >
                                    <ProjectCard {...project} />
                                </Col>
                            )
                        })
                }
            </Row>
            <div className='mb-5'>
                <span onClick={() => goBack()}><a className='backLink' href="#">Back to projects</a></span>
            </div>
        </Container>
    )
}

export default SearchPage