import { Route, Router, Switch, Redirect } from 'wouter';

import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';
import SignUp from './pages/SignUp';

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
          <Route path='/signup'><SignUp/></Route>
          <Route path='/login'><LogIn/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
