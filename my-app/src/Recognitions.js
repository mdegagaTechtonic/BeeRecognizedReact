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

    // console.log(allRecognitions.getAllRecognitionReceived());
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
    // var recognitionsArray = [];
    var recognitionsArray = JSON.parse(localStorage.getItem('db'));
    var datalist = ['test', 'bill', 'egor'];

    var recognitionSentArray = [
      {
        sender: 'Ashley',
        avatarSender: 'avatars/ashley.elder.png',
        receiver: 'Kyle',
        avatarReceiver: 'avatars/kyle.brothis.png',
        beesToGive: 2,
        date: '10/31/18',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
      },
      {
        sender: 'Brett',
        avatarSender: 'avatars/BrettGoers.png',
        receiver: 'Ashley',
        avatarReceiver: 'avatars/ashley.elder.png',
        beesToGive: 3,
        date: '10/29/18',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
      },
    ];
    var recognitionReceivedArray = [
      {
        sender: 'Erik',
        avatarSender: 'avatars/erikhoy.png',
        receiver: 'Merry',
        receiverAvatar: 'avatars/MerryD.png',
        beesToGive: 4,
        date: '10/25/18',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
      },
      {
        sender: 'Egor',
        avatarSender: 'avatars/Egor.png',
        receiver: 'Jason',
        receiverAvatar: 'avatars/JasonDang.png',
        beesToGive: 1,
        date: '10/23/18',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu risus. Praesent consequat mollis dolor, eu tristique neque scelerisque egestas.',
      },
    ];
    require('./calendar.gif');

    let calendarIco = './calendar.gif';
    if (this.props.page == 'RR') {
      label = 'Received from';
      // recognitionsArray = recognitionReceivedArray;
      recognitionsArray = recognitionsArray.slice(0,(recognitionsArray.length/2));

    } else {
      label = 'Sent to';
      // recognitionsArray = recognitionSentArray;
      recognitionsArray = recognitionsArray.slice((recognitionsArray.length/2), recognitionsArray.length-1);
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
        <DisplayList recognitions={recognitionsArray} />
      </div>

      //rendering of filtered recognitions by calling display component and passing down filteredArr
    );
  };
};

export default Recognitions;
