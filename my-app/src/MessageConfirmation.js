import React from 'react';
var classNames = require( 'classnames/bind' );
var Sentiment = require('sentiment');

export default function MessageConfirmation (numberOfBeesToGive, receiver, message, currUser) {
  const styles = {
    'alert': true,
    'alert-danger': true,
    'alert-success': true,
  };
  const sentiment = new Sentiment();
  //overwrite AFINN wordlist values with our own weights;
  let options = {
    extras: {
      'stupid': -10,
      'smart': 10,
      'test': 10,
      'hi': 10
    }
  };

  let text = '';

  let id = 'danger';
  console.log(sentiment.analyze(message));

  switch(true) {
    case !receiver && !message:
      text = 'Please enter in a person and message before submitting.';
      styles['alert-success'] = false;
      break;
    case !message:
      text = 'Please provide a message.';
      styles['alert-success'] = false;
      break;
    case !receiver:
      text = 'Please enter in a person you would like to send recognition to.';
      styles['alert-success'] = false;
      break;
    case receiver === currUser:
      text = 'You can send yourself recognition.';
      styles['alert-success'] = false;
      break;
    case sentiment.analyze(message,options).comparative <= 0.3:
      text = 'Please be nice today.';
      styles['alert-success'] = false;
      break ;
    case numberOfBeesToGive <= 0:
      text = 'Oh no, you have no bees left to give! They are on vacation, come back later.';
      styles['alert-success'] = false;
      break;
    default:
      text = 'Thank you. Your recognition was sent.';
      id = 'success';
      styles['alert-danger'] = false;
      break;
  }
  console.log(styles);
  return <p className={classNames(styles)} role="alert" id={id}>{text}</p>;
}
