import { IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import PropTypes from 'prop-types';
const Article = (props) => {
  const [isLike, setIsLike] = useState(false);
  const onClickHandler = () => {
    setIsLike(!isLike);
  }

  return (
    <article className=" ml-3 mb-2 phone:w-[99%] sm:w-[48%] sm:h-[33%]  lg:w-[32%] lg:h-[32%] px-2 py-1  flex flex-col  justify-between bg-gray-800  shadow-2xl rounded-lg ">
      <div className="text-gray-200 border-b pb-2 border-gray-600   flex justify-center flex-col">
        <h3 className="font-bold text-2xl capitalize text-green-500">{props.name}</h3>
        <h5 className="text-lg font-bold ">Posted at: <span className="font-thin text-sm">{`${new Date(props.PostTime).toLocaleString('en-Us', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: 'numeric' })}`}</span></h5>
      </div>
      <div className="text-gray-200  flex-1 overflow-y-scroll flex-col items-start justify-start  hideScroll py-2  ">
        <p>{props.Content}</p>
      </div>
      <div className="text-gray-200 flex justify-start items-center border-t border-gray-600 ">
        <h3 className="flex items-center text-lg my-2 cursor-pointer select-none" ><IoIosHeart onClick={onClickHandler} fill={`${isLike ? '#22C55E' : 'gray'}`} className="mr-2" size={'1.5rem'} />  Like</h3>
        <h3 className="flex items-center text-lg my-2 ml-4 cursor-pointer select-none"><FaRegComment fill="#22C55E" className="mr-2" size={'1.5rem'} />  Comment</h3>
      </div>
    </article>
  )
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  PostTime: PropTypes.string,
  Content: PropTypes.string
};

export default Article