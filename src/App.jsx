// import { Route, Router, Switch, Redirect } from 'wouter';
import LogIn from "./pages/LogIn";
import Hotels from "./pages/Hotels";
import PrivateRoute from "./utils/PrivateRoute";
// import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";
import Results from "./pages/Results";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import AccountFlights from "./pages/AccountFlights";
import AccountHotels from "./pages/AccountHotels";

import { AuthProvider } from "./context/AuthContext";
import LogIn2 from "./pages/LogIn2";
import HotelSearch from "./pages/HotelSearch";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FlightSearch />} />
          <Route path="/hoteles" element={<HotelSearch />} />
          <Route path="/hotelResults" element={<Hotels />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/micuenta"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/micuenta/vuelos"
            element={
              <PrivateRoute>
                <AccountFlights />
              </PrivateRoute>
            }
          />
          <Route
            path="/micuenta/hoteles"
            element={
              <PrivateRoute>
                <AccountHotels />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<LogIn2 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
