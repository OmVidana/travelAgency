// import { Route, Router, Switch, Redirect } from 'wouter';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Hotels from './pages/Hotels';
// import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";
import Results from "./pages/Results";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import AccountFlights from './pages/AccountFlights';
import AccountHotels from './pages/AccountHotels';
import AvailableFlights from './pages/AvailableFlights';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightSearch/>} />
          <Route path="/search" element={<FlightSearch/>} />
          <Route path="/hoteles" element={<Hotels/>} />
          <Route path="/vuelos-disponibles" element={<AvailableFlights/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/micuenta" element={<MyAccount/>} />
          <Route path="/micuenta/vuelos" element={<AccountFlights/>} />
          <Route path="/micuenta/hoteles" element={<AccountHotels/>} />


        </Routes>
      </BrowserRouter>
    // <>
    //   <Router>
    //     <Switch>
    //       <Route path='/'>
    //         <Redirect to='home'/>
    //       </Route>
    //       <Route path='/home'><Home/></Route>
    //       <Route path='/hoteles'><Hoteles/></Route>
    //       <Route path='/search'><FlightSearch/></Route>
    //       <Route path='/results'><Results/></Route>
    //       <Route path='/login'><LogIn/></Route>
    //     </Switch>
    //   </Router>
    // </>
  );
}

export default App;
