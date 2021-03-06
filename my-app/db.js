var mongoose = require('mongoose');
const User = require('./client/src/models/User');


import 'dotenv/config';
var mongoose = require('mongoose');

// Import express and request modules
var express = require('express');
var request = require('request');

// Store our app's ID and Secret. These we got from Step 1.
// For this tutorial, we'll keep your API credentials right here. But for an actual app, you'll want to  store them securely in environment variables.
var clientId = '140972670802.437996622916';
var clientSecret = 'a72df861e5afd8e0d225d4acf53af4cf';

// Instantiates Express and assigns our app variable to it
var app = express();


// Again, we define a port we want to listen to
const PORT=4390;

// Lets start our server
app.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Example app listening on port " + PORT);
});


// This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
app.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
});

// This route handles get request to a /oauth endpoint. We'll use this endpoint for handling the logic of the Slack oAuth process behind our app.
app.get('/oauth', function(req, res) {
  console.log('called oauth path');
    // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        // If it's there...

        // We'll do a GET call to Slack's `oauth.access` endpoint, passing our app's client ID, client secret, and the code we just got as query parameters.
        request({
            url: 'https://slack.com/api/oauth.access', //URL to hit
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
            method: 'GET', //Specify the method

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
              const {name, image_24, email} = JSON.parse(body).user;
              console.log('name',name,'email',email);
              User.create({
                firstName: name,
                lastName: name,
                avatar: image_24,
                password: 'password',
                email: email
              });
                //res.json(body);
            }
        })
    }

});

mongoose.connect('mongodb://student:password1@ds149593.mlab.com:49593/beerecognized')

// Import express and request modules
// var express = require('express');
// var request = require('request');
//
// // Store our app's ID and Secret. These we got from Step 1.
// // For this tutorial, we'll keep your API credentials right here. But for an actual app, you'll want to  store them securely in environment variables.
//
// // Instantiates Express and assigns our app variable to it
// var app = express();
//
//
// // Again, we define a port we want to listen to
// const PORT=3000;
//
// // Lets start our server
// app.listen(PORT, function () {
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Example app listening on port " + PORT);
// });
// //go to http://localhost:3000/auth
// app.get('/auth', (req, res) =>{
//   console.log('called auth');
//    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
//     //res.sendFile(__dirname + '/add_to_slack.html')
// })
// //go to http://localhost:3000/auth/redirect
// app.get('/auth/redirect', (req, res) =>{
//   console.log('re query code',req.query.body);
//     // var options = {
//     //     uri: 'https://slack.com/api/oauth.access?code='
//     //         +req.query.code+
//     //         '&client_id='+process.env.CLIENT_ID+
//     //         '&client_secret='+process.env.CLIENT_SECRET+
//     //         '&redirect_uri='+process.env.REDIRECT_URI,
//     //     method: 'GET'
//     // }
//     var options = {
//         uri: 'https://slack.com/api/oauth.access?code='
//             +'140972670802.488885550083.d36d75a20f19546bea00af9f65e244728859c0d7afa39c0818924e93cb909ba6'+
//             '&client_id='+'140972670802.437996622916'+
//             '&client_secret='+'a72df861e5afd8e0d225d4acf53af4cf'+
//         method: 'GET'
//     }
//     console.log(options.uri);
//     request(options, (error, response, body) => {
//         var JSONresponse = JSON.parse(body)
//         if (!JSONresponse.ok){
//             console.log(JSONresponse)
//             res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
//         }else{
//             console.log(JSONresponse)
//             res.send("Success!")
//         }
//     })
// })
//
//
// // This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
// // app.get('/', function(req, res) {
// //   console.log(res);
// //     res.send('bee recognized is working! Path Hit: ' + req.url);
// // });
// //
// // // This route handles get request to a /oauth endpoint. We'll use this endpoint for handling the logic of the Slack oAuth process behind our app.
// // app.get('/oauth', function(req, res) {
// //   console.log(res);
// //     // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
// //     if (!req.query.code) {
// //         res.status(500);
// //         res.send({"Error": "Looks like we're not getting code."});
// //         console.log("Looks like we're not getting code.");
// //     } else {
// //         // If it's there...
// //
// //         // We'll do a GET call to Slack's `oauth.access` endpoint, passing our app's client ID, client secret, and the code we just got as query parameters.
// //         request({
// //             url: 'https://slack.com/api/oauth.access', //URL to hit
// //             qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
// //             method: 'GET', //Specify the method
// //
// //         }, function (error, response, body) {
// //           console.log(body);
// //             if (error) {
// //                 console.log(error);
// //             } else {
// //               console.log(body);
// //                 res.json(body);
// //
// //             }
// //         })
// //     }
// // });
//
// // Route the endpoint that our slash command will point to and send back a simple response to indicate that ngrok is working
// // app.post('/command', function(req, res) {
// //     res.send('BeeRecognized is running!');
// // });
