import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      {props.labelName&&<label htmlFor={props.input.name} className="text-white text-2xl font-semibold my-1">{props.labelName}</label>}
      <input ref={ref} {...props.input} className="w-full mb-2  text-2xl bg-transparent border-b border-white  py-2-3 outline-0 font-normal text-white" />
    </>
  );
});

Input.propTypes = {
  input: PropTypes.object.isRequired,
  labelName: PropTypes.string,
};

Input.displayName = 'Input'; // Set the display name

export default Input;
