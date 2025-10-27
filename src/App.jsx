// import Button from '@mui/material/Button';
// import { FaHome } from "react-icons/fa";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <>
    <Header/>
      <Routes>
        {/* <h1>RESUME BUILDER <FaHome /> </h1>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}

        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
