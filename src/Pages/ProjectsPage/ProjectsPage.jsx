import ProjectsList from "../../Components/ProjectsList/ProjectList"
import { useState, useEffect, useContext } from "react"
import projectsService from "../../Services/project.services"
import { Container, Modal } from 'react-bootstrap'


import { MessageContext } from "./../../Context/userMessage.context"
import { AuthContext } from "./../../Context/auth.context"
import CreateProjectForm from "../../Components/CreateProjectForm/CreateProjectForm"


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
            <h1>Browse through our opportunities {user && <span onClick={openModal}>+</span>}</h1>
            <ProjectsList projects={projects} />

            <Modal show={showModal} onHide={closeModal}>
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