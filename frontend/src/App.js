import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navagation from './components/Navagation';


function App() {
  return (
    <div className="App">
      

       <h1>Welcome To The Couples Connnect App!</h1>
      <h3>Where <i>Couples</i> Find <strong>Best Friends!</strong></h3>
            <Navagation />
      {/* <div className="container">
      <img height="750" width="1470" src="/melissa-askew-tSlvoSZK77c-unsplash.jpg" alt="friends" />
      </div>  */}

      {/* Carousel  */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel" >
       
        {/* Indicator/dots */}
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
            <img width="1470" height="700" src="/melissa-askew-tSlvoSZK77c-unsplash.jpg" className="d-block w-100" alt="friends" />
          </div>
          <div className="carousel-item">
            <img width="1470" height="700" src="/Awesome.jpg" className="d-block w-100" alt="friends" />
          </div>
          <div className="carousel-item">
            <img width="1470" height="700" src="/Sunset!.jpg" className="d-block w-100" alt="friends" />
          </div>
          <div className="carousel-item">
            <img width="1470" height="700" src="/Great Day!.jpg" className="d-block w-100" alt="friends" />
          </div>
          <div className="carousel-item">
            <img width="1470" height="700" src="/Fun in the sun!.jpg" className="d-block w-100" alt="friends" />
          </div>
        </div>
        
        
        {/* Left and right icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div> 
  );
}



        
        


  
        




  
   



export default App;
