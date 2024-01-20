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
    <article className="grid grid-cols-12 grid-rows-12 justify-start px-2 lg:col-span-3 row-span-4 phone:col-span-full bg-gray-800  shadow-2xl rounded-xl">
      <div className="text-gray-200 border-b pb-2 border-gray-600 col-span-full row-span-4 flex justify-center flex-col">
        <h3 className="font-bold text-2xl capitalize text-green-500">{props.name}</h3>
        <h5 className="text-lg font-bold ">Posted at: <span className="font-thin text-sm">{`${new Date(props.PostTime).toLocaleString('en-Us', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: 'numeric' })}`}</span></h5>
      </div>
      <div className="text-gray-200 border-b overflow-y-scroll hideScroll border-gray-600 py-2 col-span-full row-span-5">
        <p>{props.Content}</p>
      </div>
      <div className="text-gray-200 flex justify-start items-center col-span-full row-span-3 ">
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