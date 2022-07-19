import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import projectsService from './../../Services/project.services'


const CreateProjectForm = ({ fireFinalActions }) => {

    const [projectData, setProjectData] = useState({
        site: '',
        projectType: '',
        description: '',
        hoursPerWeek: '',
        minWeeks: '',
        shelterType: '',
        mealsIncluded: '',
        gallery: '',
        languagesSpoken: '',
    })

    const handleChange = e => {
        const { value, name } = e.target
        setProjectData({ ...projectData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        projectsService
            .createProject(projectData)
            .then(() => {
                fireFinalActions()
            })
            .catch(ERR => console.error(ERR))
    }

    const { site, projectType, hoursPerWeek, description, minWeeks, mealsIncluded, shelterType, gallery, languagesSpoken } = projectData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className='mb-3' controlId='site'>
                <Form.Label>Site</Form.Label>
                <Form.Control type='text' value={site.address} onChange={handleChange} name='site' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' value={description} onChange={handleChange} name='description' />
            </Form.Group>

            <Row>

                <Form.Group className='mb-3' controlId='projectType'>
                    <Form.Label>Project type</Form.Label>
                    <Form.Control type='text' value={projectType} onChange={handleChange} name='projectType' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='hoursPerWeek'>
                    <Form.Label>Hours per week</Form.Label>
                    <Form.Control type='number' value={hoursPerWeek} onChange={handleChange} name='hoursPerWeek' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='minWeeks'>
                    <Form.Label>Minimum weeks</Form.Label>
                    <Form.Control type='number' value={minWeeks} onChange={handleChange} name='minWeeks' />
                </Form.Group>

            </Row>

            <Form.Group className='mb-3' controlId='shelterType'>
                <Form.Label>Shelter type</Form.Label>
                <Form.Control type='text' value={shelterType} onChange={handleChange} name='shelterType' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='mealsIncluded'>
                <Form.Label>Meals included</Form.Label>
                <Form.Control type='text' value={mealsIncluded} onChange={handleChange} name='mealsIncluded' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='gallery'>
                <Form.Label>Photos (URL)</Form.Label>
                <Form.Control type='text' value={gallery} onChange={handleChange} name='gallery' />
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