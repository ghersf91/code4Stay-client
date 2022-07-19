import { Route, Routes } from 'react-router-dom'

import SignupPage from '../Pages/SignupPage/SignupPage'
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import CreateProjectPage from './../Pages/CreateProjectPage/CreateProjectPage'


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
                <Route path="/projects/create" element={<CreateProjectPage />} />
            </Routes>
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>

    )
}

export default AppRoutes