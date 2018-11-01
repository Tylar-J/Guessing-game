import React from 'react';

export default function Input(props) {
  const max = props.mode === 'Standard' ? 10 : 100
  return(
    <form onSubmit={props.onSubmit}>
      <input type="number" min="1" max={max} onChange={props.onChange}/>
      <input type="submit"/>
      <a href="/">Reset</a>
    </form>
  )
};