import React from 'react';
var classNames = require( 'classnames/bind' );
var Sentiment = require('sentiment');

export default function MessageConfirmation (numberOfBeesToGive, receiver, message) {
  const styles = {
    'alert': true,
    'alert-danger': true,
    'alert-success': true,
  };
  const sentiment = new Sentiment();

  let text = '';

  let id = 'danger';

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
    case sentiment.analyze(message).comparative <= 0.5:
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
  return <p className={classNames(styles)} role="alert" id={id}>{text}</p>;
}
