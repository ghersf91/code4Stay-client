import { useEffect } from "react"
import { Form } from "react-bootstrap"

const { useState } = require("react")

const LocationCheckbox = ({ location }) => {
    const [areChecked, setAreChecked] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const allLocations = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania']

    useEffect(() => {
        loadLocations()
    })

    const loadLocations = () => {
        setAreChecked(allLocations)
    }
    const handleClick = () => setIsChecked(!isChecked)

    const handleInputChange = e => {

        const { value, name, type, checked } = e.target


        // const checkedLocations = () => locations.forEach(e => {
        //     allLocations.includes(e) && handleClick()
        // })
        console.log(areChecked)
        const currentLocationInterests = [...areChecked]

        if (areChecked.includes(name)) {

            if (checked && !areChecked.includes(name)) {

                currentLocationInterests.push(name)

            } else if (areChecked.includes(name)) {

                const locationInterestsIndex = currentLocationInterests.indexOf(name)

                locationInterestsIndex > -1 && currentLocationInterests.splice(locationInterestsIndex, 1)

                console.log(currentLocationInterests)
            }
        }

        setAreChecked(currentLocationInterests)
    }
    return (
        <Form>
            <Form.Group className='mb-3' controlId='locationInterests' name='locationInterests' onClick={handleInputChange}>
                <Form.Label>Region interests</Form.Label>
                <div key={`inline-checkbox`} className="mb-3">
                    {/* {
                        allLocations.map(e => {
                            return (
                                <Form.Check
                                    inline
                                    checked={() => areChecked.includes(e) && true}
                                    label={e}
                                    name={e}
                                    type={`checkbox`}
                                    id={e}
                                />
                            )
                        })
                    } */}
                    <Form.Check
                        inline
                        label="Americas"
                        name="Americas"
                        type={`checkbox`}
                        id={"Americas"}
                    />
                    <Form.Check
                        inline
                        label="Europe"
                        name="Europe"
                        type={`checkbox`}
                        id={"Europe"}
                    />
                    <Form.Check
                        inline
                        label="Asia"
                        name="Asia"
                        type={`checkbox`}
                        id={"Asia"}
                    />
                    <Form.Check
                        inline
                        label="Africa"
                        name="Africa"
                        type={`checkbox`}
                        id={"Africa"}
                    />
                    <Form.Check
                        inline
                        label="Oceania"
                        name="Oceania"
                        type={`checkbox`}
                        id={"Oceania"}
                    />
                </div>
            </Form.Group>
        </Form>
    )
}

export default LocationCheckbox