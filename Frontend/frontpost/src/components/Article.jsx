import { IoIosHeart } from "react-icons/io";
import {  FaRegComment } from "react-icons/fa";
import {  useState } from "react";
import PropTypes from 'prop-types';
import { dislikePost, likePost } from "../services/auth-services";

const Article = (props) => {
  const [likeCount, setLikeCount] = useState(props.likes);
  //const likeCount=props.likes;
  const [isLike, setIsLike] = useState(props.liked ? true : false);
  const onClickHandler = async () => {
    setIsLike(!isLike);
    if (!isLike) {//means user will like the post
      const result = await likePost(props.PID);
      if (result) {
        setIsLike(true);
        setLikeCount(likeCount+1)
      }
    } else {
      console.log("Post Disliked");
      const result=await dislikePost(props.PID);
      console.log(result)
      if(result){
        console.log("Post Disliked");
        console.log(result)
        setLikeCount(likeCount-1)
        setIsLike(false);
      }
      
    }
  }



  return (
    <article className=" ml-3 mb-2 phone:w-[99%] sm:w-[48%] sm:h-[33%]  lg:w-[32%] lg:h-[32%] px-2 py-1  flex flex-col  justify-between bg-gray-800  shadow-2xl rounded-lg ">
      <div className="text-gray-200 border-b pb-2 border-gray-600   flex justify-center flex-col">
        <h3 className="font-bold text-2xl capitalize text-green-500">{props.name}</h3>
        <h5 className="text-lg font-bold ">Post time: <span className="font-thin text-sm">{`${new Date(props.PostTime).toLocaleString('en-Us', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: 'numeric' })}`}</span></h5>
      </div>
      <div className="text-gray-200  flex-1 overflow-y-scroll flex-col items-start justify-start  hideScroll py-2  ">
        <p>{props.Content}</p>
      </div>
      <div className="text-gray-200 flex justify-start items-center border-t border-gray-600 ">
        <h3 onClick={onClickHandler} className="flex items-center text-lg my-2 cursor-pointer select-none" ><IoIosHeart fill={`${isLike ? '#22C55E' : 'gray'}`} className="mr-2" size={'1.5rem'} />
          <span className="bg-gray-700 px-2 rounded-sm">
            {likeCount}
          </span>
        </h3>
        <h3 className="flex items-center text-lg my-2 ml-4 cursor-pointer select-none"><FaRegComment fill="#22C55E" className="mr-2" size={'1.5rem'} /> </h3>
      </div>
    </article>
  )
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  PostTime: PropTypes.string,
  Content: PropTypes.string,
  PID: PropTypes.number.isRequired,
  liked: PropTypes.number
};

export default Article