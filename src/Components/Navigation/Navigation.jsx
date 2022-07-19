import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand>Code4Stay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>
                        <Link to="/projects">
                            <Nav.Link as="span">Projects</Nav.Link>
                        </Link>
                        <Link to="/projects/create">
                            <Nav.Link as="span">Create project</Nav.Link>
                        </Link>
                        <Link to="/signup">
                            <Nav.Link as="span">Sign up</Nav.Link>
                        </Link>
                        <Link to="/login">
                            <Nav.Link as="span">Login</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation