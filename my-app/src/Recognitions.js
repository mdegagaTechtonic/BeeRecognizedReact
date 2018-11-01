import React, { Component } from 'react';
import Filter from './filter.js';
import DisplayList from './DisplayList.js';
import DatePicker from 'react-date-picker';
import GetUser from './getUser.js';
import Recognition from './mockDB';

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
    //state filteredArr will initially be set to mockdb
    this.recognitionObj = new Filter();
    let db = JSON.parse(localStorage.getItem('db'));
    console.log(db);

    if(props.page == 'RR') {
      this.allRecognitionsArr = this.constructor.getAllRecognitionReceived(db);
    }else {
      this.allRecognitionsArr = this.constructor.getAllRecognitionSent(db);
    };
    this.displayAllRecognition();
  }

  displayAllRecognition = () => {
    this.state.filteredArr = this.allRecognitionsArr;  //work around because neither following doesn't work
    //this.setState({filteredArr: this.allRecognitionsArr});
    //this.setState({filteredArr: this.allRecognitionsArr}, function() {
    // });
  };

  static getAllRecognitionReceived(db) {
    var username = 'MerryD';
    var receivedRecognition = [];
    for (var i = 0; i < db.length; i++) {
      if (db[i].receiver.toLowerCase() === username.toLowerCase()) {
        receivedRecognition.push(db[i]);
      }
    }
    return receivedRecognition;
  }

  static getRecentRecognition(db) {
    var received = this.getAllRecognitionReceived(db);

    if (received.length > 5) {
      var recentFive = received.slice(0, 5);
      return recentFive;
    }
    if (received.length <= 5) {
      return received;
    }
  };

  static getAllRecognitionSent(db) {
    var username = 'MerryD';
    var sentRecognition = [];
    for (var i = 0; i < db.length; i++) {
      if (db[i].sender.toLowerCase() === username.toLowerCase()) {
        sentRecognition.push(db[i]);
      }
    }
    return sentRecognition;
  };

  onChangeBeginDate = beginDate => this.setState({beginDate: beginDate});
  onChangeEndDate = endDate => this.setState({endDate: endDate});
  onChangeGetUser = (e) => this.setState({userSelected: e.target.value.toString()});

  //this is where filter logic will happen and filteredArr state will be set
  onFilterButton = (e) => {
    this.filter('RR');
  }

  filter(pageFlag) {

    //populate datalist with usernames when slack API is finished
    //getUserNames();

    //var filteredArr = this.recognitionObj.filterResults(pageFlag, this.state.userSelected, this.state.beginDate, this.state.endDate, this.allRecognitionsArr);
    var filteredArr = this.recognitionObj.filterResults(pageFlag, this.state.userSelected, this.state.beginDate, this.state.endDate, this.allRecognitionsArr);

    if(filteredArr.length>0) {
      this.setState({filteredArr: filteredArr});
          //because setState is async, providing a callback waits for state to be updated=
           // this.setState({filteredArr: filteredArr}, function() {
           //   console.log(this.state.filteredArr);
           //   });
      } else {
        var notFoundObj = new Recognition('',' ','',' ',0,' ','0 results found.');
        this.setState({filteredArr: [notFoundObj]});
      }
    };


  render() {

    // static label for username input datalist
    let label = '';

    // var recognitionsArray = [];
    var recognitionsArray = JSON.parse(localStorage.getItem('db'));
    var datalist = ['test', 'bill', 'egor'];

    require('./calendar.gif');

    let calendarIco = './calendar.gif';
    let header = '';
    if (this.props.page == 'RR') {
      header = 'Recognition Received';
      label = 'Received from';

      // recognitionsArray = recognitionReceivedArray;
      //recognitionsArray = recognitionsArray.slice(0,(recognitionsArray.length/2));
    } else {
      header = 'Recognition Sent';
      label = 'Sent to';
      // recognitionsArray = recognitionSentArray;
      //recognitionsArray = recognitionsArray.slice((recognitionsArray.length/2), recognitionsArray.length-1);
    }

  return (
    <div className='bg-white border border-dk mx-5 rounded p-3'>
      <h1 className='heading'>{header}</h1>
      <div className='d-flex flex-row flex-wrap'>

        <div className='p-2'>
          <label className='mr-2'>{label}</label>
          <GetUser listusers={datalist} onChange={this.onChangeGetUser}/>
        </div>
        <div className='p-2'>
          From
          <DatePicker
            className='p-2'
            onChange={this.onChangeBeginDate}
            value={this.state.beginDate}
            clearIcon={null}
            calendarIcon={calendarIco}
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
      </div>
        <DisplayList recognitions={this.state.filteredArr} page={this.page}/>
    </div>
      //rendering of filtered recognitions by calling display component and passing down filteredArr
    );
  };
};

export default Recognitions;
//<div className='d-flex flex-row flex-wrap mx-5 rounded bg-white border border-dk'>
//<div className='d-flex flex-row flex-wrap mx-5 rounded bg-white border border-dk'>
