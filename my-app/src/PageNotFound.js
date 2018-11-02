import React, { Component } from 'react';

//logout Component
class PageNotFound extends React.Component {
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
              <p>404 Error, page does not exist, Sorry no bees found!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
