import React, { Component } from 'react';
import './App.css';

import UserProfilePage from './UserProfilePage';
import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';
import Navigation from './Navigation';

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
         <div>
          <Navigation />
           <Switch>
             <Route exact path="/UserProfilePage" component={props => <UserProfilePage page={'RR'} />} />
             <Route path="/RR" component={props => <Recognitions page={'RR'} />} />
             <Route path="/RS" component={props => <Recognitions page={'RS'} />} />
             <Route path="/logout" component={Logout} />
           </Switch>
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
