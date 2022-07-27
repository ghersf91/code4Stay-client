import { Route, Routes } from 'react-router-dom'
import SignupPage from '../Pages/SignupPage/SignupPage'
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import CreateProjectPage from './../Pages/CreateProjectPage/CreateProjectPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import UserEditPage from '../Pages/UserEditPage/UserEditPage'
import PrivateRoute from './PrivateRoutes'
import AcceptJoinButton from './../Components/AcceptJoinButton/AcceptJoinButton'
import ProjectDetailsPage from '../Pages/ProjectsDetailsPage/ProjectDetails'
import EditProjectPage from '../Pages/EditProjectPage/EditProjectPage'
import SearchPage from '../Pages/SearchPage/SearchPage'

const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/users/profile/:user_id" element={<PrivateRoute />}>
                    <Route path="" element={<ProfilePage />} />
                </Route>

                <Route path="/users/editUser/:user_id" element={<PrivateRoute />}>
                    <Route path="" element={<UserEditPage />} />
                </Route>

                <Route path="search/:continent" element={<PrivateRoute />}>
                    <Route path="" element={<SearchPage />} />
                </Route>

                <Route path="projects/details/:project_id" element={<PrivateRoute />}>
                    <Route path="" element={<ProjectDetailsPage />} />
                </Route>

                <Route path="projects/edit/:project_id" element={<EditProjectPage />} />

                <Route path="/projects/create" element={<PrivateRoute />}>
                    <Route path="" element={<CreateProjectPage />} />
                </Route>

                <Route path="/projects" element={<ProjectsPage />} />

                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/" element={<HomePage />} />

            </Routes>

        </>

    )
}

export default AppRoutes