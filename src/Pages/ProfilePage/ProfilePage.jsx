import { Link, useParams, useNavigate } from "react-router-dom"
import userService from "../../Services/user.services"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../Context/auth.context'
import { MessageContext } from "./../../Context/userMessage.context"
import { ModalContext } from "../../Context/modal.context"
import { Button, ButtonGroup, Card, ListGroup, Container, Modal } from 'react-bootstrap'
import AcceptJoinButton from "../../Components/AcceptJoinButton/AcceptJoinButton"
import UserEditForm from "../../Components/UserEditForm/UserEditForm"
import './ProfilePage.css'
import DenyButton from "../../Components/DenyButton/DenyButton"


const ProfilePage = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { openModal, closeModal, showModal } = useContext(ModalContext)

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

    const { setShowMessage } = useContext(MessageContext)

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

    const userDelete = () => {
        userService
            .deleteUser(user_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }



    const fireFinalActions = () => {
        closeModal()
        setShowMessage({ show: true, title: 'Completed', text: 'User information updated' })
        loadUser()
    }

    const isHost = userData.role === 'HOST' || userData.role === 'ADMIN' ? true : false
    // const isHost = userData.role.includes(['HOST', 'ADMIN'])


    const { username, email, bio, role, projectTypeInterests, locationInterests, profilePicture, _id, requests } = userData

    return (
        <>
            {
                user._id === _id &&
                <Container>
                    <h1>Welcome, {username}!</h1>

                    <Card >
                        <Card.Img variant="top" src={profilePicture} />
                        <Card.Body>
                            <Card.Title>{role} {user_id === user._id && <span className='editClick' onClick={openModal}> Edit</span>}</Card.Title>
                            <Card.Text>
                                {bio}
                            </Card.Text>
                            <Card.Text>
                                {email}
                            </Card.Text>
                            <Card.Text>
                                I'm interested in these projects:
                            </Card.Text>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    {
                                        projectTypeInterests.map(project => <div key={project}>-{project}<br /></div>)
                                    }
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                I want to go to:
                            </Card.Text>
                            <ListGroup variant='flush' className="mb-5">
                                <ListGroup.Item>
                                    {
                                        locationInterests.map(project => <div key={project}>-{project}<br /></div>)
                                    }
                                </ListGroup.Item>
                            </ListGroup>
                            {
                                isHost
                                &&
                                <ListGroup className="mb-5">
                                    {
                                        requests.map(response => {
                                            return (
                                                <div key={response._id}>
                                                    <ListGroup.Item>-{response.username}: {response.bio}</ListGroup.Item>
                                                    <ButtonGroup>
                                                        <AcceptJoinButton user_id={response._id} />
                                                        <DenyButton user_id={response._id} />
                                                        {/* <Link to={`/projects`}>
                                                            <Button variant='danger'>Deny</Button>
                                                        </Link> */}
                                                    </ButtonGroup>
                                                </div>
                                            )
                                        })
                                    }
                                </ListGroup>
                            }

                            <Link className='deleteLink' to={'/'}>
                                <span onClick={() => userDelete()}>
                                    🗑
                                </span>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Modal className='modal' show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UserEditForm fireFinalActions={fireFinalActions} />
                        </Modal.Body>
                    </Modal>
                </Container>
            }

            {/* {
                user._id !== _id && <Navigate to="/" />
            } */}
        </>

    )
}

export default ProfilePage