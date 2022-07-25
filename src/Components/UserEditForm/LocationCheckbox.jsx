import { useEffect } from "react"
import { Form } from "react-bootstrap"
import userService from "../../Services/user.services"

const { useState } = require("react")

const LocationCheckbox = ({ locationsChecked, receiveLocations }) => {


    useEffect(() => {
        receiveLocations(locationsChecked)

    }, [])


    const handleInputChange = e => {

        const { name, checked } = e.target

        const currentLocationInterests = [...locationsChecked]

        if (checked && !currentLocationInterests.includes(name)) {

            currentLocationInterests.push(name)

        } else if (currentLocationInterests.includes(name)) {

            const locationInterestsIndex = currentLocationInterests.indexOf(name)

            locationInterestsIndex > -1 && currentLocationInterests.splice(locationInterestsIndex, 1)

            console.log(currentLocationInterests)
        }


        receiveLocations(currentLocationInterests)
    }
    return (
        <>
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
                        locationsChecked && locationsChecked.includes("Americas")
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
                        locationsChecked && locationsChecked.includes("Europe")
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
                        locationsChecked && locationsChecked.includes("Asia")
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
                        locationsChecked && locationsChecked.includes("Africa")
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
                        locationsChecked && locationsChecked.includes("Oceania")
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
        </>
    )
}

export default LocationCheckbox