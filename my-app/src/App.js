import React, { Component } from 'react';
import './App.css';

import UserProfilePage from './UserProfilePage';
import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Router>
         <div className="App">
           <div className="container">
             <ul>
               <li><Link to="/UserProfilePage">User Profile Page</Link></li>
               <li><Link to="/RR">Recognition Received</Link></li>
               <li><Link to="/RS">Recognition Sent</Link></li>
               <li><Link to="/logout">Logout</Link></li>
             </ul>
             <hr/>
           <Switch>
             <Route exact path="/UserProfilePage" component={UserProfilePage} />
             <Route path="/RR" component={Recognitions} />
             <Route path="/RS" component={Recognitions} />
             <Route path="/logout" component={Logout} />
           </Switch>
           </div>

         </div>
        </Router>
      );
    };

    return (
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
