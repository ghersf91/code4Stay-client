import { Row, Col, Form } from 'react-bootstrap'

import { useState, useEffect } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"
import SearchBar from '../SearchBar/SearchBar'
import searchService from '../../Services/search.services'

const ProjectsList = ({ projects }) => {
    // const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [query, setQuery] = useState('')
    const [continents, setContinents] = useState([])

    // useEffect

    const receiveContinents = data => {
        setContinents(data)
    }

    // const receiveFilter = e => {
    //     console.log(e)
    //     searchService
    //         .filterProjects(e.target.value)
    //         .then(({ data }) => {
    //             console.log(data)
    //             // toggleContinent()
    //             setContinents(data)
    //         })
    //         .catch(err => console.log(err))
    //     // setQuery(data)
    // }
    // console.log(continents)
    return (

        <>
            <Form>
                <SearchBar receiveContinents={receiveContinents} />

                <Row>
                    {
                        continents && continents.length > 0
                            ?

                            // continents.filter(post => {
                            //     console.log(continents)
                            //     if (query === "") {
                            //         return post;
                            //     } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                            //         return post;
                            //     }
                            // })
                            continents.map(project => {
                                return (
                                    <Col md={3} key={project._id} >
                                        <ProjectCard {...project} />
                                    </Col>
                                )
                            })


                            :

                            // projects.filter(post => {
                            //     console.log(continents)
                            //     if (query === "") {
                            //         return post;
                            //     } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                            //         return post;
                            //     }
                            // })
                            projects.map(project => {
                                return (
                                    <Col md={3} key={project._id} >
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