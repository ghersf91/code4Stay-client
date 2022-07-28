import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
import MarkerGoogle from './../MarkerGoogle/MarkerGoogle'
import './MapGoogle.css'

const MapGoogle = ({ projects }) => {

    const center = {
        lat: 40.38280301118558,
        lng: - 3.4166048844266776
    }

    const size = {
        height: "60vh",
        width: "768px"
    }

    return (
        <div className='mapWidget'>
            <LoadScript googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>
                <Container className='map-container'>
                    <GoogleMap

                        mapContainerStyle={size}
                        zoom={1.7}
                        center={center}>

                        <MarkerGoogle projects={projects} />

                    </GoogleMap>
                </Container>
            </LoadScript >
        </div>

    )
}

export default MapGoogle