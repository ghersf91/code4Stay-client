import { ButtonGroup, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../../Context/auth.context'


const ProjectsCardButton = ({ project }) => {

    const { user } = useContext(AuthContext)

    console.log(project)

    return (
        <ButtonGroup>
            <Link to={`/projects/${project._id}/details`}>
                <Button size="sm" variant="dark">Details</Button>
            </Link>
            {
                project.owner === user._id
                &&
                <Link to={`/projects/${project._id}/edit`}>
                    <Button size="sm" variant="warning">Edit</Button>
                </Link>
            }
            {
                user?.role === 'ADMIN'
                &&
                <Link to={`/projects/${project._id}/delete`}>
                    <Button size="sm" variant="danger">Delete</Button>
                </Link>
            }

        </ButtonGroup>
    )
}

export default ProjectsCardButton