import { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import userService from "./../../Services/user.services"
import uploadService from './../../Services/upload.services'
import LocationCheckbox from "./LocationCheckbox"
import ProjectCheckbox from "./ProjectCheckbox"


const UserEditForm = ({ fireFinalActions }) => {

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
                setProjectsChecked(data.projectTypeInterests)
                setLocationsChecked(data.locationInterests)
                setUserData(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {

        const { value, name, type, checked } = e.target

        const inputValue = type === 'checkbox' ? checked : value

        setUserData({ ...userData, [name]: inputValue })
    }

    const handleSubmit = e => {
        e.preventDefault()

        userService
            .editUser(user_id, userData)
            .then(() => fireFinalActions())
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                const { cloudinary_url: profilePicture } = data
                setUserData({ ...userData, profilePicture })
            })
            .catch(err => console.log(err))
    }

    const { username, email, bio } = userData
    return (

        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="sm-12 mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="sm-12 mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='sm-12 mb-3' controlId='role'>
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

                    <ProjectCheckbox receiveProjects={receiveProjects} projectsChecked={projectsChecked} />

                </Col>
                <Col>
                    <LocationCheckbox locationsChecked={locationsChecked} receiveLocations={receiveLocations} />
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
    )
}
export default UserEditForm