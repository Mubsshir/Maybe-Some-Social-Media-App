import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'


const MiniModal = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const MiniModalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (MiniModalRef.current && !MiniModalRef.current.contains(event.target)) {
      // Click occurred outside the MiniModal, close it
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
    <div ref={MiniModalRef} className={props.className} >
      {props.children}
    </div>
  ) : null;
};


MiniModal.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

export default MiniModal;