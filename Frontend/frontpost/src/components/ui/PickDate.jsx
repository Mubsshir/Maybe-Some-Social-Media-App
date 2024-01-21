import {useState} from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker"


import "react-datepicker/dist/react-datepicker.css";
import '../styles/dateComponent.css'



const PickDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='flex flex-col item mx-1 font-sans '>
      <label className="text-white text-xl  my-1" htmlFor={props.configuration.name}>{props.labelName}</label>
      <DatePicker
        {...props.configuration}
        selected={startDate}
        onChange={(date) => {setStartDate(date);props.fetchDate(date)}}
        dateFormat="MMM d, y"
      >
        <h3 className="text-center font-bold text-green-500">So when did you born?</h3>
      </DatePicker>
    </div>
  )
}

PickDate.propTypes = {
  configuration: PropTypes.object.isRequired,
  labelName:PropTypes.string,
  fetchDate:PropTypes.func
};

export default PickDate