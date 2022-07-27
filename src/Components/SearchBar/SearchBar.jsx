import { ButtonGroup, Button, Form } from "react-bootstrap"
import searchService from "../../Services/search.services"

const SearchBar = ({ receiveFilter, receiveContinents }) => {
    const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const toggleContinent = e => {
        console.log(e)
        searchService
            .getContinent(e)
            .then(response => {
                console.log(response)
                receiveContinents(response.data)
            })
            .catch(err => console.log(err))
    }

    const toggleFilter = e => {
        searchService
            .filterProjects(e.target.value)
            .then(({ data }) => {
                console.log('----', data)
                // toggleContinent()
                receiveFilter(e.target.value)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Form.Control className='form-input' placeholder="Enter Search" onChange={toggleFilter}></Form.Control>

            <ButtonGroup>
                {
                    allContinents.map(e => {
                        return (
                            <Button variant='light'
                                onClick={() => toggleContinent(e)}>{e}</Button>)
                    })
                }
            </ButtonGroup>
        </>

    )
}

export default SearchBar