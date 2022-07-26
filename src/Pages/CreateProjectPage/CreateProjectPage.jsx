import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/projects')
    }
    return (
        <Container>
            <h1>New Project</h1>
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default CreateProjectPage