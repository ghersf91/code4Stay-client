import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'
import './CreateProjectPage.css'

const CreateProjectPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
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