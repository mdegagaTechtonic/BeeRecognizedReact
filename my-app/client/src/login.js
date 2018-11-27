import React from 'react';

class login extends React.Component {

  render () {
    if(window.location.origin !== "https://beerecognized-223717.appspot.com"){
    return (
      <div className="row justify-content-around my-auto mx-1">
        <div className="col-10 col-sm-7 col-md-7 col-lg-5 col-xl-4 bg-white border border-dark rounded p-4 mt-5">
          <h1 className="text-center">BeeRecognized</h1>
          <div className="img text-center">
            <img id="img" src="images/bee.png" width="50"/>
            <div className="text-center my-5">
              <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=140972670802.437996622916"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
            </div>
            <div id="link" className="text-center mt-0">
              <a href="https://slack.com">If you don't have a Slack account, click here.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (<div className="row justify-content-around my-auto mx-1">
      <div className="col-10 col-sm-7 col-md-7 col-lg-5 col-xl-4 bg-white border border-dark rounded p-4 mt-5">
        <h1 className="text-center">BeeRecognized</h1>
        <div className="img text-center">
          <img id="img" src="images/bee.png" width="50"/>
          <div className="text-center my-5">
            <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=140972670802.437996622916"><img onClick={this.props.action} alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
          </div>
          <div id="link" className="text-center mt-0">
            <a href="https://slack.com">If you don't have a Slack account, click here.</a>
          </div>
        </div>
      </div>
    </div>)
  };
}
}
export default login;


// onClick={this.props.action}
