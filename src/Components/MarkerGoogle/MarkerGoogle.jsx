// import { useState } from 'react'
// import { Row, Col, Button } from 'react-bootstrap'


// const Marker = ({ projects }) => {

//     let [latitude, setLatitude] = useState(-33.7560119)
//     let [longitude, setLongitude] = useState(150.6038367)
//     let [address, setAddress] = useState('')

//     const updateCoordinates = (e) => {
//         e.preventDefault()

//         const encodedAddress = encodeURI(address)

//         fetch('xxxxxxxxxxxxxxxxxxx')
//             .then(response => response.json())
//             .then(response => {
//                 setLatitude(response.lat)
//                 setLongitude(response.long)
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             The latitude is {latitude}
//             The longitude is {longitude}

//             <Button as="input" type="submit" value="Curitiba, Brazil" onSubmit={(e) => updateCoordinates(e)} />{' '}
//         </div>


//     )
// }


// export default Marker


//     // <>
//     //         <h1>The addresses of the projects are:</h1>
//     //         <Row>
//     //             {
//     //                 projects.map(project => {
//     //                     return (
//     //                         <Col md={3} key={project._id} >
//     //                             <ul>
//     //                                 <li>{project.city}, {project.country}</li>
//     //                             </ul>
//     //                         </Col>
//     //                     )
//     //                 })

//     //             }
//     //         </Row>
//     //     </>