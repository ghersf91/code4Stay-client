import { useEffect } from "react"
import { Form } from "react-bootstrap"
import userService from "../../Services/user.services"

const { useState } = require("react")

const LocationCheckbox = ({ id, receiveLocations }) => {
    const [areChecked, setAreChecked] = useState([])
    const [americaChecked, setAmericaChecked] = useState(false)
    const [asiaChecked, setAsiaChecked] = useState(false)
    const [europeChecked, setEuropeChecked] = useState(false)
    const [africaChecked, setAfricaChecked] = useState(false)
    const [oceaniaChecked, setOceaniaChecked] = useState(false)

    const isIncluded = (name) => {
        name.locationInterests.includes('Americas') && setAmericaChecked(true)
        name.locationInterests.includes('Europe') && setEuropeChecked(true)
        name.locationInterests.includes('Asia') && setAsiaChecked(true)
        name.locationInterests.includes('Africa') && setAfricaChecked(true)
        name.locationInterests.includes('Oceania') && setOceaniaChecked(true)

    }

    useEffect(() => {
        loadLocations()
        receiveLocations(areChecked)

    }, [])
    console.log(id)
    const loadLocations = () => {
        userService
            .getUser(id)
            .then(({ data }) => {
                console.log(data)
                setAreChecked(data.locationInterests)
                isIncluded(data)

            })
            .catch(err => console.log(err))

    }

    const handleInputChange = e => {

        const { name, checked } = e.target


        // const checkedLocations = () => locations.forEach(e => {
        //     allLocations.includes(e) && handleClick()
        // })
        console.log(checked, name)
        const currentLocationInterests = [...areChecked]
        console.log(currentLocationInterests)

        if (checked && !currentLocationInterests.includes(name)) {

            currentLocationInterests.push(name)

        } else if (currentLocationInterests.includes(name)) {

            const locationInterestsIndex = currentLocationInterests.indexOf(name)

            locationInterestsIndex > -1 && currentLocationInterests.splice(locationInterestsIndex, 1)

            console.log(currentLocationInterests)
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
                    {
                        americaChecked
                            ?
                            <Form.Check
                                inline
                                defaultChecked
                                label="Americas"
                                name="Americas"
                                type={`checkbox`}
                                id={"Americas"}
                            />
                            :
                            <Form.Check
                                inline
                                label="Americas"
                                name="Americas"
                                type={`checkbox`}
                                id={"Americas"}
                            />
                    }

                    {
                        europeChecked
                            ?
                            <Form.Check
                                inline
                                defaultChecked
                                label="Europe"
                                name="Europe"
                                type={`checkbox`}
                                id={"Europe"}
                            />
                            :
                            <Form.Check
                                inline
                                label="Europe"
                                name="Europe"
                                type={`checkbox`}
                                id={"Europe"}
                            />
                    }

                    {
                        asiaChecked
                            ?
                            <Form.Check
                                inline
                                defaultChecked
                                label="Asia"
                                name="Asia"
                                type={`checkbox`}
                                id={"Asia"}
                            />
                            :
                            <Form.Check
                                inline
                                label="Asia"
                                name="Asia"
                                type={`checkbox`}
                                id={"Asia"}
                            />
                    }

                    {
                        africaChecked
                            ?
                            <Form.Check
                                inline
                                defaultChecked
                                label="Africa"
                                name="Africa"
                                type={`checkbox`}
                                id={"Africa"}
                            />
                            :
                            <Form.Check
                                inline
                                label="Africa"
                                name="Africa"
                                type={`checkbox`}
                                id={"Africa"}
                            />
                    }

                    {
                        oceaniaChecked
                            ?
                            <Form.Check
                                inline
                                defaultChecked
                                label="Oceania"
                                name="Oceania"
                                type={`checkbox`}
                                id={"Oceania"}
                            />
                            :
                            <Form.Check
                                inline
                                label="Oceania"
                                name="Oceania"
                                type={`checkbox`}
                                id={"Oceania"}
                            />
                    }

                </div>
            </Form.Group>
        </Form>
    )
}

export default LocationCheckbox