import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='flex flex-col item mx-1 font-sans '>
      {props.labelName&&<label htmlFor={props.input.name} className="text-white text-xl  my-1">{props.labelName}</label>}
      <input  ref={ref} {...props.input}  className={`${props.className?props.className:"w-full mb-2  text-xl bg-gray-900 bg-opacity-30  rounded-md  shadow-sm  py-2 px-2 outline-0 font-normal text-white"}`} />
    </div>
  );
});


Input.propTypes = {
  input: PropTypes.object.isRequired,
  labelName: PropTypes.string,
  className:PropTypes.string
};

Input.displayName = 'Input'; // Set the display name

export default Input;
