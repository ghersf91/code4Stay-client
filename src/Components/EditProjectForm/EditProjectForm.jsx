import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import projectsService from './../../Services/project.services'
import uploadService from './../../Services/upload.services'
import { useParams } from 'react-router-dom'


const EditProjectForm = ({ fireFinalActions }) => {

    const { project_id } = useParams()

    const [projectData, setProjectData] = useState({
        site: '',
        projectType: '',
        city: '',
        country: '',
        description: '',
        hoursPerWeek: '',
        minWeeks: '',
        shelterType: '',
        mealsIncluded: [],
        gallery: '',
        languagesSpoken: ''
    })

    const [breakfastChecked, setBreakfastChecked] = useState(false)
    const [lunchChecked, setLunchChecked] = useState(false)
    const [supperChecked, setSupperChecked] = useState(false)

    const loadProject = () => {

        projectsService
            .getOneProject(project_id)
            .then(({ data }) => {
                setProjectData(data)
                isIncluded(data)
            })
            .catch(err => console.log(err))
    }

    const isIncluded = (name) => {
        name.mealsIncluded.includes('Breakfast') && setBreakfastChecked(true)
        name.mealsIncluded.includes('Lunch') && setLunchChecked(true)
        name.mealsIncluded.includes('Supper') && setSupperChecked(true)

    }

    const handleChange = e => {

        const { value, name, type, checked } = e.target
        const inputValue = type === 'checkbox' ? checked : value
        const currentMeals = [...projectData.mealsIncluded]

        console.log(e)
        if (type === 'checkbox' && checked && !projectData.mealsIncluded.includes(name)) {

            currentMeals.push(name)

        } else if (projectData.mealsIncluded.includes(name) && !checked) {

            const mealIndex = currentMeals.indexOf(name)

            mealIndex > -1 && currentMeals.splice(mealIndex, 1)

        }
        setProjectData({ ...projectData, mealsIncluded: currentMeals, [name]: inputValue })
    }

    const handleSubmit = e => {
        e.preventDefault()

        projectsService
            .editProject(project_id, projectData)
            .then(({ data }) => {
                fireFinalActions()
            })
            .catch(ERR => console.error(ERR))
    }


    const handleFileInput = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                const fileToUpload = data.cloudinary_url
                setProjectData({ ...projectData, gallery: fileToUpload })
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadProject()
    }, [])



    const { city, country, projectName, projectType, hoursPerWeek, description, minWeeks, mealsIncluded, shelterType, gallery, languagesSpoken } = projectData

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Edit Project</h1>
                <Form.Group className='mb-3' controlId='projectName'>
                    <Form.Label>Project name</Form.Label>
                    <Form.Control type='text' value={projectName} onChange={handleChange} name='projectName' />
                </Form.Group>

                <Row>

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

                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' value={description} onChange={handleChange} name='description' />
                </Form.Group>

                <Row>

                    <Col>

                        <Form.Group className='mb-3' controlId='projectType'>
                            <Form.Label>Project type</Form.Label>
                            <Form.Select aria-label="Default select example" name='projectType' onChange={handleChange}>
                                <option value={'FARM'}>Farm</option>
                                <option value={'NGO'}>NGO</option>
                                <option value={'SCHOOL'}>School</option>
                                <option value={'HOSTEL'}>Hostel</option>
                                <option value={'CAMPING'}>Camping</option>
                                <option value={'OTHER'}>Other</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form>
                            <Form.Group className='mb-3' controlId='mealsIncluded' name='mealsIncluded' onChange={handleChange}>
                                <Form.Label>Meals included</Form.Label>
                                <div key={`inline-checkbox`} className="mb-3">

                                    {
                                        breakfastChecked
                                            ?
                                            <Form.Check
                                                inline
                                                defaultChecked
                                                label="Breakfast"
                                                name="Breakfast"
                                                type={`checkbox`}
                                                id={"Breakfast"}
                                                value={'on'}

                                            /> :
                                            <Form.Check
                                                inline
                                                label="Breakfast"
                                                name="Breakfast"
                                                type={`checkbox`}
                                                id={"Breakfast"}

                                            />

                                    }
                                    {
                                        lunchChecked
                                            ?
                                            <Form.Check
                                                inline
                                                defaultChecked
                                                label="Lunch"
                                                name="Lunch"
                                                type={`checkbox`}
                                                id={"Lunch"}
                                            />
                                            :
                                            <Form.Check
                                                inline
                                                label="Lunch"
                                                name="Lunch"
                                                type={`checkbox`}
                                                id={"Lunch"}
                                            />

                                    }

                                    {
                                        supperChecked
                                            ?
                                            <Form.Check
                                                inline
                                                defaultChecked
                                                label="Supper"
                                                name="Supper"
                                                type={`checkbox`}
                                                id={"Supper"}
                                            />
                                            :
                                            <Form.Check
                                                inline
                                                label="Supper"
                                                name="Supper"
                                                type={`checkbox`}
                                                id={"Supper"}
                                            />
                                    }

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
                    <Form.Control type='file' onChange={handleFileInput} name='gallery' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='languagesSpoken'>
                    <Form.Label>Languages spoken</Form.Label>
                    <Form.Control type='text' value={languagesSpoken} onChange={handleChange} name='languagesSpoken' />
                </Form.Group>

                <div className='d-grid form-button'>
                    <Button variant='dark' type='submit'>Edit project</Button>
                </div>

            </Form>
        </Container>
    )
}

export default EditProjectForm