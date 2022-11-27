import { useState, useEffect } from "react";
// import { Route, Router, Switch, Redirect } from 'wouter';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Hotels from './pages/Hotels';
import PrivateRoute from './utils/PrivateRoute'
// import Fligth_search from "./pages/FlightSearch";
import Home from "./pages/FlightSearch";
import Results from "./pages/Results";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import AccountFlights from "./pages/AccountFlights";
import AccountHotels from "./pages/AccountHotels";

import {AuthProvider} from './context/AuthContext'
import FlightSearch from "./pages/FlightSearch";
import Loader from "./components/global/Loader"
import LogIn2 from "./pages/LogIn2";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<FlightSearch/>} />
          <Route path="/hoteles" element={<Hotels/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/login" element={<LogIn/>} />
          {/*<Route path="/signup" element={<SignUp/>} />*/}
           <Route path="/micuenta" element={<PrivateRoute><MyAccount/></PrivateRoute>}/>
          <Route path="/micuenta/vuelos" element={<PrivateRoute><AccountFlights/></PrivateRoute>} />
          <Route path="/micuenta/hoteles" element={<PrivateRoute><AccountHotels/></PrivateRoute>} />
          <Route path="/signup" element={<LogIn2/>} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
