import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Error404 from './components/error404'
import GalleryIndex from './gallery/GalleryIndex'
// import Members from './gallery/Members'
import Match from './gallery/Match'
import Signup from './components/loginSignup/Signup'
import RegistrationForm from './users/RegistrationForm'
import CurrentUserProvider from './contexts/CurrentUser'
import Events from './events/Events'





function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/sign-up" element={<Signup />} />
          <Route  path="/registrationForm" element={<RegistrationForm />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/gallery" element={<GalleryIndex />} />
          <Route  path="/match" element={<Match />} />
          {/* <Route  path="/members" element={<Members />} /> */}
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}



        
        


  
        




  
   



export default App;
