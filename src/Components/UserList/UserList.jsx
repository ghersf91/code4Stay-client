import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import userService from "../../Services/user.services"
import UserCard from "../UserCard/UserCard"

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => {
                console.log(data)
                setUsers(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Row>
            {
                users.map(user => {
                    return (
                        <Col lg={3} md={6} key={user._id} >
                            <UserCard {...user} />
                        </Col>
                    )
                })
            }
        </Row>

    )
}

export default UserList