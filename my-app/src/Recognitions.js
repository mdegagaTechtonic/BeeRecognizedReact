import React, { Component } from 'react';
import Filter from './filter.js';
import DisplayList from './DisplayList.js';
import DatePicker from 'react-date-picker';
import GetUser from './getUser.js';
import Recognition from './mockDB';

class Recognitions extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', filteredArr:[], beginDate: new Date(), endDate: new Date(), userSelected: ''};
    //state filteredArr will initially be set to mockdb
  }

  onChangeBeginDate = beginDate => this.setState({beginDate: beginDate});
  onChangeEndDate = endDate => this.setState({endDate: endDate});
  onChangeGetUser = (e) => this.setState({userSelected: e.target.value.toString()});

  //this is where filter logic will happen and filteredArr state will be set
  onFilterButton = (e) => {
    alert(this.state.userSelected);
    alert(this.state.beginDate);
    alert(this.state.endDate);
  }

  render() {

    // static label for username input datalist
    let label = '';
    var recognitionsArray = [];
    var datalist=['test','bill','egor'];
    var recognitionSentArray = [{ name: 'Ashley', avatar: 'ashley.elder.png', date: '10/31/18', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.' }, { name: 'Brett', avatar: 'BrettGoers.png', date: '10/29/18', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.' }];
    var recognitionReceivedArray = [{ name: 'Erik', avatar: 'erikhoy.png', date: '10/25/18', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.' }, { name: 'Egor', avatar: 'Egor.png', date: '10/23/18', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.' }];
    require('./calendar.gif');
    let calendarIco = './calendar.gif';
    if (this.props.page=='RR') {
      label = 'Received from';
      recognitionsArray = recognitionReceivedArray;
    } else {
      label = 'Sent to';
      recognitionsArray = recognitionSentArray;
    }
      return (

        // rendering of filter component
        <div className='d-flex flex-row flex-wrap'>
          <div className='p-2'>
            <label className='mr-2'>{label}</label>
            <GetUser listusers={datalist} onChange={this.onChangeGetUser}/>
          </div>
          <div className='p-2'>
            From
            <DatePicker className='p-2' onChange={this.onChangeBeginDate} value={this.state.beginDate} clearIcon={null} calendarIcon={calendarIco}/>
            To
            <DatePicker className='p-2' onChange={this.onChangeEndDate} value={this.state.endDate} clearIcon={null} />
          </div>
          <div className='p-3'>
            <button className='btn-info' onClick={this.onFilterButton}>Filter</button>
          </div>
          <DisplayList recognitions={recognitionsArray} />
        </div>

        //rendering of filtered recognitions by calling display component and passing down filteredArr
      );
  };
};

export default Recognitions;
