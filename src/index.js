import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Userregistor from './modules/auth/Userregistor';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Paymentlanding from './modules/payment/Paymentlanding';
import Paymentabout from './modules/payment/Paymentabout';
import Paymentdetails from './modules/payment/Paymentdetails';
import Payhomepage from './modules/payment/Payhomepage';
import Courselandingpage from './modules/courses/Courselandingpage';
import Coursehomepage from './modules/courses/Coursehomepage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Loginpage />}></Route>
        <Route path='registor' element={<Userregistor />}></Route>
        <Route path='landing' element={<Mylandingpage />}></Route>
        <Route path='landing/payment' element={<Paymentlanding />}>
          <Route path='' element={<Payhomepage />}></Route>
          <Route path='about' element={<Paymentabout />}></Route>
          <Route path='payment-details' element={<Paymentdetails />}></Route>
        </Route>
        <Route path='landing/course' element={<Courselandingpage />}>
          <Route path='' element={<Coursehomepage />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

