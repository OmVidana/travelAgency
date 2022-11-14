import { Route, Router, Switch, Redirect } from 'wouter';

import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Redirect to='home'/>
          </Route>
          <Route path='/home'><Home/></Route>
          <Route path='/login'><LogIn/></Route>
          <Route path='/hoteles'><Hoteles/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
