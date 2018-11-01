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

    //state filteredArr will initially be set to mockdb
    let allRecognitions = new Filter();
    let db = JSON.parse(localStorage.getItem('db'));
    //if(props.page == 'RR') {
      this.allRecognitionsArr = this.recognitionObj.getAllRecognitionReceived();
    //}else {
      //this.allRecognitionsArr = this.recognitionObj.getAllRecognitionSent();
    //};
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

  static getAllRecognitionSent(db){
    var username = 'MerryD';
    var sentRecognition = [];
    for (var i = 0; i < db.length; i++) {
      // console.log(i);
      // console.log(db[i].sender);
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

    // var recognitionSentArray = [
    //   {
    //     sender: 'Ashley',
    //     avatarSender: 'avatars/ashley.elder.png',
    //     receiver: 'Kyle',
    //     avatarReceiver: 'avatars/kyle.brothis.png',
    //     beesToGive: 2,
    //     date: '10/31/18',
    //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
    //   },
    //   {
    //     sender: 'Brett',
    //     avatarSender: 'avatars/BrettGoers.png',
    //     receiver: 'Ashley',
    //     avatarReceiver: 'avatars/ashley.elder.png',
    //     beesToGive: 3,
    //     date: '10/29/18',
    //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
    //   },
    // ];
    // var recognitionReceivedArray = [
    //   {
    //     sender: 'Erik',
    //     avatarSender: 'avatars/erikhoy.png',
    //     receiver: 'Merry',
    //     receiverAvatar: 'avatars/MerryD.png',
    //     beesToGive: 4,
    //     date: '10/25/18',
    //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
    //   },
    //   {
    //     sender: 'Egor',
    //     avatarSender: 'avatars/Egor.png',
    //     receiver: 'Jason',
    //     receiverAvatar: 'avatars/JasonDang.png',
    //     beesToGive: 1,
    //     date: '10/23/18',
    //     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
    //   },
    // ];
    require('./calendar.gif');

    let calendarIco = './calendar.gif';
    if (this.props.page == 'RR') {
      label = 'Received from';
      // recognitionsArray = recognitionReceivedArray;
      //recognitionsArray = recognitionsArray.slice(0,(recognitionsArray.length/2));

    } else {
      label = 'Sent to';
      // recognitionsArray = recognitionSentArray;
      //recognitionsArray = recognitionsArray.slice((recognitionsArray.length/2), recognitionsArray.length-1);
    }

    return (

      // rendering of filter component
      <div className='d-flex flex-row flex-wrap mx-5 rounded bg-white border border-dk'>
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
        <DisplayList recognitions={this.state.filteredArr} />
      </div>

      //rendering of filtered recognitions by calling display component and passing down filteredArr
    );
  };
};

export default Recognitions;
