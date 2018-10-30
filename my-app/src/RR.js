import React, { Component } from 'react';

//logout Component
class RecognitionReceived extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterResponses: [],
    };
  }
  //renders everything after the navbar
  render () {
    return (
      <h1>testing RR</h1>
    );
  }
}

export default RecognitionReceived;


// import React from 'react';
//
// //logout Component
// const RR = () => {  return ( <body class="flex-container">
//     {/* <header>
//       <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border border-dark border-top-0 border-left-0 border-right-0">
//         <a class="navbar-br/and" href="userProfile.html"><img src="images/demoBee2.png" width="30px"> BeeRecognized</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <a class="nav-link" href="userProfile.html">Home<span class="sr-only">(current)</span></a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="recognitionSent.html">Recognition Sent</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="recognitionReceived.html">Recognition Received</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="logout.html">Logout</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header> */}
//
//     {/* <script>
//       $(function () {
//         //$('[data-toggle="tooltip"]').tooltip()
//       })
//     </script> */}
//
//   </body>);
// }
//
// export default RR;
