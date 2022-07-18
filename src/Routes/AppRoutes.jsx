import { Route, Routes } from 'react-router-dom'

import SignupPage from '../Pages/SignupPage/SignupPage'
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'


const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<SignupPage />} />
            </Routes>

        </>

    )
}

export default AppRoutes