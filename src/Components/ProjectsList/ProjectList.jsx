import { Row, Col } from 'react-bootstrap'

import { useState, useEffect } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"
import SearchBar from '../SearchBar/SearchBar'

const ProjectsList = ({ projects }) => {
    const [query, setQuery] = useState('')
    const [continents, setContinents] = useState([])

    // const receiveContinents = data => {
    //     setContinents([...continents, data])
    // }
    const receiveFilter = data => {
        setContinents(data)
    }
    return (

        <>
            <SearchBar receiveFilter={receiveFilter} />
            <Row>
                {projects.filter(post => {
                    console.log(post)
                    if (query === "") {
                        return post;
                    } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                })
                    .map(project => {
                        return (
                            <Col md={3} key={project._id} >
                                <ProjectCard {...project} />
                            </Col>
                        )
                    })

                }
            </Row>
        </>

    )
}


export default ProjectsList