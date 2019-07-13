import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';
import  'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <BrowserRouter>
       <Routes />
    </BrowserRouter>
 
  );
}

export default App;
