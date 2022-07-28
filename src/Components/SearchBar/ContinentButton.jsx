import { ButtonGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './SearchBar.css'

const ContinentButton = () => {
    const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
        <ButtonGroup>
            {
                allContinents.map(e => {
                    return (
                        <Link key={e} to={`/search/${e}`}>
                            <Button className='continent-button' variant='light'
                            >{e}</Button>
                        </Link>
                    )
                })
            }
        </ButtonGroup>
    )
}

export default ContinentButton