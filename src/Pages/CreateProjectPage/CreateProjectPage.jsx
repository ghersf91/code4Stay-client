import { useNavigate } from 'react-router-dom'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/projects')
    }
    return (
        <>
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default CreateProjectPage