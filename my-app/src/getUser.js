import React from 'react';

var datalist = [
  'EgorY',
  'erikhoy',
  'ashley.elder',
  'JasonDang',
  'BrettGoers',
  'kyle.brothis',
  'ShambreSW',
  'MerryD',
];

function SelectInput(props) {
  if (props.userPage) {
    return <input type="text" list="browsers" className="form-control rounded border border-secondary" placeholder="Username" name="receiver" list='data' ref={input => props.method(input)}/>;
  } else {
    return <input className='mt-2' type='text' list='data' onChange={props.onChange} />;
  }
}

export const GetUser = (props) => {
  return (
    <span>
      <SelectInput userPage={props.userPage} method={props.method} onChange={props.onChange}/>
        <datalist id='data'>
        {datalist.map((item) => <option value={item} />)}
      </datalist>
    </span>
  );
};

export default GetUser;
