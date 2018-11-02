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
    this.state = { isLoggedIn: false, currUser: 'erikhoy' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin (event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleLogout () {
    this.setState({ isLoggedIn: false });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Router>
         <div>
          <Navigation action={this.handleLogout} />
          <Redirect to='/UserProfilePage' />
           <Switch>
             <Route exact path="/UserProfilePage" component={props => <UserProfilePage currUser={this.state.currUser}/>} />
             <Route path="/RR" component={props => <Recognitions page={'RR'} username={this.state.currUser} />} />
             <Route path="/RS" component={props => <Recognitions page={'RS'} username={this.state.currUser} />} />
           </Switch>
         </div>

        </Router>
      );
    };

    return (
      <Router>
        <div>
        <Route exact path="/" render={ (props) => <Login action={this.handleLogin} /> }/>
        <Route exact path="/logout" render={ (props) => <Logout action={this.handleLogin} /> }/>
      </div>
      </Router>
    );
  }
}

export default App;
