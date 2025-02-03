import React from 'react';
import ReactDOM from 'react-dom/client';
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

  <Abc></Abc>
  <Myfunc></Myfunc>
  <Myheader></Myheader>
  <Myreactbootstarp></Myreactbootstarp>
  <h1>this mui</h1>
  <Mymui></Mymui>

  </React.StrictMode>
);

