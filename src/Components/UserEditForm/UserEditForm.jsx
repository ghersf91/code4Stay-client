import { useContext, useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'
import { MessageContext } from "../../Context/userMessage.context"
import userService from "./../../Services/user.services"
import uploadService from './../../Services/upload.services'
import { useEffect } from "react"
import LocationCheckbox from "./LocationCheckbox"


const UserEditForm = () => {

    const { user_id } = useParams()

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        bio: '',
        role: '',
        projectTypeInterests: [],
        locationInterests: [],
        profilePicture: '',
    })

    const { setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

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

    const handleInputChange = e => {

        const { value, name, type, checked } = e.target

        const inputValue = type === 'checkbox' ? checked : value

        const projectInterests = ['Farm', 'NGO', 'Hostel', 'School', 'Camping', 'Other']
        const locations = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania']

        const currentLocationInterests = [...userData.locationInterests]
        const currentProjectInterests = [...userData.projectTypeInterests]


        if (projectInterests.includes(name)) {

            if (checked && !userData.projectTypeInterests.includes(name)) {

                currentProjectInterests.push(name)

            } else if (userData.projectTypeInterests.includes(name)) {

                const projectInterestsIndex = currentProjectInterests.indexOf(name)

                projectInterestsIndex > -1 && currentProjectInterests.splice(projectInterestsIndex, 1)
                console.log(currentProjectInterests)
            }

        } else if (locations.includes(name)) {

            if (checked && !userData.locationInterests.includes(name)) {

                currentLocationInterests.push(name)

            } else if (userData.locationInterests.includes(name)) {

                const locationInterestsIndex = currentLocationInterests.indexOf(name)

                locationInterestsIndex > -1 && currentLocationInterests.splice(locationInterestsIndex, 1)

                console.log(currentLocationInterests)
            }
        }

        setUserData({
            ...userData, locationInterests: currentLocationInterests,
            projectTypeInterests: currentProjectInterests, [name]: inputValue
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editUser(user_id, userData)
            .then(({ data }) => navigate(`/users/profile/${user_id}`))
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                const fileToUpload = data.cloudinary_url
                setUserData({ ...userData, profilePicture: fileToUpload })
            })
            .catch(err => console.log(err))
    }

    const { username, email, bio, role, projectTypeInterests, locationInterests } = userData
    return (

        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Edit profile</h1>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                        </Form.Group>
                    </Col>
                    {/* <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group> */}
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='role'>
                            <Form.Label>Type of user</Form.Label>
                            <Form.Select aria-label="Default select example" name='role' onChange={handleInputChange}>
                                <option value={'VOLUNTEER'}>Volunteer</option>
                                <option value={'HOST'}>Host</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="bio" value={bio} onChange={handleInputChange} name="bio" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className='mb-3' controlId='projectTypeInterests' name='projectTypeInterests' onChange={handleInputChange}>
                                <Form.Label>Project interests</Form.Label>
                                <div key={`inline-checkbox`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Farm"
                                        name="Farm"
                                        type={`checkbox`}
                                        id={"Farm"}
                                    />
                                    <Form.Check
                                        inline
                                        label="NGO"
                                        name="NGO"
                                        type={`checkbox`}
                                        id={"NGO"}
                                    />
                                    <Form.Check
                                        inline
                                        label="School"
                                        name="School"
                                        type={`checkbox`}
                                        id={"School"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Hostel"
                                        name="Hostel"
                                        type={`checkbox`}
                                        id={"Hostel"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Camping"
                                        name="Camping"
                                        type={`checkbox`}
                                        id={"Camping"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Other"
                                        name="Other"
                                        type={`checkbox`}
                                        id={"Other"}
                                    />
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <LocationCheckbox location={locationInterests} />
                        {/* <Form>
                            <Form.Group className='mb-3' controlId='locationInterests' name='locationInterests' onChange={handleInputChange}>
                                <Form.Label>Region interests</Form.Label>
                                <div key={`inline-checkbox`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Americas"
                                        name="Americas"
                                        type={`checkbox`}
                                        id={"Americas"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Europe"
                                        name="Europe"
                                        type={`checkbox`}
                                        id={"Europe"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Asia"
                                        name="Asia"
                                        type={`checkbox`}
                                        id={"Asia"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Africa"
                                        name="Africa"
                                        type={`checkbox`}
                                        id={"Africa"}
                                    />
                                    <Form.Check
                                        inline
                                        label="Oceania"
                                        name="Oceania"
                                        type={`checkbox`}
                                        id={"Oceania"}
                                    />
                                </div>
                            </Form.Group>
                        </Form> */}
                    </Col>
                </Row>
                <Form.Group className='mb-3' controlId='profilePicture'>
                    <Form.Label>Profile picture (File)</Form.Label>
                    <Form.Control type='file' onChange={handleFileInput} name='profilePicture' />
                </Form.Group>
                <div className="d-grid">
                    <Button variant="dark" type="submit">Update user information</Button>
                </div>
            </Form>
        </Container>
    )
}
export default UserEditForm