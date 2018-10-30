import React, { Component } from 'react';
import './App.css';

//
import UserProfilePage from './UserProfilePage';
import ReceivedRecognition from './RR';
import recognitionSent from './RS';
import Logout from './logout';
import login from './login'

// import route Components here
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
    this.state = {isLoggedIn: true};
  }
  render() {

    // let button;
    if (this.state.isLoggedIn) {
      //if user logged in display nav bar
      return (
        <Router>
          <div className="App">
            <div className="container">
              <ul>
                <li><Link to="/UserProfilePage">User Profile Page</Link></li>
                <li><Link to="/RR">RR</Link></li>
                <li><Link to="/RS">RS</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
              <hr/>
              <Switch>
               {/* <Route exact path="/UserProfilePage" component={UserProfilePage} /> */}
                <Route path="/RR" component={ReceivedRecognition} />
               <Route path="/userProfilePage" component={ReceivedRecognition} />
               {/* <Route path="/RS" component={RS} />
               <Route path="/logout" component={Logout} /> */}
              </Switch>
            </div>
          </div>
        </Router>);

      // button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      // return (<Route path='/login' component={login}/>);
      return (<Router><Route path='/login' component={login}/></Router>);
      {/* // return (<div><h1>Hello World!</h1>
      // <h1>Hello World!</h1></div>); //current log in page
      //else stay on log in page --- show message for why not logged in
      // button = <LoginButton onClick={this.handleLoginClick} />; */}
    }

  }
}

export default App;
