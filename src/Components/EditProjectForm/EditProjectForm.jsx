import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import projectsService from './../../Services/project.services'
import uploadService from './../../Services/upload.services'
import { useParams } from 'react-router-dom'


const EditProjectForm = ({ fireFinalActions }) => {

    const { id } = useParams()

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
    const [aux, setAux] = useState(projectData.mealsIncluded)

    console.log(projectData)

    const loadProject = () => {

        projectsService
            .getOneProject(id)
            .then(({ data }) => {
                setProjectData(data)
            })
            .catch(err => console.log(err))
    }
    const handleChange = e => {

        const { value, name } = e.target

        if (name === 'Breakfast' || name === "Lunch" || name === "Supper") {

            const auxIndex = aux.indexOf(name)

            if (auxIndex === -1) {
                setAux([...aux, name])
            } else {

                console.log(aux)
                console.log('quiero borrarlo', auxIndex)

                const newAux = aux.filter(e => e !== name)
                console.log(newAux)
                setAux(newAux)
            }
            // console.log(aux)
            //setProjectData({ ...projectData, mealsIncluded: aux })

        }
        console.log(projectData)
        setProjectData({ ...projectData, [name]: value, mealsIncluded: aux })

    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(projectData)

        projectsService
            .editProject(id, projectData)
            .then(() => {
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
                console.log(data.cloudinary_url)
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
                                    <Form.Check
                                        inline
                                        label="Breakfast"
                                        name="Breakfast"
                                        type={`checkbox`}
                                        id={"Breakfast"}
                                        defaultChecked={mealsIncluded.includes('Breakfast') ? true : false}

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