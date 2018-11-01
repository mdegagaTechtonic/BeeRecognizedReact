import React, { Component } from 'react';

import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';
import Recognition from './mockDB';
import DisplayList from './DisplayList';
import BeesReceived from './BeesReceived';
import BeesToGive from './BeesToGive';

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBeesToGive: 5,
      MessageAlert: false,
      numberOfBeesReceived: '10',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  handleSubmit (event) {
    //grab form info
    let r = new Recognition(`avatars/${this.props.currUser}`,`avatars/${this._receiver.value}`, this.props.currUser, this._receiver.value, this.state.numberOfBeesToGive, new Date(Date.now()).toDateString(), this._message.value);
    //grab local localStorage
    const db = JSON.parse(localStorage.getItem('db'));
    //maintains the chronological order of our db
    db.unshift(r);
    localStorage.setItem('db',(JSON.stringify(db)));
    this.clearForm();
    event.preventDefault();
  }

  clearForm () {
    this._receiver.value = '';
    this._message.value = '';
  }


  render () {
    var recognitionsArray = JSON.parse(localStorage.getItem('db'));
    var count = recognitionsArray.length;
    console.log(count);
    var lastFiveRecognition = Recognitions.getRecentRecognition(recognitionsArray);
    console.log(lastFiveRecognition);
    this.page = 'SB';
    // var userName = {this.state.currUser};
    // var user = {avatarReceiver: 'avatars/erikhoy.png', receiver: userName};

    return (
      <div className="container-fluid">
        <div className="row justify-content-around mt-5 mx-1">
          <div id="user-profile-main" className="bg-white col-12 col-md-5 col-lg-7 rounded border border-dark mb-2 p-4">
            {/* <!-- User Information --> */}
            <div id="user-info" className="pb-5">
              <h1>User Information</h1>
              <p>
                <img src="images/avatars/erikhoy.png" className="rounded mr-3" width="100px" align="left" id="avatar"/>
                <strong id="username">{this.props.currUser}</strong>
                <br/>
                <img src="images/bee.png" width="30"/> to give
                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Number of bees available to distribute">
                  <span className="badge badge-pill badge-primary" id="beesToGive">
                    {this.state.numberOfBeesToGive}
                  </span>
                </span>
                <br/>
                <img src="images/bee.png" width="30"/> received&nbsp;
                <span className="d-inline-block mr-2" tabIndex="0" data-toggle="tooltip" title="Number of bees received">
                  <span className="badge badge-pill badge-success" id="totalBeesReceived">
                    <BeesReceived bees={count} />
                  </span>
                </span>
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
              <form action="" method="" autocomplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group input-group-lg">
                  <label for="username">Select User to Recognize</label><br/>
                  <input type="text" list="br/owsers" className="form-control rounded border border-secondary" placeholder="Username" name="receiver" ref={input => this._receiver = input}/>
                    <datalist id="br/owsers"></datalist>
                </div>
                <div className="form-group input-group-lg">
                  <label for="message">Message</label><br/>
                  <textarea name="message" placeholder="Include a message here" className="form-control border border-secondary" rows="3" ref={textarea => this._message = textarea}></textarea>
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
              <DisplayList recognitions={lastFiveRecognition} page={this.page} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
