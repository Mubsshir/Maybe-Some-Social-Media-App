import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'


const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const ModalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (ModalRef.current && !ModalRef.current.contains(event.target)) {
      // Click occurred outside the Modal, close it
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return isOpen ? (
    <>
      <div onClick={() => { setIsOpen(false) }} className='w-dvw h-dvh bg-black bg-opacity-40 fixed left-0 top-0' ></div>
      <div ref={ModalRef} className="  lg:w-1/3 sm:w-6/12  top-2/4 left-[50%]  -translate-x-2/4 -translate-y-2/4 bg-white fixed shadow-sm " >
        <div className='bg-green-500 px-2 py-1 font-semibold text-white'>
          <h3>{props.title}</h3>
        </div>
        <div className=' mb-12 px-2'>
          <h3>{props.message}</h3>
        </div>
        <div className='  py-3 px-2 flex items-center [&>*]:border [&>*]:px-5 [&>*]:rounded-sm'>
          <button onClick={() => { props.onYesClick(), setIsOpen(false) }} className='mr-3 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'>Yes</button>
          <button onClick={() => { setIsOpen(false) }} className='border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white  ' >No</button>
        </div>
      </div>
    </>
  ) : null;
};


Modal.propTypes = {
  onYesClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Modal;