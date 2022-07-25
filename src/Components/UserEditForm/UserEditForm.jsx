import { useContext, useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'
import userService from "./../../Services/user.services"
import uploadService from './../../Services/upload.services'
import { useEffect } from "react"
import LocationCheckbox from "./LocationCheckbox"
import ProjectCheckbox from "./ProjectCheckbox"


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

    const [locationsChecked, setLocationsChecked] = useState([])
    const [projectsChecked, setProjectsChecked] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        loadUser()
    }, [])

    useEffect(() => {
        setUserData({
            ...userData, locationInterests: locationsChecked,
            projectTypeInterests: projectsChecked
        })
    }, [locationsChecked, projectsChecked])

    const receiveLocations = data => {
        setLocationsChecked(data)
    }

    const receiveProjects = data => {
        setProjectsChecked(data)
    }




    const loadUser = () => {
        userService
            .getUser(user_id)
            .then(({ data }) => {
                console.log(data.projectTypeInterests)
                setProjectsChecked(data.projectTypeInterests)
                setLocationsChecked(data.locationInterests)
                setUserData(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {

        const { value, name, type, checked } = e.target

        const inputValue = type === 'checkbox' ? checked : value

        // const projectInterests = ['Farm', 'NGO', 'Hostel', 'School', 'Camping', 'Other']
        // const locations = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania']

        // const currentLocationInterests = [...locationsChecked]
        // const currentProjectInterests = [...userData.projectTypeInterests]

        // if (projectInterests.includes(name)) {

        //     if (checked && !locationsChecked.includes(name)) {

        //         currentProjectInterests.push(name)

        //     } else if (locationsChecked.includes(name)) {

        //         const projectInterestsIndex = currentProjectInterests.indexOf(name)

        //         projectInterestsIndex > -1 && currentProjectInterests.splice(projectInterestsIndex, 1)
        //         console.log(currentProjectInterests)
        //     }

        //     } else if (locations.includes(name)) {

        //         if (checked && !userData.locationInterests.includes(name)) {

        //             currentLocationInterests.push(name)

        //         } else if (userData.locationInterests.includes(name)) {

        //             const locationInterestsIndex = currentLocationInterests.indexOf(name)

        //             locationInterestsIndex > -1 && currentLocationInterests.splice(locationInterestsIndex, 1)

        //             console.log(currentLocationInterests)
        //         }
        // }

        setUserData({
            ...userData, [name]: inputValue
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
                            <ProjectCheckbox receiveProjects={receiveProjects} projectsChecked={projectsChecked} />

                        </Form>
                    </Col>
                    <Col>
                        <Form >
                            <LocationCheckbox locationsChecked={locationsChecked} receiveLocations={receiveLocations} />
                        </Form>
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