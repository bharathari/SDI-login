import React from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import SimpleSheet from '/Users/bharathari/Downloads/GCRS/login/src/components/Loginsheet';
import SignupSheet from '/Users/bharathari/Downloads/GCRS/login/src/components/signupsheet';
import ForgetPassSheet from './components/Forgetpasssheet';
import AccRegsheet from './components/AccRegsheet';

function Appp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SimpleSheet/>} />
      <Route path="/signup" element={<SignupSheet/>} />
      <Route path="/Forget" element={<ForgetPassSheet/>} />
      <Route path="/AccReg" element={<AccRegsheet/>} />


    </Routes>
    </BrowserRouter>
  
  );
}

export default Appp;