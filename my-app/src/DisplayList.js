import React from 'react';
import ListItem from './ListItem.js';

export const DisplayList = (props) => {
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
};

export default DisplayList;
