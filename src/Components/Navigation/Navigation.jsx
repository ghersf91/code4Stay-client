import { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/auth.context'
import { MessageContext } from '../../Context/userMessage.context'


const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)


    const logout = () => {
        setShowMessage({ show: true, title: 'Until nex time', text: 'your session was closed successfully' })
        logoutUser()
    }


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

                        {
                            !user ?
                                <>
                                    <Link to="/signup">
                                        <Nav.Link as="span">Sign up</Nav.Link>
                                    </Link>
                                    <Link to="/login">
                                        <Nav.Link as="span">Login</Nav.Link>
                                    </Link>
                                </> :
                                <>
                                    <Link to="/projects/create">
                                        <Nav.Link as="span">Create project</Nav.Link>
                                    </Link>

                                    <Link to={`/users/profile/${user._id}`}>
                                        <Nav.Link as="span">My profile {user.username}</Nav.Link>
                                    </Link>

                                    <Nav.Link as="span" onClick={logout}>Log out</Nav.Link>

                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation