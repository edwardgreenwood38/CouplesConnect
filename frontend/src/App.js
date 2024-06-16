import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Error404 from './components/error404'
import GalleryIndex from './gallery/GalleryIndex'
import Members from './gallery/Members'
import Match from './gallery/Match'
import SignIn from './components/loginSignup/SignUp'
import LoginForm from './components/loginSignup/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'
import Events from './components/Events/Events'





function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/sign-in" element={<SignIn />} />
          <Route  path="/login" element={<LoginForm />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/gallery" element={<GalleryIndex />} />
          <Route  path="/match" element={<Match />} />
          <Route  path="/members" element={<Members />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}



        
        


  
        




  
   



export default App;
