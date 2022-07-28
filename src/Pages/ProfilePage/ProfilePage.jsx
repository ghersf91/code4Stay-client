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

    const { user } = useContext(AuthContext)
    const { openModal, closeModal, showModal } = useContext(ModalContext)

    const { user_id } = useParams()

    const navigate = useNavigate()

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

    const isHost = userData.role.includes(['HOST', 'ADMIN'])


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
                                                    </ButtonGroup>
                                                </div>
                                            )
                                        })
                                    }
                                </ListGroup>
                            }
                            <Link className='editClick' to='#'>
                                {
                                    user_id === user._id && <span onClick={openModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </span>
                                }
                            </Link>
                            <Link className='deleteLink' to={'/'}>
                                <span onClick={() => userDelete()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
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
        </>

    )
}

export default ProfilePage