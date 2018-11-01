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


function SelectInput (props) {
  console.log( 'in get user', props);
  if (props.userPage) {
   return <input type="text" list="br/owsers" className="form-control rounded border border-secondary" placeholder="Username" name="receiver" list='data' ref={input => props.method(input)}/>;
  }
  else {
  return <input className='mt-2' type='text' list='data' onChange={props.onChange} />;
}
}

export const GetUser = (props) => {
console.log(props);
  return (
    <span>
      {/* <input className='mt-2' type='text' list='data' onChange={props.onChange} /> */}
      <SelectInput userPage={props.userPage} method={props.method}/>
        <datalist id='data'>
        {/* {props.listusers.map((item) => <option value={item} />)} */}
        {datalist.map((item) => <option value={item} />)}
      </datalist>
    </span>
  );
};

export default GetUser;
