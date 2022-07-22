import { Row, Col } from 'react-bootstrap'

import { useState, useEffect } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"

const ProjectsList = ({ projects }) => {

    return (

        <>
            <Row>
                {
                    projects.map(project => {
                        return (
                            <Col md={3} key={project._id} >
                                <ProjectCard project={project} />
                            </Col>
                        )
                    })

                }
            </Row>
        </>

    )
}


export default ProjectsList