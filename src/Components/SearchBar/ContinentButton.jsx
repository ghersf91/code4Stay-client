import { ButtonGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ContinentButton = () => {
    const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
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
    )
}

export default ContinentButton