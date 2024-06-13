import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Match from './gallery/Match'
import Navigation from './components/Navigation'
import Error404 from './components/error404'
import Members from './gallery/Members'
import SignIn from './users/SignIn'
import RegistrationForm from './users/RegistrationForm'
import CurrentUserProvider from './contexts/CurrentUser'





function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/RegistrationForm" component={RegistrationForm} />
          <Route exact path="/gallery/Match" component={Match} />
          <Route exact path="/gallery/Members" component={Members} />
          
          <Route path="/" component={Error404} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}



        
        


  
        




  
   



export default App;
