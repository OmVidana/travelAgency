import { Route, Router, Switch, Redirect } from 'wouter';

import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';
import Fligth_search from "./pages/FlightSearch";
import FlightSearch from "./pages/FlightSearch";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Redirect to='home'/>
          </Route>
          <Route path='/home'><Home/></Route>
          <Route path='/hoteles'><Hoteles/></Route>
          <Route path='/search'><FlightSearch/></Route>
          <Route path='/signup'><SignUp/></Route>
          <Route path='/login'><LogIn/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
