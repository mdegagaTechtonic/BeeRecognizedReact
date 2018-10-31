import React from 'react';
import ListItem from './ListItem.js';

export const DisplayList = (props) => {
console.log(props);
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
};

export default DisplayList;
