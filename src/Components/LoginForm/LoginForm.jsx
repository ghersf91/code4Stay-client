import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from './../../Services/auth.services'
import { MessageContext } from './../../Context/userMessage.context'
import { AuthContext } from "./../../Context/auth.context"
import './LoginForm.css'

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                setShowMessage({ show: true, title: `Welcome!`, text: 'You were logged in correctly' })
                navigate('/projects')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control className='form-input' type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control className='form-input' type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button id='login-button' variant="dark" type="submit">Log in</Button>
            </div>

        </Form>
    )
}

export default LoginForm