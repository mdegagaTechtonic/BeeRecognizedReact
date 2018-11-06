import React, { Component } from 'react';

import Recognitions from './Recognitions';
import Logout from './logout';
import Login from './login';
import Recognition from './mockDB';
import DisplayList from './DisplayList';
import BeesReceived from './Bees/BeesReceived';
import BeesToGive from './Bees/BeesToGive';
import ShowMore from 'react-show-more';
import GetUser from './getUser';
import MessageConfirmation from './MessageConfirmation';
import MessageClear from './MessageClear';
import { getAllRecognitionReceived } from './utils';//destructuring, can put these 3 into one statement 
import { getRecentRecognition } from './utils';
import { getAllRecognitionSent } from './utils';

let alert;

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBeesToGive: localStorage.getItem('numberOfBeesToGive'),
      MessageAlert: false,
      numberOfBeesReceived: '10',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.targetInput = this.targetInput.bind(this);

  }

  handleSubmit (event) {
    //grab form info
    alert = MessageConfirmation(this.state.numberOfBeesToGive, this._receiver.value, this._message.value, this.props.currUser);
    if(alert.props.id === 'success') {//id sent from messageConfirmation
      let r = new Recognition(`avatars/${this.props.currUser}.png`, `avatars/${this._receiver.value}.png`, this.props.currUser, this._receiver.value, this.state.numberOfBeesToGive, new Date(Date.now()).toDateString(), this._message.value);
      //grab local localStorage
      const db = JSON.parse(localStorage.getItem('db'));
      //maintains the reverse chronological order of our db
      db.push(r);
      localStorage.setItem('db', (JSON.stringify(db)));
      this.clearForm();
      this.setState({ numberOfBeesToGive: --this.state.numberOfBeesToGive });//success message displays
      localStorage.setItem('numberOfBeesToGive', this.state.numberOfBeesToGive);
  } else {
    this.setState({ MessageAlert: true });//danger message displays
  }
    event.preventDefault();
    setTimeout(() => {alert = MessageClear(); this.setState({ MessageAlert: false })},3000);
  }

  clearForm () {
    this._receiver.value = '';
    this._message.value = '';
  }

  targetInput (currInput) {
    this._receiver = currInput;
  }

  render () {
    var db = JSON.parse(localStorage.getItem('db'));
    var allReceived = getAllRecognitionReceived(db, this.props.currUser);
    var lastFiveRecognition = getRecentRecognition(db, this.props.currUser);
    var allSent = getAllRecognitionSent(db, this.props.currUser);
    this.page = 'SB';

    return (
      <div className="container-fluid">
        <div className="row justify-content-around mt-5 mx-1">
          <div id="user-profile-main" className="bg-white col-12 col-md-5 col-lg-7 rounded border border-dark mb-2 p-4">
            {/* <!-- User Information --> */}
            <div id="user-info" className="pb-5">
              <h1>User Information</h1>
              <p>
                <img src={`images/avatars/${this.props.currUser}.png`} className="rounded mr-3" width="100px" align="left" id="avatar"/>
                <strong id="username">{this.props.currUser}</strong>
                <br/>
                <img src="images/bee.png" width="30"/> to give&nbsp;
                <span className="d-inline-block mr-2" tabIndex="0" data-toggle="tooltip" title="Number of bees available to distribute">
                  <span className="badge badge-pill badge-primary" id="beesToGive">
                    {this.state.numberOfBeesToGive}
                  </span>
                </span>
                <br/>
                <img src="images/bee.png" width="30"/> received&nbsp;
                <span className="d-inline-block mr-2" tabIndex="0" data-toggle="tooltip" title="Number of bees received">
                  <span className="badge badge-pill badge-success" id="totalBeesReceived">
                    <BeesReceived bees={allReceived.length} page="UP" />
                  </span>
                </span>
              </p>
            </div>
            {/* <!-- Recognition Form --> */}
            <div id="message">
              <h1>Send Recognition</h1>
              {/* <!-- success/fail message --> */}
              <div className="none" id="alert">
                {alert}
                {/* <MessageConfirmation bees={this.state.numberOfBeesToGive} /> */}
              </div>
              {/* <!-- recognition form --> */}
              <form action="" method="" autocomplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group input-group-lg">
                  <label for="username">Select User to Recognize</label><br/>
                    <GetUser onChange={this.onChangeGetUser} userPage={true} method={this.targetInput}/>
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
              <DisplayList recognitions={lastFiveRecognition} page={this.page} currUser={this.props.currUser}/>
            </nav>
            </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
