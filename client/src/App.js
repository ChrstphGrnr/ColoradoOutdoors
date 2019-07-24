import React from 'react';
import logo from './logo.svg';
import './App.css';



function attractionRender()  {
  const resp = fetch('http://localhost:3001/api/v1/attractions').then(resp => resp.json()).then(json => console.log(json))
  return resp;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <ul>{attractionRender()}</ul>
        </p>
        
      </header>
    </div>
  );
}

export default App;
