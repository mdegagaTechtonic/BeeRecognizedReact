import React, { Component } from 'react';
import ShowMore from 'react-show-more';
import ListItem from './ListItem.js';

export class DisplayList extends React.Component {
  listRecognitions(arr) {
      return (<ListItem name={arr.name} />);
  }

//logout Component
// class DisplayList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numberOfBeesToGive: 5,
//       MessageAlert: false,
//     };
//   }
//
//   listRecognitions(arr) {
//     return (<ListItem name={arr.name} />);
//   }

  render () {
    return (
      <div className="row">
        {this.props.responses.map(this.listRecognitions)}
      </div>
      // <nav className='flex-item row-flex navbar-fixed-right'>
      //   <div className='list-group-item list-group-item-action flex-column align-items-start'>
      //     <div className='d-flex w-100 justify-content-between'>
      //       <h3 className='mb-1'>Recognition Received</h3>
      //     </div>
      //   </div>
      //   {this.props.recognitions.map(this.listRecognitions)}
      // </nav>
      // <h1>test</h1>
      // <ListItem />
    );
  }
}

// export default DisplayList;
