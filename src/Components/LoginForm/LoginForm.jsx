import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { MessageContext } from "../../Context/userMessage.context"
import authService from "./../../Services/auth.services"

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''

    })

    const { setShowMessage } = useContext(MessageContext)

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
                setShowMessage({ show: true, title: `Welcome ${data.user.username}`, text: 'You have logged in correctly' })
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData




    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Log in</Button>
            </div>

        </Form>
    )
}

export default LoginForm