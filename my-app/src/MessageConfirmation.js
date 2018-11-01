import React from 'react';

export default function MessageConfirmation (props) {

  if(props.bees > 0) {
    return (<p className="alert alert-success d-none" role="alert" id="success">Thank you. Your recognition was sent.</p>);
  } else{
    return (<p className="alert alert-danger d-none" role="alert" id="danger">Oh no, you have no bees left to give! They are on vacation, come back later.</p>);
  }
}
