import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import projectsService from '../../Services/project.services'

const AcceptJoinButton = ({ user_id }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        projectsService
            .joinProject(user_id)
            .then(({ data }) => {
                console.log(data)
                navigate(`/projects`)
            })

    }
    return (
        <Button size="sm" variant="success" onClick={handleClick}>Join</Button>
    )
}

export default AcceptJoinButton