import React from 'react';
import ListItem from './ListItem.js';

export const DisplayList = (props) => {
console.log(props);
console.log(props.page);
  if (props.page === 'RR' || props.page === 'SB') {
    return (

      props.recognitions.map((recognition) => {
        return (
          <ListItem
            name={ recognition.sender }
            avatar={ recognition.avatarSender }
            date={ recognition.date }
            message={ recognition.message }
          />
        );
      })
    );
  } else {
    return (
      props.recognitions.map((recognition) => {
        return (
          <ListItem
            name={ recognition.receiver }
            avatar={ recognition.avatarReceiver }
            date={ recognition.date }
            message={ recognition.message }
          />
        );
      })
    );
  }
};

export default DisplayList;
