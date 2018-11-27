import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
//logout Component
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="row justify-content-around my-auto mx-1">
        <div className="col-10 col-sm-7 col-md-7 col-lg-5 col-xl-4 bg-white border border-dark rounded p-4 mt-5">
          <h1 className="text-center">BeeRecognized</h1>
          <div className="img text-center">
            <img id="img" src="images/bee.png" width="50"/>
            <div class="text-center my-5">
              <p>Thank you for spreading the bees</p>
              <Link to="/">Share more?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;
