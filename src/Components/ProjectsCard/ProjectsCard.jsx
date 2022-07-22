import './ProjectsCard.css'
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../Context/auth.context'
import projectsService from '../../Services/project.services'

const ProjectCard = ({ gallery, projectName, city, country, description, _id, owner }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const projectDelete = () => {
        projectsService
            .deleteProject(_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (

        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='ProjectCard'>
                        <Card.Img variant="top" src={gallery} />
                        <Card.Body>
                            <Card.Title>{projectName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Site: {city}, {country}</Card.Subtitle>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`#`}>
                                <div className="d-grid">
                                    <ButtonGroup>
                                        <Link to={`/projects/details/${_id}`}>
                                            <Button size="sm" variant="dark">Details</Button>
                                        </Link>
                                        {
                                            user && owner === user._id
                                            &&
                                            <Link to={`/projects/edit/${_id}`}>
                                                <Button size="sm" variant="warning">Edit</Button>
                                            </Link>
                                        }
                                        {
                                            user?.role === 'ADMIN'
                                            &&
                                            <Link to='/'>
                                                <Button size="sm" variant="danger"
                                                    onClick={() => projectDelete()}>
                                                    Delete
                                                </Button>
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