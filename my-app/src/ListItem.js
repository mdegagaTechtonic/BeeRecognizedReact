import React from 'react';

export const ListItem = (props) => {
  return (
    <div className='list-group-item list-group-item-action flex-column align-items-start recognition'>
      <div className='d-flex w-100 justify-content-between'>
        <div>
          <img src={`images/avatars/${props.avatar}`} alt='slack user icon' className='userImage mr-2' width='100' />
          <br />
          <h5 className='mt-2 mb-2'>{props.name}</h5>
        </div>
        <div className='float-right'>
          <small className='text-muted mr-2 float-right'>{props.date}</small>
          <br />
          <p className='mt-1 mb-1 text-left'>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
