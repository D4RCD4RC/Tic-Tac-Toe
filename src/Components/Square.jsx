import React from 'react';

const Square = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <span
      className={classes + (props.state === 'X' ? ` Xchocolate` : ` white`)}
      onClick={() => props.onClick(props.index)}
    >
      {props.state}
    </span>
  );
};
export default Square;
