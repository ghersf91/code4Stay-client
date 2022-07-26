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
    return (
        <>
            <Form.Control placeholder="Enter Search" onChange={event => {
                console.log(event.target.value)
                receiveFilter(event.target.value)
            }}></Form.Control>
            {/* <div>
                <input placeholder="Enter Search" onChange={event => {
                    console.log(event.target.value)
                    receiveFilter(event.target.value)
                }} />
            </div> */}
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