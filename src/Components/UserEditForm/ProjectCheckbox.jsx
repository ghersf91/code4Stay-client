import { Form } from "react-bootstrap"

const ProjectCheckbox = ({ receiveProjects, projectsChecked }) => {

    const handleInputChange = e => {

        const { name, checked } = e.target

        const currentProjectInterests = [...projectsChecked]

        if (checked && !currentProjectInterests.includes(name)) {

            currentProjectInterests.push(name)

        } else if (currentProjectInterests.includes(name)) {

            const projectInterestsIndex = currentProjectInterests.indexOf(name)

            projectInterestsIndex > -1 && currentProjectInterests.splice(projectInterestsIndex, 1)
        }
        receiveProjects(currentProjectInterests)
    }
    return (
        <Form.Group className='mb-3' controlId='projectTypeInterests' name='projectTypeInterests' onClick={handleInputChange}>
            <Form.Label>Project interests</Form.Label>
            <div key={`inline-checkbox`} className="mb-3">
                {
                    projectsChecked && projectsChecked.includes('Farm')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Farm"
                            name="Farm"
                            type={`checkbox`}
                            id={"Farm"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Farm"
                            name="Farm"
                            type={`checkbox`}
                            id={"Farm"}
                        />
                }

                {
                    projectsChecked && projectsChecked.includes('NGO')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="NGO"
                            name="NGO"
                            type={`checkbox`}
                            id={"NGO"}
                        />
                        :
                        <Form.Check
                            inline
                            label="NGO"
                            name="NGO"
                            type={`checkbox`}
                            id={"NGO"}
                        />
                }

                {
                    projectsChecked && projectsChecked.includes('School')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="School"
                            name="School"
                            type={`checkbox`}
                            id={"School"}
                        />
                        :
                        <Form.Check
                            inline
                            label="School"
                            name="School"
                            type={`checkbox`}
                            id={"School"}
                        />
                }

                {
                    projectsChecked && projectsChecked.includes('Hostel')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Hostel"
                            name="Hostel"
                            type={`checkbox`}
                            id={"Hostel"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Hostel"
                            name="Hostel"
                            type={`checkbox`}
                            id={"Hostel"}
                        />
                }

                {
                    projectsChecked && projectsChecked.includes('Camping')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Camping"
                            name="Camping"
                            type={`checkbox`}
                            id={"Camping"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Camping"
                            name="Camping"
                            type={`checkbox`}
                            id={"Camping"}
                        />
                }

                {
                    projectsChecked && projectsChecked.includes('Other')
                        ?
                        <Form.Check
                            inline
                            defaultChecked
                            label="Other"
                            name="Other"
                            type={`checkbox`}
                            id={"Other"}
                        />
                        :
                        <Form.Check
                            inline
                            label="Other"
                            name="Other"
                            type={`checkbox`}
                            id={"Other"}
                        />
                }
            </div>
        </Form.Group>
    )
}


export default ProjectCheckbox
