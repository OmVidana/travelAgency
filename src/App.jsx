// import { Route, Router, Switch, Redirect } from 'wouter';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import PrivateRoute from './utils/PrivateRoute'

// import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";
import Results from "./pages/Results";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import AccountFlights from './pages/AccountFlights';
import AccountHotels from './pages/AccountHotels';

import {AuthProvider} from './context/AuthContext'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<FlightSearch/>} />
          <Route path="/hoteles" element={<Hotels/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
           <Route path="/micuenta" element={<PrivateRoute><MyAccount/></PrivateRoute>}/>
          <Route path="/micuenta/vuelos" element={<AccountFlights/>} />
          <Route path="/micuenta/hoteles" element={<AccountHotels/>} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
