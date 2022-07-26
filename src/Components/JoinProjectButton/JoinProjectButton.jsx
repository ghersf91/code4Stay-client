import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import projectsService from '../../Services/project.services'

const JoinButton = ({ project_id }) => {
    const navigate = useNavigate()
    const handleClick = () => {

        projectsService
            .requestsProject(project_id)
            .then(() => {
                navigate(`/projects`)
            })

    }
    return (
        <Button size="sm" variant="success" onClick={handleClick}>Join</Button>
    )
}

export default JoinButton