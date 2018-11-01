import React from 'react';

var datalist = [
  'Egor Y',
  'erikhoy',
  'ashley.elder',
  'Jason Dang',
  'Brett Goers',
  'kyle.brothis',
  'Shambre SW',
  'MerryD',
];

export const GetUser = (props) => {
  return (
    <span>
      <input className='mt-2' type='text' list='data' onChange={props.onChange} />
      <datalist id='data'>
        {/* {props.listusers.map((item) => <option value={item} />)} */}
        {datalist.map((item) => <option value={item} />)}
      </datalist>
    </span>
  );
};

export default GetUser;
