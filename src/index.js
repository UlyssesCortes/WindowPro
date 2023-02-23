import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (<>
    <Home />
  </>)
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

