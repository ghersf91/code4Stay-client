import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MarkerGoogle from './../MarkerGoogle/MarkerGoogle'


const MapGoogle = ({ projects }) => {

    const center = {
        lat: 40.555038168446856,
        lng: - 4.005984874407696
    }

    const size = {
        height: "100vh",
        width: "70%"
    }

    return (

        <LoadScript googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>

            <GoogleMap
                mapContainerStyle={size}
                zoom={2}
                center={center}>

                <MarkerGoogle projects={projects} />

            </GoogleMap>

        </LoadScript>
    )
}

export default MapGoogle