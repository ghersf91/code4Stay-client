import { Link, useParams } from "react-router-dom"
import UserEditPage from "./../UserEditPage/UserEditPage"
const ProfilePage = () => {
    const { user_id } = useParams()
    return (
        <>
            <h1>Soy la página de perfil!</h1>
            <Link to={`/users/editUser/${user_id}`}>
                <div className="d-grid">
                    <p>Edit user</p>
                </div>
            </Link>
        </>
    )
}
export default ProfilePage