// import { Route, Router, Switch, Redirect } from 'wouter';
import SignUp from './pages/Signup';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';
// import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";
import Results from "./pages/Results";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<FlightSearch/>} />
          <Route path="/hoteles" element={<Hoteles/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/login" element={<LogIn/>} />
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
