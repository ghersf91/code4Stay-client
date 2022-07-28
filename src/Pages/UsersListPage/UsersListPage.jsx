import { Container } from "react-bootstrap"
import UserList from "../../Components/UserList/UserList"
import './UsersListPage.css'

const UsersListPage = () => {

    return (
        <Container id="list-container">
            <UserList />

        </Container>
    )
}

export default UsersListPage