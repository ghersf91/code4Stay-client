import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from "react"
import './Map.css'

const Map = () => {

    const [update, setUpdate] = useState(false)

    const center = {
        lat: 64.31275217542137,
        lng: - 51.75075658515222
    }

    const size = {
        height: "100vh",
        width: "70%"
    }

    return (

        <LoadScript googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>

            <GoogleMap className="map"
                mapContainerStyle={size}
                zoom={2}
                center={center}>

            </GoogleMap>

        </LoadScript>
    )
}

export default Map