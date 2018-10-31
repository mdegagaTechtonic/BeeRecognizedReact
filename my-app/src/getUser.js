import React from 'react';

export const GetUser = (props) => {
  return (
    <span>
      <input className='mt-2' type='text' list='data' onChange={props.onChange} />
        <datalist id='data'>
        {props.listusers.map((item) => <option value={item} />)}
      </datalist>
    </span>
  );
};

export default GetUser;
