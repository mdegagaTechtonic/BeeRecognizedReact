import React, { Component } from 'react';
import Filter from './filter.js';

import DatePicker from 'react-date-picker';
import GetUser from './getUser.js';

class Recognitions extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', beginDate: new Date(), endDate: new Date(), userSelected: ''};
  }

  onChangeBeginDate = beginDate => this.setState({beginDate: beginDate});
  onChangeEndDate = endDate => this.setState({endDate: endDate});
  onChangeGetUser = (e) => this.setState({userSelected: e.target.value.toString()});
  onFilterButton = (e) => {
    alert(this.state.userSelected);
    alert(this.state.beginDate);
    alert(this.state.endDate);
  }

  render() {
    let label = '';
    if(this.props.page=='RR') label = 'Received from';
    else label = 'Sent to'
    var datalist=['test','bill','egor'];
    require('./calendar.gif');
    let calendarIco = './calendar.gif';
      return (
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
        </div>
      );
  };
};

export default Recognitions;
