import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LandingPage from '../Pages/LandingPage'
import DesignerPage from '../Pages/DesignerPage'
import ContactUsPage from '../Pages/ContactUsPage'
import PrivacyPage from '../Pages/PrivacyPage'
import TermsPage from '../Pages/TermsPage'
import AboutUsPage from '../Pages/AboutUsPage'
import UserRegisterPage from '../Pages/UserRegisterPage'
import DesignerRegisterPage from '../Pages/DesignerRegisterPage'
import LoginPage from '../Pages/LoginPage'
import DesignerDesignDetailPage from '../Pages/DesignerDesignDetailPage'
import AdminPage from '../Pages/AdminPage'
import AdmincardView from '../Components/AdmincardView'


function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/designer' element={<DesignerPage/>}/>
              <Route path='/contact' element={<ContactUsPage/>}/>
              <Route path='/privacy' element={<PrivacyPage/>}/>
              <Route path='/terms' element={<TermsPage/>}/>
              <Route path='/aboutus' element={<AboutUsPage/>}/>
              <Route path='/user' element={<UserRegisterPage/>}/>
              <Route path='/designerreg' element={<DesignerRegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/designer/desdetail' element={<DesignerDesignDetailPage/>}/>
              <Route path='/admin' element={<AdminPage/>}/>
              <Route path='/admin/admincadview' element={<AdmincardView/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router