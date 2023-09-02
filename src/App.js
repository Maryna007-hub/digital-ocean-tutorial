import  React  from "react";
import './App.css';

export default function App() {
 return (
    <div className="App">
      <button className="btn btn-primary">Hello</button>
       <div className="container">
       <h1>Weather app</h1>
       <Weather/>
        <footer>
          This project was coded by 
          <a href='/'>Maryna Holinka </a>
          and is <a href='https://github.com/Maryna007-hub/digital-ocean-tutorial'
          target="_blank"
          rel="noopener noreferrer">
     open-soursed on GitHub
        </a>
        </footer>
        </div>
    </div>
  );
 }


