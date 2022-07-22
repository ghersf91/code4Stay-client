import { Link, useParams } from "react-router-dom"
import userService from "../../Services/user.services"
import { useEffect, useState } from "react"
import { Button, Card } from 'react-bootstrap'


const ProfilePage = () => {

    const { user_id } = useParams()

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        bio: '',
        role: '',
        projectTypeInterests: [],
        locationInterests: [],
        profilePicture: '',
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

    const { username, email, bio, role, projectTypeInterests, locationInterests, profilePicture } = userData

    return (
        <>
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
                        Interested in: <ul>{
                            projectTypeInterests.map(project => {
                                return (
                                    <li>{project}</li>
                                )
                            })
                        }
                        </ul>
                    </Card.Text>
                    <Card.Text>
                        I want to go to: <ul>{
                            locationInterests.map(project => {
                                return (
                                    <li>{project}</li>
                                )
                            })
                        }
                        </ul>
                    </Card.Text>
                    <Link to={`/users/editUser/${user_id}`}>
                        <Button variant="primary">Update user information</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>

    )
}

export default ProfilePage