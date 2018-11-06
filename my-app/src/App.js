import React, { Component } from 'react';
import './App.css';

import UserProfilePage from './UserProfilePage';
import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';
import Navigation from './Navigation';
import Notfound from './PageNotFound';

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
    this.state = { isLoggedIn: false, currUser: 'erikhoy' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin (event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    sessionStorage.setItem('isLoggedIn', true);
    sessionStorage.setItem('currUser', this.state.currUser);
    localStorage.getItem('numberOfBeesToGive') ? console.log('Storage was already set') : localStorage.setItem('numberOfBeesToGive', 5);

  }

  handleLogout () {
    sessionStorage.clear();
    this.setState({ isLoggedIn: false });
  }

  render() {
    if (sessionStorage.getItem('isLoggedIn')) {
      if(window.location.pathname === '/logout') { this.handleLogout() }; //for cases when the user manually type in the logout in the url
      return (
        <Router>
         <div>
          <Navigation action={this.handleLogout} />
           <Switch>
             <Route exact path="/" component={props => <UserProfilePage currUser={this.state.currUser}/>} />
             <Route exact path="/RR" component={props => <Recognitions page={'RR'} username={this.state.currUser} />} />
             <Route exact path="/RS" component={props => <Recognitions page={'RS'} username={this.state.currUser} />} />
             <Route component={Notfound} />
           </Switch>
         </div>

        </Router>
      );
    };

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={ (props) => <Login action={this.handleLogin} /> }/>
            <Route exact path="/logout" component={Logout}/>
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
