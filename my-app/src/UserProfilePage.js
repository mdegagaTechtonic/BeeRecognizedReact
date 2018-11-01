import React, { Component } from 'react';

import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';
import Recognition from './mockDB';
import DisplayList from './DisplayList';

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBeesToGive: 5,
      MessageAlert: false,
    };
  }

  render () {
    var recognitionsArray = JSON.parse(localStorage.getItem('db'));
    var lastFiveRecognition = Recognitions.getRecentRecognition(recognitionsArray);
    console.log(lastFiveRecognition);

    return (
      <div className="container-fluid">
        <div className="row justify-content-around mt-5 mx-1">
          <div id="user-profile-main" className="bg-white col-12 col-md-5 col-lg-7 rounded border border-dark mb-2 p-4">
            {/* <!-- User Information --> */}
            <div id="user-info" className="pb-5">
              <h1>User Information</h1>
              <p>
                <img src="http://www.shades.org/assets/img/portrait_placeholder.jpg" className="rounded mr-3" width="100px" align="left" id="avatar"/><strong id="username">Username</strong><br/><img src="images/bee.png" width="30"/> to give <span className="d-inline-block" tabindex="0" data-toggle="tooltip" title="Number of bees available to distribute"><span className="badge badge-pill badge-primary" id="beesToGive"></span></span><br/>
                <img src="images/bee.png" width="30"/> received <span className="d-inline-block" tabindex="0" data-toggle="tooltip" title="Number of bees received"><span className="badge badge-pill badge-success" id="totalBeesReceived"></span></span>
              </p>
            </div>
            {/* <!-- Recognition Form --> */}
            <div id="message">
              <h1>Send Recognition</h1>
              {/* <!-- success/fail message --> */}
              <div className="none" id="alert">
                <p className="alert alert-success d-none" role="alert" id="success">Thank you. Your recognition was sent.</p>
                <p className="alert alert-danger d-none" role="alert" id="danger">Oh no, you have no bees left to give! They are on vacation, come back later.</p>
              </div>
              {/* <!-- recognition form --> */}
              <form action="" method="" autocomplete="off">
                <div className="form-group input-group-lg">
                  <label for="username">Select User to Recognize</label><br/>
                  <input type="text" list="br/owsers" className="form-control rounded border border-secondary" placeholder="Username" name="sender"/>
                    <datalist id="br/owsers"></datalist>
                </div>
                <div className="form-group input-group-lg">
                  <label for="message">Message</label><br/>
                  <textarea name="message" placeholder="Include a message here" className="form-control border border-secondary" rows="3"></textarea>
                </div>
                <div id="hiddenBeesToGive" className="form-group">
                  <input type="hidden" name="beesToGive"/>
                </div>
                <div className="form-group float-right">
                  <button type="submit" className="submit-button btn btn-primary" id="submit-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div id="sidebar" className="bg-white h-25 d-inline-block col-12 col-md-6 col-lg-4 rounded border border-dark mb-2 p-4">
            <nav className="flex-item row-flex navbar-fixed-right">
              <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h3 className="mb-1">Recognition Received</h3>
                </div>
              </div>
              <DisplayList recognitions={lastFiveRecognition} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
