
import { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const Backdrop = () => {
  const [show, setShow] = useState(true);
  const HideModal = () => {
    setShow(false)
  }
  return (
    show && <div onClick={HideModal} className='w-dvw h-dvh fixed bg-black bg-opacity-40 z-50' ></div>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <div className={props.className}>
          {props.children}
        </div>, document.getElementById("modal")
      )}
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired
}

export default Modal;