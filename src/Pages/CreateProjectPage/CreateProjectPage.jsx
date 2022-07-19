import { useState } from 'react'
import CreateProjectForm from './../../Components/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = () => {

    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()

    }
    return (
        <>
            <h1>Create project</h1>
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default CreateProjectPage