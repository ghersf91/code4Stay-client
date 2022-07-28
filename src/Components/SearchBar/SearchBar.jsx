import { Form } from "react-bootstrap"
import searchService from "../../Services/search.services"
import ContinentButton from "./ContinentButton"

const SearchBar = ({ receiveFilter, receiveContinents }) => {

    const toggleFilter = e => {
        searchService
            .filterProjects(e.target.value)
            .then(({ data }) => receiveFilter(e.target.value))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Form.Control className='form-input' placeholder="Enter Search" onChange={toggleFilter}></Form.Control>

            <ContinentButton />
        </>
    )
}

export default SearchBar