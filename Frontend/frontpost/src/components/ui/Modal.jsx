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
      <div onClick={()=>{setIsOpen(false)}} className= 'w-dvw h-dvh bg-black bg-opacity-40 fixed left-0 top-0' ></div>
      <div ref={ModalRef} className="w-1/3  top-1/3 bg-white fixed shadow-sm left-0" >
        <div className='bg-green-500 px-1 py-1 font-semibold text-white'>
          <h3>Error</h3>
        </div>
      </div>
    </>
  ) : null;
};


Modal.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

export default Modal;