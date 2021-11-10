import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';



function App() {
  const isLoggedIn = localStorage.getItem('token')
  return (

        <Router>
        <div className="App">
  
          <h2>Client Auth Project</h2>
  
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
            <li>
              {isLoggedIn && <Link to='/friends'>Friends</Link>}
            </li>
          </ul>
  
          <Switch>
            <PrivateRoute exact path='/friends' component={Friends}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Login}/>
          </Switch>
  
        </div>
      </Router>
  );
}

export default App;
