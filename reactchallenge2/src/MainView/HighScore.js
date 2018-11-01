import React from 'react';

export default function HighScore (props) {
  return(
    <p>{props.mode} High Score: {props.score}</p>
  )
};