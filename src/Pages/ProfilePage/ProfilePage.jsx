import { Link, useParams, useNavigate } from "react-router-dom"
import userService from "../../Services/user.services"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../Context/auth.context'
import { Button, ButtonGroup, Card, ListGroup } from 'react-bootstrap'
import projectsService from "../../Services/project.services"


const ProfilePage = () => {

    const { user, logoutUser } = useContext(AuthContext)
    console.log(user)

    const { user_id } = useParams()

    const navigate = useNavigate()

    const logout = () => {
        logoutUser()
    }

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        bio: '',
        role: '',
        projectTypeInterests: [],
        locationInterests: [],
        profilePicture: '',
        requests: []
    })

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getUser(user_id)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))
    }

    const clickAccept = e => {
        projectsService
            .joinProject(e)
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    const userDelete = () => {
        userService
            .deleteUser(user_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const { username, email, bio, role, projectTypeInterests, locationInterests, profilePicture, _id, requests } = userData

    return (
        <>
            {
                user._id === _id &&

                <div>
                    <h1>Welcome, {username}!</h1>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={profilePicture} />
                        <Card.Body>
                            <Card.Title>{role}</Card.Title>
                            <Card.Text>
                                {bio}
                            </Card.Text>
                            <Card.Text>
                                {email}
                            </Card.Text>
                            <Card.Text>
                                I'm interested in these projects:
                            </Card.Text>
                            <ListGroup>
                                {
                                    projectTypeInterests.map(project => <ListGroup.Item>-{project}</ListGroup.Item>)
                                }
                            </ListGroup>
                            <Card.Text>
                                I want to go to:
                            </Card.Text>
                            <ListGroup className="mb-5">
                                {
                                    locationInterests.map(project => <ListGroup.Item>-{project}</ListGroup.Item>)
                                }
                            </ListGroup>
                            {
                                user?.role === 'HOST'
                                &&
                                <ListGroup className="mb-5">
                                    {
                                        requests.map(response => {
                                            // console.log(response)
                                            return (
                                                <>
                                                    <ListGroup.Item>-{response.username}: {response.bio}</ListGroup.Item>
                                                    <ButtonGroup>

                                                        <Button variant='success' onClick={() => clickAccept(response._id)}>Accept</Button>

                                                        <Link to={`/projects/join/${user_id}`}>
                                                            <Button variant='danger'>Deny</Button>
                                                        </Link>
                                                    </ButtonGroup>


                                                </>
                                            )
                                        })
                                    }
                                </ListGroup>
                            }

                            <Link to={`/users/editUser/${user_id}`} >
                                <Button variant="primary" className='mb-1'>Update user information</Button>
                            </Link>
                            <Link to={`/`}>
                                <Button variant="danger"
                                    onClick={() => {
                                        userDelete()
                                        logout()
                                    }}>
                                    Delete account
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            }

            {
                user._id !== _id &&
                <h1>You are not allowed to enter this route</h1>
            }
        </>

    )
}

export default ProfilePage