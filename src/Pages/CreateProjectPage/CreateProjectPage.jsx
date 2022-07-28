import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../Context/modal.context'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'
import './CreateProjectPage.css'
const CreateProjectPage = () => {
    const { closeModal } = useContext(ModalContext)

    const navigate = useNavigate()

    const fireFinalActions = () => {
        closeModal()
        navigate('/projects')
    }
    return (
        <Container>
            <h1>Create a new project</h1>
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default CreateProjectPage