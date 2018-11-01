import React from 'react';

export const BeesReceived = (props) => {

let styleClass = '';
 if(props.page == 'RR' || props.page == 'UP') styleClass = 'badge badge-pill badge-success align-self-center';
 else styleClass = 'badge badge-pill badge-dark align-self-center';
  return (
    <span className={styleClass}>Total:&nbsp;{props.bees} </span>
  );
};

export default BeesReceived;
