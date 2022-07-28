import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../Context/auth.context'
import projectsService from '../../Services/project.services'
import './ProjectsCard.css'



const ProjectCard = ({ gallery, projectName, city, country, description, _id, owner }) => {

    const { user } = useContext(AuthContext)


    const navigate = useNavigate()

    const projectDelete = () => {
        projectsService
            .deleteProject(_id)
            .then(() => navigate('/projects'))
            .catch(err => console.log(err))
    }

    return (

        <Card className='ProjectCard'>
            <Link to={`/projects/details/${_id}`}>
                <Card.Img variant="top" src={gallery[0]} />
            </Link>
            <Card.Body>
                <Link to={`/projects/details/${_id}`} className='cardName'>
                    <Card.Title >{projectName}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">Site: {city}, {country}</Card.Subtitle>
                <div className='iconsText'>
                    <Card.Text >
                        {description}<br /><br />
                        {user && owner === user._id
                            &&
                            <Link className='editLink' to={`/projects/edit/${_id}`}>
                                <span >🖉</span>
                            </Link>
                        }
                        <br />
                        {user && user.role === 'ADMIN'
                            &&
                            <Link className='deleteLink' to='#'>
                                <span onClick={() => projectDelete()}>
                                    🗑
                                </span>
                            </Link>}
                        <br />
                        {user && owner === user._id && user.role !== 'ADMIN'
                            && <Link className='deleteLink' to='#'>
                                <span onClick={() => projectDelete()}>
                                    🗑
                                </span>
                            </Link>}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>


    )

}


export default ProjectCard