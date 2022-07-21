import { Route, Routes } from 'react-router-dom'

import SignupPage from '../Pages/SignupPage/SignupPage'
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import CreateProjectPage from './../Pages/CreateProjectPage/CreateProjectPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import UserEditPage from '../Pages/UserEditPage/UserEditPage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />

                <Route path="/projects/create" element={<PrivateRoute />}>
                    <Route path="" element={<CreateProjectPage />} />
                </Route>

                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/users/profile/:user_id" element={<PrivateRoute />}>
                    <Route path="" element={<ProfilePage />} />
                </Route>

                <Route path="/users/editUser/:user_id" element={<PrivateRoute />}>
                    <Route path="" element={<UserEditPage />} />
                </Route>


            </Routes>

        </>

    )
}

export default AppRoutes