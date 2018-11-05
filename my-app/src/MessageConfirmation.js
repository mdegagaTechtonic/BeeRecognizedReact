import React from 'react';
var classNames = require( 'classnames/bind' );

export default function MessageConfirmation (numberOfBeesToGive, receiver, message) {
  const styles = {
    'alert': true,
    'alert-danger': true,
    'alert-success': true,
  };

  let text = '';
  
  let id = 'danger';

  switch(true) {
    case numberOfBeesToGive <= 0:
    text = 'Oh no, you have no bees left to give! They are on vacation, come back later.';
    styles['alert-success'] = false;
      break;
    case !receiver && !message:
    text = 'Please enter in a person and message before submitting.';
    styles['alert-success'] = false;
      break;
    case !receiver:
    text = 'Please enter in a person you would like to send recognition to.';
    styles['alert-success'] = false;
      break;
    case !message:
    text = 'Please provide a message.';
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
