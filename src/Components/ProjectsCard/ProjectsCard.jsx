import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../Context/auth.context'


const ProjectCard = ({ project }) => {

    const { user } = useContext(AuthContext)
    return (

        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={project.gallery[0]} />
                        <Card.Body>
                            <Card.Title>{project.projectName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Site: {project.site.address}</Card.Subtitle>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Link to={`#`}>
                                <div className="d-grid">

                                    {
                                        user && project.owner === user._id
                                            ?
                                            <ButtonGroup>
                                                <Link to={`/projects/${project._id}/details`}>
                                                    <Button size="sm" variant="dark">Details</Button>
                                                </Link>
                                                <Link to={`/projects/${project._id}/edit`}>
                                                    <Button size="sm" variant="warning">Edit</Button>
                                                </Link>
                                            </ButtonGroup>
                                            :
                                            <Link to={`/projects/${project._id}/details`}>
                                                <Button variant="dark" size="sm" as="div">Details</Button>
                                            </Link>
                                    }
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )

}
export default ProjectCard