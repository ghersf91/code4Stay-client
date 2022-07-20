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
            <CreateProjectForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default CreateProjectPage