import { ButtonGroup, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import searchService from "../../Services/search.services"

const SearchBar = ({ receiveFilter, receiveContinents }) => {
    const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const toggleContinent = e => {

        searchService
            .getContinent(e)
            .then(response => {
                receiveContinents(response.data)
            })
            .catch(err => console.log(err))
    }

    const toggleFilter = e => {
        searchService
            .filterProjects(e.target.value)
            .then(({ data }) => receiveFilter(e.target.value))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Form.Control className='form-input' placeholder="Enter Search" onChange={toggleFilter}></Form.Control>

            <ButtonGroup>
                {
                    allContinents.map(e => {
                        return (
                            <Link key={e} to={`/search/${e}`}>
                                <Button variant='light'
                                >{e}</Button>
                            </Link>
                        )

                    })
                }
            </ButtonGroup>
        </>

    )
}

export default SearchBar