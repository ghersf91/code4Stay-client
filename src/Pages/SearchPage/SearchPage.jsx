import { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import MapGoogle from "../../Components/MapGoogle/MapGoogle"
import ProjectCard from "../../Components/ProjectsCard/ProjectsCard"
import searchService from "../../Services/search.services"

const SearchPage = () => {
    const { continent } = useParams()
    const navigate = useNavigate()

    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects()
    })

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
            <container className="d-none d-md-block">
                <MapGoogle projects={projects} />
            </container>
            <h1>These are the projects in {continent}</h1>
            <span onClick={() => goBack()}>Back to projects</span>
            <br />
            <Row>
                {

                    projects.map(project => {
                        return (
                            <Col lg={3} md={6} key={project._id} >
                                <ProjectCard {...project} />
                            </Col>
                        )
                    })

                }
            </Row>
        </Container>

    )
}

export default SearchPage