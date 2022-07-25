import { Marker } from '@react-google-maps/api'
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
                            // onClick={() => console.log(project._id)}
                            />
                        </>
                    )
                })
            }
        </>
    )
}

export default MarkerGoogle