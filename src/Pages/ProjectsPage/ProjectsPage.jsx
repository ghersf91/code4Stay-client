import { useState, useEffect, useContext } from "react"
import { Modal } from 'react-bootstrap'
import projectsService from "../../Services/project.services"
import { MessageContext } from "./../../Context/userMessage.context"
import { AuthContext } from "./../../Context/auth.context"
import CreateProjectForm from "../../Components/CreateProjectForm/CreateProjectForm"
import MapGoogle from '../../Components/MapGoogle/MapGoogle'
import ProjectsList from "../../Components/ProjectsList/ProjectList"


const ProjectPage = () => {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { setShowMessage } = useContext(MessageContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadProjects()
    }, [])

    const loadProjects = () => {
        projectsService
            .getProjects()
            .then(({ data }) => {
                setProjects(data)
                setShowMessage({ show: true, title: 'Welcome', text: `The projects have loaded successfully` })
            })
            .catch(err => console.log(err))
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        loadProjects()
        setShowMessage({ show: true, title: 'Completed', text: 'Project created' })
    }

    return (
        <>
            <container className="d-none d-md-block">
                <MapGoogle projects={projects} />
            </container>

            <h1>Browse through our opportunities {user && <span onClick={openModal}>+</span>}</h1>

            <ProjectsList projects={projects} />

            <Modal className='modal-form' show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateProjectForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ProjectPage