import React, { Component } from 'react';
import Filter from './filter.js';
import DatePicker from 'react-date-picker';
import Recognition from './mockDB';
import DisplayList from './DisplayList';
import BeesReceived from './Bees/BeesReceived';
import BeesToGive from './Bees/BeesToGive';
import ShowMore from 'react-show-more';
import GetUser from './getUser';
import { getAllRecognitionReceived, getRecentRecognition, getAllRecognitionSent } from './utils';

class Recognitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      filteredArr: [],
      beginDate: new Date(),
      endDate: new Date(),
      userSelected: '',
    };

    this.page = props.page;
    this.username = props.username;
    this.recognitionObj = new Filter();
    let db = JSON.parse(localStorage.getItem('db'));
    console.log(db);

    //state filteredArr will initially be set to received or sent recognitions depending on app page
    if(props.page == 'RR') {
      this.allRecognitionsArr = getAllRecognitionReceived(db, this.username);
    } else if (props.page == 'RS'){
      this.allRecognitionsArr = getAllRecognitionSent(db, this.username);
    }
    else {
      this.allRecognitionsArr= getRecentRecognition(db, this.username);
    }
    this.displayAllRecognition();
  }

  displayAllRecognition = () => {
    this.state.filteredArr = this.allRecognitionsArr;  //work around because neither following doesn't work
    //this.setState({filteredArr: this.allRecognitionsArr});
    //this.setState({filteredArr: this.allRecognitionsArr}, function() {
    // });
  };

  //save username and begin & end date to state for search
  onChangeBeginDate = beginDate => this.setState({beginDate: beginDate});
  onChangeEndDate = endDate => this.setState({endDate: endDate});
  onChangeGetUser = (e) => this.setState({userSelected: e.target.value.toString()});

  onFilterButton = (e) => {
    this.filter(this.page);
  };

  //this is where filter logic will happen and filteredArr state will be set
  filter(pageFlag) {

    //populate datalist with usernames when slack API is finished
    //getUserNames();
    console.log(this.state.userSelected);

    var filteredArr = this.recognitionObj.filterResults(pageFlag, this.state.userSelected, this.state.beginDate, this.state.endDate, this.allRecognitionsArr);
    // var filteredArr = Filter.filterResults(pageFlag, this.state.userSelected, this.state.beginDate, this.state.endDate, this.allRecognitionsArr);


    if (filteredArr.length > 0) {
      this.setState({ filteredArr: filteredArr });
      //because setState is async, providing a callback waits for state to be updated=
      // this.setState({filteredArr: filteredArr}, function() {
      //   console.log(this.state.filteredArr);
      //   });
    } else {
      var notFoundObj = new Recognition('avatars/nobody-avatar.png', 'avatars/nobody-avatar.png', '', ' ', 0, ' ', '0 results found.');
      this.setState({ filteredArr: [notFoundObj] });
    }
  };


  render() {

    // static label for username input datalist
    let label = '';

    // var recognitionsArray = [];
    var recognitionsArray = JSON.parse(localStorage.getItem('db'));

    // var datalist = ['Egor Y', 'erikhoy', 'ashley.elder', 'Jason Dang', 'Brett Goers', 'kyle.brothis', 'Shambre SW', 'MerryD'];

    require('./calendar.gif');
    var count = this.allRecognitionsArr.length;
    let calendarIco = './calendar.gif';
    let header = '';
    if (this.props.page === 'RR') {
      header = this.username + "'s Recognition Received";
      label = 'Received from';
    } else {
      header = this.username + "'s Recognition Sent";
      label = 'Sent to';
    }

    return (
      <div className='bg-white border border-dk mx-5 rounded p-3'>
        <h1 className='heading mr-3'>{header}</h1>
        <BeesReceived bees={count} page={this.props.page}/>
        <img src="images/bee.png" width="30"/>
        <div className='d-flex flex-row flex-wrap'>
          <div className='p-2'>
            <label className='mr-2'>{label}</label>
            {/* <GetUser listusers={datalist} onChange={this.onChangeGetUser}/> */}
            <GetUser onChange={this.onChangeGetUser}/>
          </div>
          <div className='p-2'>
            From
            <DatePicker
              className='p-2'
              onChange={this.onChangeBeginDate}
              value={this.state.beginDate}
              clearIcon={null}
            />
            To
            <DatePicker
              className='p-2'
              onChange={this.onChangeEndDate}
              value={this.state.endDate}
              clearIcon={null}
            />
          </div>
          <div className='p-3'>
            <button className='btn-info' onClick={this.onFilterButton}>Filter</button>
          </div>
          <DisplayList recognitions={this.state.filteredArr} page={this.page} />
        </div>
      </div>

    );
  };
};

export default Recognitions;
