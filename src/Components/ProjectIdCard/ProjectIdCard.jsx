import { Card } from "react-bootstrap"
import JoinButton from "../JoinProjectButton/JoinProjectButton"
import './ProjectIdCard.css'


const ProjectIdCard = ({ project }) => {
    return (

        <Card className='projectDetails'>
            <Card.Img variant="top" src={project.gallery[0]} id="idImg" />
            <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Site: {project.city}, {project.country}</Card.Subtitle>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <JoinButton project_id={project._id} />

            </Card.Body>
        </Card>
    )
}

export default ProjectIdCard