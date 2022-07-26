import { Row, Col } from 'react-bootstrap'

import { useState, useEffect } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"
import SearchBar from '../SearchBar/SearchBar'

const ProjectsList = ({ projects }) => {
    // const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [query, setQuery] = useState('')
    const [continents, setContinents] = useState([])

    // useEffect

    const receiveContinents = data => {
        setContinents(data)
    }

    const receiveFilter = data => {
        setQuery(data)
    }
    console.log(continents)
    return (

        <>
            <SearchBar receiveFilter={receiveFilter} receiveContinents={receiveContinents} />
            <Row>
                {
                    continents && continents.length > 0
                        ?

                        continents.filter(post => {
                            console.log(continents)
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


                        :

                        projects.filter(post => {
                            console.log(continents)
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