
function Recognition(avatarSender, avatarReceiver, sender, receiver, beesToGive, date, message)
{
this.avatarSender = avatarSender;
this.avatarReceiver = avatarReceiver;
this.sender = sender;
this.receiver = receiver;
this.beesToGive = beesToGive;
this.date = date;
this.message = message;
};


export default class Filter {
  constructor() {
    //let receivedRecognition = getAllRecognitionReceived();
  };

  getAllRecognitionReceived() {
    var receivedRecognition = [];

    let r1 = new Recognition("avatars/kyle.brothis.png", "avatars/ashley.elder.png", "kyle.brothis", "ashley.elder", 2, "10/2/2018", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

    let r2 = new Recognition("avatars/ashley.elder.png", "avatars/MerryD.png", "ashley.elder", "MerryD", 2, "06/11/2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    receivedRecognition.push(r1);
    receivedRecognition.push(r2);

    return receivedRecognition;
  };
}

//module.exports = Filter;
//export default Filter;





// import React from 'react'
// //import Calendar from 'react-calendar';
// import DatePicker from 'react-date-picker'
//
// export const Filter = (props) => {
//   return (
//     <div>
//       //<DatePicker onChange={props.onChange} value={props.date}/>
//       //<DatePicker />
//     </div>
//   );
// };
