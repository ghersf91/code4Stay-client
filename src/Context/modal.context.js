import { createContext, useState } from 'react'

const ModalContext = createContext()

function ModalWrapper(props) {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)




    return (
        <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalWrapper }