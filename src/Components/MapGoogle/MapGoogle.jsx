import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MarkerGoogle from './../MarkerGoogle/MarkerGoogle'
import './MapGoogle.css'


const MapGoogle = ({ projects }) => {

    const center = {
        lat: 27.766024583856897,
        lng: 9.930292853032203
    }

    const size = {
        height: "60vh",
        width: "768px"
    }

    return (

        <LoadScript googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>
            <container className='map-container'>
                <GoogleMap

                    mapContainerStyle={size}
                    zoom={1.7}
                    center={center}>

                    <MarkerGoogle projects={projects} />

                </GoogleMap>
            </container>

        </LoadScript>
    )
}

export default MapGoogle