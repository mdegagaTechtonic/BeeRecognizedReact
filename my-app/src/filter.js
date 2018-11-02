
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

//   constructor() {
//     //let receivedRecognition = getAllRecognitionReceived();
//   };
//
// //begin unit testing code
//   getAllRecognitionReceived() {
//     var receivedRecognition = [];
//     let r1 = new Recognition("avatars/kyle.brothis.png", "avatars/ashley.elder.png", "kyle.brothis", "ashley.elder", 2, "10/2/2018", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
//     let r2 = new Recognition("avatars/ashley.elder.png", "avatars/MerryD.png", "ashley.elder", "MerryD", 2, "06/11/2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
//     receivedRecognition.push(r1);
//     receivedRecognition.push(r2);
//     return receivedRecognition;
//   };
//end unit testing code

  filterByName ( pageFlag, name, recognitionArr) {
    var filteredArr = recognitionArr.filter(function(obj) {
      if(pageFlag == 'RS')
        return obj.receiver.toLowerCase().search(name.toLowerCase())>=0;
      else {
        return obj.sender.toLowerCase().search(name.toLowerCase())>=0;
      }
    });
    return filteredArr;
  };


   filterByDateRange ( beginDate, endDate, recognitionArr) {
     var filteredArr = recognitionArr.filter(function(obj) {
       var dateObj = new Date(obj.date);
       if (dateObj>=beginDate && dateObj<=endDate) return obj;
     });
     return filteredArr;
   };


   filterResults( pageFlag, username, beginDate, endDate, recognitionArr ) {
     var filteredArr = [];
     switch (true) {
       //filter by username only
       //case (username.length>0 && beginDate.length<=0):
       case (username.length>0 && !beginDate):
         filteredArr = this.filterByName( pageFlag, username, recognitionArr );
         break;
       //filter by date range only
       case (username.length<=0 && beginDate !== null):
         filteredArr = this.filterByDateRange( beginDate, endDate, recognitionArr );
         break;
       //filter by both username and date range
       case (username.length>0 && beginDate !== null):
         var filteredUserName = this.filterByName( pageFlag, username, recognitionArr );
         var filteredDateRange = this.filterByDateRange( beginDate, endDate, recognitionArr );

         if(pageFlag=='RR')
           filteredArr = filteredDateRange.filter(function(obj,index) {return obj.sender.toLowerCase() == username.toLowerCase();});
        else
           filteredArr = filteredDateRange.filter(function(obj,index) {return obj.receiver.toLowerCase() == username.toLowerCase();});
        // if(pageFlag='RS')
        //   filteredArr = filteredDateRange.filter(function(obj,index) {return obj.receiver.toLowerCase() == filteredUserName[index].receiver.toLowerCase()});
        // else
        //   filteredArr = filteredDateRange.filter(function(obj,index) {return obj.sender.toLowerCase() == filteredUserName[index].sender.toLowerCase()});
        break;
      default: return [];
         break;
     };
     return filteredArr;
   };

}

//module.exports = Filter;
//export default Filter;
