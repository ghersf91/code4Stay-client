import { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../Context/modal.context'
import EditProjectForm from './../../Components/EditProjectForm/EditProjectForm'

const EditProjectPage = () => {

    const { closeModal } = useContext(ModalContext)



    const navigate = useNavigate()

    const fireFinalActions = () => {
        closeModal()
        navigate('/projects')
    }
    return (
        <Container className='mb-5'>
            <EditProjectForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default EditProjectPage
