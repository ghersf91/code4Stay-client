import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProjectForm from './../../Components/EditProjectForm/EditProjectForm'

const EditProjectPage = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const navigate = useNavigate()

    const fireFinalActions = () => {
        closeModal()
        navigate('/projects')

    }
    return (
        <>
            <EditProjectForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default EditProjectPage
