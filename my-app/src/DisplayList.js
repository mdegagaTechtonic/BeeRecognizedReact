import React from 'react';
import ListItem from './ListItem.js';

export const DisplayList = (props) => {
console.log(props);

  if (props.page === 'RR') {
    return (
      props.recognitions.map((recognition) => {
        return (
          <ListItem
            sender={ recognition.sender }
            avatarSender={ recognition.avatarSender }
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
            receiver={ recognition.receiver }
            avatarReceiver={ recognition.avatarReceiver }
            date={ recognition.date }
            message={ recognition.message }
          />
        );
      })
    );
  }
};

export default DisplayList;
