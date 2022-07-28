import { Form } from "react-bootstrap"


const MealsCheckbox = ({ mealsChecked, receiveMeals }) => {

    const handleChange = e => {
        const { name, checked } = e.target

        const currentMeals = [...mealsChecked]

        if (checked && !currentMeals.includes(name)) {

            currentMeals.push(name)

        } else if (currentMeals.includes(name)) {

            const mealsIndex = currentMeals.indexOf(name)

            mealsIndex > -1 && currentMeals.splice(mealsIndex, 1)

        }

        receiveMeals(currentMeals)
    }

    return (
        <Form.Group className='mb-3' controlId='mealsIncluded' name='mealsIncluded' onClick={handleChange}>
            <Form.Label>Meals included</Form.Label>
            <div key={`inline-checkbox`} className="mb-3">
                {
                    mealsChecked && mealsChecked.includes("Breakfast")
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Breakfast"
                            name="Breakfast"
                            type={`checkbox`}
                            id={"Breakfast"}
                            value={'on'}

                        /> :
                        <Form.Check
                            inline
                            label="Breakfast"
                            name="Breakfast"
                            type={`checkbox`}
                            id={"Breakfast"}

                        />
                }
                {
                    mealsChecked && mealsChecked.includes("Lunch")

                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Lunch"
                            name="Lunch"
                            type={`checkbox`}
                            id={"Lunch"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Lunch"
                            name="Lunch"
                            type={`checkbox`}
                            id={"Lunch"}
                        />
                }

                {
                    mealsChecked && mealsChecked.includes("Supper")

                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Supper"
                            name="Supper"
                            type={`checkbox`}
                            id={"Supper"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Supper"
                            name="Supper"
                            type={`checkbox`}
                            id={"Supper"}
                        />
                }
            </div>
        </Form.Group>

    )
}

export default MealsCheckbox


