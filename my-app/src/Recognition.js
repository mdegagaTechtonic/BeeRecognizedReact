import React, { Component } from 'react';
import DisplayList from './DisplayList.js';

//logout Component
class Recognition extends React.Component {
  constructor(props) {
    super(props);

    // };
  }

  //renders everything after the navbar
  render () {
    return (
      // <h1>test</h1>
      <DisplayList />
    );
  }
}

export default Recognition;
