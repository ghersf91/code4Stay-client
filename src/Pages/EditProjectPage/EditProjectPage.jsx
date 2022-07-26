import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import EditProjectForm from './../../Components/EditProjectForm/EditProjectForm'



const EditProjectPage = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/projects')
    }
    return (
        <Container className='mb-5'>
            <EditProjectForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default EditProjectPage
