import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Match from './gallery/Match'
import PlaceDetails from './gallery/Members'
import Navigation from './components/Navigation'
import Error404 from './components/error404'
import Members from './gallery/Members'
import SignIn from './users/SignIn'
import RegistrationForm from './users/RegistrationForm'
import CurrentUserProvider from './contexts/CurrentUser'





function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/RegistrationForm" component={RegistrationForm} />
          <Route exact path="/Match" component={Match} />
          <Route exact path="/Members" component={Members} />
          <Route exact path="/places/:placeId" component={PlaceDetails} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}



        
        


  
        




  
   



export default App;
