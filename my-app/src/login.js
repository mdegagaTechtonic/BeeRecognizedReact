import React from 'react';

const login = () => {
  return (  <html lang="en" dir="ltr">
  <body class="flex-container content">
      <main class="flex-grow">
        <div class="container-fluid">
          <div class="row justify-content-around my-auto mx-1">
            <div class="col-10 col-sm-7 col-md-7 col-lg-5 col-xl-4 bg-white border border-dark rounded p-4 mt-5">
              <h1 class="text-center">BeeRecognized</h1>
              <div class="img text-center">
                <img id="img" src="images/bee.png" width="50"/>
              </div>
              <div class="text-center my-5">
                <a href="#"><img src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" id ="slack"/></a>
              </div>
              <div id="link" class="text-center mt-0">
                <a href="https://slack.com">If you don't have Slack account, click here.</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    <script src="js/login.js"></script>
  </body>
</html>);
};

export default login;
