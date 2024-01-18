import {IoIosHeart} from "react-icons/io";
import {FaRegComment} from "react-icons/fa";
import {useState} from "react";
import PropTypes from 'prop-types';
const Article = (props) => {
  const [isLike,setIsLike]=useState(false);
  const onClickHandler=()=>{
    setIsLike(!isLike);
  }
  return (
    <article className="h-fit px-5 py-3 bg-gray-800  shadow-2xl rounded-xl hover:bg-gradient-to-tr from-gray-800 to-black">
      <div className="border-b pb-2">
        <h3 className="font-bold text-lg">{props.name}</h3>
        <h5 className="text-sm font-thin">Posted at: {`${props.PostTime}`}</h5>
      </div>
      <div className="text-gray-200 border-b py-2">
        <p>{props.Content}</p>
      </div>
      <div className="flex justify-start items-center ">
        <h3 className="flex items-center text-lg my-2 cursor-pointer select-none" ><IoIosHeart onClick={onClickHandler} fill={`${isLike?'#22C55E':'gray'}`} className="mr-2" size={'1.5rem'} />  Like</h3>
        <h3 className="flex items-center text-lg my-2 ml-4 cursor-pointer select-none"><FaRegComment  fill="#22C55E" className="mr-2" size={'1.5rem'} />  Comment</h3>
      </div>
    </article>
  )
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  PostTime: PropTypes.string,
  Content:PropTypes.string
};

export default Article