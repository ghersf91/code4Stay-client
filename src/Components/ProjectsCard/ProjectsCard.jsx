import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../Context/auth.context'
import './ProjectsCard.css'

const ProjectCard = ({ project }) => {

    const { user } = useContext(AuthContext)
    return (

        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='ProjectCard'>
                        <Card.Img variant="top" src={project.gallery} />
                        <Card.Body>
                            <Card.Title>{project.projectName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Site: {project.city}, {project.country}</Card.Subtitle>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Link to={`#`}>
                                <div className="d-grid">
                                    {/* <ProjectsCardButton project={project} /> */}

                                    <ButtonGroup>
                                        <Link to={`/projects/${project._id}/details`}>
                                            <Button size="sm" variant="dark">Details</Button>
                                        </Link>
                                        {
                                            user && project.owner === user._id
                                            &&
                                            <Link to={`/projects/edit/${project._id}`}>
                                                <Button size="sm" variant="warning">Edit</Button>
                                            </Link>
                                        }
                                        {
                                            user?.role === 'ADMIN'
                                            &&
                                            <Link to={`/projects/${project._id}/delete`}>
                                                <Button size="sm" variant="danger">Delete</Button>
                                            </Link>
                                        }

                                    </ButtonGroup>
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