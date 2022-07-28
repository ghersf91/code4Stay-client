import { Marker, InfoWindow } from '@react-google-maps/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MarkerGoogle.css'

const MarkerGoogle = ({ projects }) => {
    const [selected, setSelected] = useState({})

    const onSelect = item => {
        setSelected(item)
    }

    const navigate = useNavigate()

    return (
        <>
            {
                projects.map(project => {
                    return (
                        <div key={project._id}>
                            <Marker
                                position={{
                                    lat: project.location.coordinates[0],
                                    lng: project.location.coordinates[1]
                                }}
                                onMouseOver={() => onSelect(project)}
                            />
                        </div>
                    )
                })
            }

            {
                selected.location &&
                (
                    <InfoWindow
                        position={{
                            lat: selected.location.coordinates[0],
                            lng: selected.location.coordinates[1]
                        }}
                        clickable={true}
                        onCloseClick={() => setSelected({})}

                    >

                        <>
                            <img className='marker-image' src={selected.gallery[0]}></img>
                            <h6>{selected.projectName}</h6>
                            <p>{selected.city}, {selected.country}</p>
                            <p onClick={() => navigate(`/projects/details/${selected._id}`)}>See more</p>
                        </>

                    </InfoWindow>
                )
            }
        </>
    )
}

export default MarkerGoogle