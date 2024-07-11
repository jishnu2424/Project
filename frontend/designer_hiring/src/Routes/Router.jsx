import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ScrollToTop from '../Pages/ScrollToTop'
import UserDashboardPage from '../Pages/UserDashboardPage'
import UserDashCardDetail from '../Components/UserDashCardDetail'
import DesignerHomePage from '../Pages/DesignerHomePage'
import DesignerDesignMain from '../Components/DesignerDesignMain'
import DesignAdd from '../Components/DesignAdd'
import UpdateDesign from '../Components/UpdateDesign'
import { SocketContextProvider } from '../Context/SocketContext'
import ChatBox from '../Components/Chat/ChatBox'
import { Provider } from 'react-redux'
import store from '../Components/Redux/store'




function Router() {
  return (
    <div>
        <BrowserRouter>
        <Provider store={store}>
          <SocketContextProvider>
        <ScrollToTop/>
        <Header/>
            <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/designer/:id' element={<DesignerPage/>}/>
              <Route path='/contact' element={<ContactUsPage/>}/>
              <Route path='/privacy' element={<PrivacyPage/>}/>
              <Route path='/terms' element={<TermsPage/>}/>
              <Route path='/aboutus' element={<AboutUsPage/>}/>
              <Route path='/user' element={<UserRegisterPage/>}/>
              <Route path='/designerreg' element={<DesignerRegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/designer/desdetail/:id' element={<DesignerDesignDetailPage/>}/>
              <Route path='/desdetail/:id' element={<DesignerDesignDetailPage/>}/>
              <Route path='/admin' element={<AdminPage/>}/>
              <Route path='/admin/admincadview/:id' element={<AdmincardView/>}/>
              <Route path='/userdash' element={<UserDashboardPage/>}/>
              <Route path='/userdash/usercaddetail' element={<UserDashCardDetail/>}/>
              <Route path='/designerhome' element={<DesignerHomePage/>}/>
              <Route path='/designerhome/designdetail/:id' element={<DesignerDesignMain/>}/>
              <Route path='/designerhome/designadd' element={<DesignAdd/>}/>
              <Route path='/designerhome/designdetail/update/:id' element={<UpdateDesign/>}/>
              <Route path='/chat/:id' element={<ChatBox/>}/>
            </Routes>
        <Footer/>
        <ToastContainer/>
        </SocketContextProvider>
        </Provider>
        </BrowserRouter>
    </div>
  )
}

export default Router