import React from 'react';
import UserProfilePage from './UserProfilePage';

const BeesToGive = (props) => {
  return (
    <span className="badge badge-pill badge-primary" id="beesToGive">{props.beesToGive}</span>
  );
};

export default BeesToGive;
