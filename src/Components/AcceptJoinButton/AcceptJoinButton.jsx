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
            .catch(err => console.log(err))

    }
    return (
        <Button size="md" variant="success" onClick={handleClick}>Accept</Button>
    )
}

export default AcceptJoinButton