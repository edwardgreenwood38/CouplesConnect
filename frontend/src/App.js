import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import RegistrationForm from './components/RegistrationForm';
// import SignIn from './components/SignIn';
// import Match from './gallery/Match';



function App() {
  return (
    <div className="App">

<h1>Welcome To The Couples Connnect App!</h1>
         <h3>Where <i>Couples</i> Find <strong>Best Friends!</strong></h3>

  {/* <div className="container">
   <img height="750" width="1470" src="/melissa-askew-tSlvoSZK77c-unsplash.jpg" alt="friends" />
  </div>  */}

      {/* Carousel  */}
        <div id="demo" className="carousel" data-bs-ride="carousel" >
        {/* Indicator Buttons */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        </div>

        {/* Slideshow  */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img width="1470" height="650" src="/melissa-askew-tSlvoSZK77c-unsplash.jpg" alt="friends" />
          </div>
          <div className="carousel-item active">
            <img width="1470" height="800" src="/Awesome.jpg" alt="friends" />
          </div>
          <div className="carousel-item active">
            <img width="1470" height="800" src="/Sunset!.jpg" alt="friends" />
          </div>
          <div className="carousel-item active">
            <img width="1470" height="800" src="/Great Day!.jpg" alt="friends" />
          </div>
          <div className="carousel-item active">
            <img width="1470" height="800" src="/Fun in the sun!.jpg" alt="friends" />
          </div>
        </div>
        
        
        {/* Left and right icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
      );
}



        
        


  
        




  
   



export default App;
