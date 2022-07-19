import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProjectCard = ({ project }) => {
    console.log(project.description)
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
                                    <Button variant="dark" size="sm" as="div">See more</Button>
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