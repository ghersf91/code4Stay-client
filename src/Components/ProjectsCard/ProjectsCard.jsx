import './ProjectsCard.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
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

        <Card className='ProjectCard'>
            <Link to={`/projects/details/${_id}`}>
                <Card.Img variant="top" src={gallery} />
            </Link>
            <Card.Body>
                <Link to={`/projects/details/${_id}`} className='cardName'>
                    <Card.Title >{projectName}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">Site: {city}, {country}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className="d-grid">
                    <ButtonGroup>

                        {
                            user && owner === user._id
                            &&
                            <>
                                <Link to={`/projects/edit/${_id}`}>
                                    <Button size="sm" variant="warning">Edit</Button>
                                </Link>
                                <Link to='/'>
                                    <Button size="sm" variant="danger"
                                        onClick={() => projectDelete()}>
                                        Delete
                                    </Button>
                                </Link>
                            </>


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
            </Card.Body>
        </Card>
    )

}
export default ProjectCard