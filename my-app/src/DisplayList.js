import React from 'react';
import ListItem from './ListItem.js';
import ShowMore from 'react-show-more';

export const DisplayList = (props) => {
console.log(props);
console.log(props.page);
  if (props.page === 'RR') {
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
  } else if (props.page === 'SB') {
    return (
      props.recognitions.map((recognition) => {
        return (
          <ShowMore
            lines={5}
            more='Show more'
            less='Show less'
            anchorClass=''
          >
            <ListItem
              name={ recognition.sender }
              avatar={ recognition.avatarSender }
              date={ recognition.date }
              message={ recognition.message }
            />
          </ShowMore>
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
