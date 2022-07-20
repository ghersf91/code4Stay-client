import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = () => {

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
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default CreateProjectPage