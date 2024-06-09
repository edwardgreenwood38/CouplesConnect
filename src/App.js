import React from 'react';



function App() {
  return (
    <div className="App">
      {/* <div>
        <login/>
      </div> */}
      <h1>Welcome To The Couples Connnect App!</h1>
    <body>
    <login/>
       <div className="container">
        <form id="registration-form">
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="username" placeholder="Username" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Register </button>
        </form>
      </div>
    </body>
    </div>
  );
  
}


export default App;
