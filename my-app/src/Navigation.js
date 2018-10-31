import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class Navigation extends React.Component {
  render () {return (<header>
      <nav className="navbar active navbar-expand-lg navbar-light bg-white fixed-top border border-dark border-top-0 border-left-0 border-right-0">
          <span className="navbar-brand"><img src="images/bee.png" width="30px"/> BeeRecognized</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/UserProfilePage" className="nav-link">Home</Link>
                {/* <a className="nav-link" href="userProfile.html">Home<span className="sr-only">(current)</span></a> */}
              </li>
              <li className="nav-item">
                <Link to="/RS" className="nav-link">Recognition Sent</Link>
                {/* <a className="nav-link" href="recognitionSent.html">Recognition Sent</a> */}
              </li>
              <li className="nav-item">
                <Link to="/RR" className="nav-link">Recognition Received</Link>
                {/* <a className="nav-link" href="recognitionReceived.html">Recognition Received</a> */}
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link" onClick={this.props.action}>Logout</Link>
                {/* <a className="nav-link" href="logout.html">Logout</a> */}
              </li>
            </ul>
          </div>
      </nav></header>
  );
}}
export default Navigation;
