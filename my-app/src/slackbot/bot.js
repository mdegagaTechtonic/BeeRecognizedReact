//https://codehangar.io/how-to-build-a-slack-bot-integration-with-node/
//connects bot to slack

const RtmClient  = require('@slack/client').RtmClient;//messaging client to send and receive messages
const WebClient  = require('@slack/client').WebClient;//for api calls that don’t have to do with sending or receiving messages in real time
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;//events that the rtm client will interpret and respond to

const bot_token = 'xoxb-140972670802-488169417107-Ld6hI9C3IXE2UZbxguvcIPSI';
const rtm       = new RtmClient(bot_token);
const web       = new WebClient(bot_token);

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
    if (message.type === 'message' && message.text) {//make sure that the message is of ‘message’ type and contains text
        console.log(message.text);
        rtm.sendMessage('You said: ' + message.text, message.channel);
    }
}
//.on attaches an event handler to the real time message client
//RTM_EVENTS.MESSAGE indicates that a message was received
//handleRtmMessage(message) allows you to process and respond to that message
rtm.start();//starts the slackbot
