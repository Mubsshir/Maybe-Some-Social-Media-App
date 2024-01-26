import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { fetchLikesOnPost } from '../services/auth-services';
import MiniModal from './ui/MiniModal';

const InfoBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likes, setLikes] = useState([]);
  const fetchLikes = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fetchLikesOnPost(props.PID);
      if (result.status === 1) {
        setLikes(result.likes);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [props.PID])


  useEffect(() => {
    fetchLikes()
  }, [fetchLikes]);

  return (
    <MiniModal className="z-50 w-44 overflow-hidden h-52 bg-gray-700 border-2 border-gray-800 absolute rounded-lg left-[18%] top-[25%]">
      <h3 className="font-semibold text-xl text-green-500 border-b border-gray-400 px-2 py-1">Liked by</h3>
      {isLoading ? <h3>Loading...</h3> : (
        <ul className="px-2 text-lg [&>*]:py-[3px] overflow-y-auto h-full">
          {likes.length > 0 ? likes.map((data) => <li key={data.user_id}>{data.first_name}</li>) : <li>No Likes</li>}
        </ul>)}
    </MiniModal>)
};


InfoBox.propTypes = {
  PID: PropTypes.number.isRequired,
};



export default InfoBox;
