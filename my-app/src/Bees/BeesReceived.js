import React from 'react';

export const BeesReceived = (props) => {
  return (
    <span className='badge badge-pill badge-success align-self-center'>Total:&nbsp;{props.bees}</span>
  );
};

export default BeesReceived;
