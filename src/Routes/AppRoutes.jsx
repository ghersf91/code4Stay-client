import { Route, Routes } from 'react-router-dom'

import SignupPage from '../Pages/SignupPage/SignupPage'
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import CreateProjectPage from './../Pages/CreateProjectPage/CreateProjectPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoutes'
import ProjectDetailsPage from '../Pages/ProjectsDetailsPage/ProjectDetails'

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="projects/:id/details" element={<ProjectDetailsPage />} />

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