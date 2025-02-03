import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Style.css";
import Abc from './About';
import Myfunc from './Myfunctioncom';
import Myheader from './Myheader';
import Myreactbootstarp from './Myreactbootstarp';
import Mymui from './Mymui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  {/* <Abc></Abc>
  <Myfunc></Myfunc>
  <Myheader></Myheader>
  <Myreactbootstarp></Myreactbootstarp>
  <h1>this mui</h1>
  <Mymui></Mymui> */}

  <BrowserRouter>
  <Routes>
    <Route path='page' element={<Mymui/>}></Route>
    <Route path='/' element={<Myheader/>}></Route>
    <Route path='*' element={<Myfunc/>}></Route>
  </Routes>
  
  
  </BrowserRouter>

</React.StrictMode>
);

