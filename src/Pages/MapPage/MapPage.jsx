import MapGoogle from '../../Components/MapGoogle/MapGoogle'
import projectsService from "../../Services/project.services"

import { useState, useEffect } from "react"




const MapPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects()
    }, [])

    const loadProjects = () => {
        projectsService
            .getProjects()
            .then(({ data }) => {
                setProjects(data)
                // setShowMessage({ show: true, title: 'Welcome', text: `The projects have loaded successfully` })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <MapGoogle projects={projects} />
        </>
    )
}

export default MapPage