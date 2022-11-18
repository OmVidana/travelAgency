import { Route, Router, Switch, Redirect } from 'wouter';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
// import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";
import AvailableFlights from './pages/AvailableFlights';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Redirect to='home'/>
          </Route>
          <Route path='/home'><Home/></Route>
          <Route path='/hoteles'><Hotels/></Route>
          <Route path='/search'><FlightSearch/></Route>
          <Route path='/Signup'><SignUp/></Route>
          <Route path='/login'><LogIn/></Route>
          <Route path='/vuelosdisponibles'><AvailableFlights/></Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
