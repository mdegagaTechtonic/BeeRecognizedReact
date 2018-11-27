const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('./src/login');
});

//auth with slack
router.get('/slack', (req,res) => {
  //handle with passport
  res.send('logging in with slack');
})

//auth logout
router.get('/logout', (req,res) => {
  //handle with passport
  res.send('logging out');
})

//go to http://localhost:3000/auth/redirect
// app.get('/auth/redirect/:code', (req, res) =>{
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
//             '&client_secret='+'a72df861e5afd8e0d225d4acf53af4cf',
//             // '&redirect_uri='+'https://beerecognized-223717.appspot.com/',
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

module.exports = router;
