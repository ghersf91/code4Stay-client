import { Marker, InfoWindow } from '@react-google-maps/api'
import { useState } from 'react'

const MarkerGoogle = ({ projects }) => {
    const [selected, setSelected] = useState({})

    const onSelect = item => {
        setSelected(item)
    }

    return (
        <>
            {
                projects.map(project => {
                    return (
                        <>
                            <Marker key={project._id}
                                position={{
                                    lat: project.location.coordinates[0],
                                    lng: project.location.coordinates[1]
                                }}
                                onMouseOver={() => onSelect(project)}
                            />
                        </>
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
                            <h6>{selected.projectName}</h6>
                            <p>{selected.city}, {selected.country}</p>
                            <img src={selected.gallery}></img>
                        </>

                    </InfoWindow>
                )
            }
        </>
    )
}

export default MarkerGoogle