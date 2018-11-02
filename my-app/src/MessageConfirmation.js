import React from 'react';

export default function MessageConfirmation (numberOfBeesToGive) {
  if(numberOfBeesToGive > 0) {
    return (<p className="alert alert-success" role="alert" id="success">Thank you. Your recognition was sent.</p>);
  } else{
    return (<p className="alert alert-danger" role="alert" id="danger">Oh no, you have no bees left to give! They are on vacation, come back later.</p>);
  }
}
