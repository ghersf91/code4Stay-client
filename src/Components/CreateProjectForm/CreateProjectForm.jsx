import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import projectsService from './../../Services/project.services'
import uploadService from './../../Services/upload.services'
import './CreateProjectForm.css'

const CreateProjectForm = ({ fireFinalActions }) => {

    const [projectData, setProjectData] = useState({
        projectType: 'Farm',
        city: '',
        country: '',
        continent: 'Africa',
        location: { coordinates: [] },
        description: '',
        hoursPerWeek: '',
        minWeeks: '',
        shelterType: '',
        mealsIncluded: [],
        gallery: [],
        languagesSpoken: '',
        testimonials: []
    })

    const handleChange = e => {

        const { value, name, type, checked } = e.target
        const inputValue = type === 'checkbox' ? checked : value
        const currentMeals = [...projectData.mealsIncluded]

        if (type === 'checkbox' && checked && !projectData.mealsIncluded.includes(name)) {
            currentMeals.push(name)
        } else if (projectData.mealsIncluded.includes(name)) {
            const mealIndex = currentMeals.indexOf(name)

            mealIndex > -1 && currentMeals.splice(mealIndex, 1)
        }
        setProjectData({
            ...projectData, mealsIncluded: currentMeals,
            location: { coordinates: [latitude, longitude] }, [name]: inputValue
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        projectsService
            .createProject(projectData)
            .then(response => {
                console.log(response)
                fireFinalActions()
            })
            .catch(err => console.error(err))
    }


    const handleMultipleFilesInput = e => {
        const formData = new FormData()
        formData.append('multipleImagesData', e.target.files[0])

        uploadService
            .uploadMultipleImages(formData)
            .then(([data]) => {
                const filesToUpload = [data.cloudinary_url]
                setProjectData({ ...projectData, gallery: [filesToUpload] })
            })
            .catch(err => console.log(err))
    }

    const { city, country, latitude, longitude, projectName,
        hoursPerWeek, description, minWeeks, shelterType, languagesSpoken } = projectData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='projectName'>
                <Form.Label>Project name</Form.Label>
                <Form.Control type='text' value={projectName} onChange={handleChange} name='projectName' />
            </Form.Group>

            <Row>
                <Col>

                    <Form.Group className='mb-3' controlId='continent'>
                        <Form.Label>Project type</Form.Label>
                        <Form.Select aria-label="Default select example" name='continent' onChange={handleChange}>
                            <option value={'Africa'}>Africa</option>
                            <option value={'Americas'}>Americas</option>
                            <option value={'Asia'}>Asia</option>
                            <option value={'Europe'}>Europe</option>
                            <option value={'Oceania'}>Oceania</option>
                        </Form.Select>
                    </Form.Group>

                </Col>

                <Col>

                    <Form.Group className='mb-3' controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' value={city} onChange={handleChange} name='city' />
                    </Form.Group>

                </Col>

                <Col>

                    <Form.Group className='mb-3' controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' value={country} onChange={handleChange} name='country' />
                    </Form.Group>
                </Col>

            </Row>

            <Row>

                <Col>

                    <Form.Group className='mb-3' controlId='latitude'>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type='text' value={latitude} onChange={handleChange} name='latitude' />
                    </Form.Group>

                </Col>

                <Col>

                    <Form.Group className='mb-3' controlId='longitude'>
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type='text' value={longitude} onChange={handleChange} name='longitude' />
                    </Form.Group>
                </Col>

            </Row>

            <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' value={description} onChange={handleChange} name='description' />
            </Form.Group>

            <Row>

                <Col>

                    <Form.Group className='mb-3' controlId='projectType'>
                        <Form.Label>Project type</Form.Label>
                        <Form.Select aria-label="Default select example" name='projectType' onChange={handleChange}>
                            <option value={'Farm'}>Farm</option>
                            <option value={'NGO'}>NGO</option>
                            <option value={'School'}>School</option>
                            <option value={'Hostel'}>Hostel</option>
                            <option value={'Camping'}>Camping</option>
                            <option value={'Other'}>Other</option>
                        </Form.Select>
                    </Form.Group>

                </Col>

                <Col>

                    <Form>
                        <Form.Group className='mb-3' controlId='mealsIncluded' name='mealsIncluded' onChange={handleChange}>
                            <Form.Label>Meals included</Form.Label>
                            <div key={`inline-checkbox`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Breakfast"
                                    name="Breakfast"
                                    type={`checkbox`}
                                    id={"Breakfast"}
                                />
                                <Form.Check
                                    inline
                                    label="Lunch"
                                    name="Lunch"
                                    type={`checkbox`}
                                    id={"Lunch"}
                                />
                                <Form.Check
                                    inline
                                    label="Supper"
                                    name="Supper"
                                    type={`checkbox`}
                                    id={"Supper"}
                                />
                            </div>
                        </Form.Group>
                    </Form>

                </Col>

                <Col>
                    <Form.Group className='mb-3' controlId='hoursPerWeek'>
                        <Form.Label>Hours per week</Form.Label>
                        <Form.Control type='number' value={hoursPerWeek} onChange={handleChange} name='hoursPerWeek' />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className='mb-3' controlId='minWeeks'>
                        <Form.Label>Minimum weeks</Form.Label>
                        <Form.Control type='number' value={minWeeks} onChange={handleChange} name='minWeeks' />
                    </Form.Group>
                </Col>

            </Row>

            <Form.Group className='mb-3' controlId='shelterType'>
                <Form.Label>Shelter type</Form.Label>
                <Form.Control type='text' value={shelterType} onChange={handleChange} name='shelterType' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='gallery'>
                <Form.Label>Photo (File)</Form.Label>
                <Form.Control type='file' onChange={handleMultipleFilesInput} name='gallery' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='languagesSpoken'>
                <Form.Label>Languages spoken</Form.Label>
                <Form.Control type='text' value={languagesSpoken} onChange={handleChange} name='languagesSpoken' />
            </Form.Group>

            <div className='d-grid form-button'>
                <Button variant='dark' type='submit'>Create project</Button>
            </div>
        </Form>

    )
}

export default CreateProjectForm