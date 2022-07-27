import { Row, Col, Form } from 'react-bootstrap'
import { useEffect, useState } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"
import SearchBar from '../SearchBar/SearchBar'

const ProjectsList = ({ projects }) => {

    const [query, setQuery] = useState('')
    const [continents, setContinents] = useState([])

    useEffect(() => {
        setContinents(projects)
    }, [])
    const receiveContinents = data => {
        setContinents(data)
    }

    const receiveFilter = data => {
        setQuery(data)
    }

    console.log(query)

    return (

        <>
            <Form>
                <SearchBar receiveContinents={receiveContinents} receiveFilter={receiveFilter} />

                <Row>
                    {
                        continents && continents.length > 0
                            ?

                            continents.filter(post => {
                                if (query === "") {
                                    return post;
                                } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                                    return post;
                                }
                            })
                                .map(project => {
                                    return (
                                        <Col lg={3} md={6} key={project._id} >
                                            <ProjectCard {...project} />
                                        </Col>
                                    )
                                })


                            :

                            projects.filter(post => {
                                if (query === "") {
                                    return post;
                                } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                                    return post;
                                }
                            })
                                .map(project => {
                                    return (
                                        <Col lg={3} md={6} key={project._id} >
                                            <ProjectCard {...project} />
                                        </Col>
                                    )
                                })

                    }
                </Row>
            </Form>


        </>

    )
}


export default ProjectsList