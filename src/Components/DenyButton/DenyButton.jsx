import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import projectsService from '../../Services/project.services'
import './DenyButton.css'

const DenyButton = ({ user_id }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        projectsService
            .denyProject(user_id)
            .then(({ data }) => { navigate(`/projects`) })
            .catch(err => console.log(err))
    }
    return (
        <Button id='deny-button' size="md" variant="danger" onClick={handleClick}>Deny</Button>
    )
}

export default DenyButton