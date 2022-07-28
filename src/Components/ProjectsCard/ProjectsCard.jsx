import './ProjectsCard.css'
import { Card, Button, ButtonGroup, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import EditProjectForm from '../EditProjectForm/EditProjectForm'
import { AuthContext } from './../../Context/auth.context'
import { MessageContext } from "./../../Context/userMessage.context"
import projectsService from '../../Services/project.services'
import { ModalContext } from '../../Context/modal.context'



const ProjectCard = ({ gallery, projectName, city, country, description, _id, owner }) => {

    const { user } = useContext(AuthContext)
    const { showModal, closeModal, openModal } = useContext(ModalContext)

    const { setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const projectDelete = () => {
        projectsService
            .deleteProject(_id)
            .then(() => navigate('/projects'))
            .catch(err => console.log(err))
    }



    const fireFinalActions = () => {
        closeModal()
        setShowMessage({ show: true, title: 'Completed', text: 'Project created' })
    }

    return (

        <>
            <Card className='ProjectCard'>
                <Link to={`/projects/details/${_id}`}>
                    <Card.Img variant="top" src={gallery[0]} />
                </Link>
                <Card.Body>
                    <Link to={`/projects/details/${_id}`} className='cardName'>
                        <Card.Title >{projectName}</Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">Site: {city}, {country}</Card.Subtitle>
                    <Card.Text>
                        {description}<br /><br />
                        {user && owner === user._id
                            &&
                            <Link className='editLink' to={`/projects/edit/${_id}`}>
                                <p >Edit</p>
                            </Link>
                        }
                        {/* {user && owner === user._id
                            && <span className='editLink' onClick={openModal}>Edit</span>} */}
                        <br />
                        {user && user.role === 'ADMIN'
                            && <span className=' deleteLink' onClick={() => projectDelete()}>
                                Delete</span>}
                        <br />
                        {user && owner === user._id && user.role !== 'ADMIN'
                            && <span className='deleteLink' onClick={() => projectDelete()}>
                                Delete</span>}

                    </Card.Text>
                    <div className="d-grid">

                    </div>
                </Card.Body>
            </Card>
        </>

    )

}


export default ProjectCard