import React from 'react'


const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.name} className="text-white text-2xl font-semibold my-1">{props.labelName}</label>
      <input ref={ref} {...props.input} className="w-full mb-2  text-2xl bg-transparent border-b border-white  py-2-3 outline-0 font-normal text-white" />
    </div>
  )
})

export default Input

