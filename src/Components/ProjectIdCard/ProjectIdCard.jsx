import { Card, Carousel } from "react-bootstrap"
import JoinButton from "../JoinProjectButton/JoinProjectButton"
import './ProjectIdCard.css'


const ProjectIdCard = ({ project }) => {
    return (
        <Card className='projectDetails'>
            <Carousel id='details-carousel'>
                {
                    project.gallery.map(elem => {
                        return (
                            <Carousel.Item interval={100000} key={elem}>
                                <img
                                    className="d-block carousel-pic"
                                    src={elem}
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

            <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Site: {project.city}, {project.country}</Card.Subtitle>
                <Card.Text>{project.description}</Card.Text>
                <JoinButton project_id={project._id} />
            </Card.Body>
        </Card>
    )
}

export default ProjectIdCard


