
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import ResumeGenerator from './pages/ResumeGenerator.jsx'
import UserForm from './pages/UserForm.jsx'
import History from './pages/History.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import ViewResume from './pages/ViewResume.jsx'


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/resume' element={<ResumeGenerator/>}/>
        <Route path='/form' element={<UserForm/>}/>
        <Route path='/history' element={<History/>}/>
        {/* dynamic url are prefix with column(:),and dynamic value will be stored in variable after column ex-:id */}
        <Route path='/resume/:id/view' element={<ViewResume/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
