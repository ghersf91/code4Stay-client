import { Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import userService from "../../Services/user.services"

const UserCard = ({ profilePicture, username, email, bio, _id }) => {

    const navigate = useNavigate()

    const userDelete = () => {
        userService
            .deleteUser(_id)
            .then(() => navigate('/projects'))
            .catch(err => console.log(err))
    }

    return (

        <Card className='ProjectCard'>

            <Card.Img variant="top" src={profilePicture} />
            <Card.Body>
                <Card.Title >{username}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">Site: {email}</Card.Subtitle>
                <div className='iconsText'>
                    <Card.Text >
                        {bio}<br /><br />
                        <span className='iconsText'>
                            <Link className='deleteLink' to='#'>
                                <span onClick={() => userDelete()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </span>
                            </Link>
                        </span>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card >
    )
}

export default UserCard