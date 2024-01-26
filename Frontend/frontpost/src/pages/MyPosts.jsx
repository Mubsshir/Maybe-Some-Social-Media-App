import { useState, useEffect, useCallback } from "react"
import Article from "../components/Article"
import { getMyPost } from "../services/auth-services"
const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getMyPost();
      if (data.status===1) {
        setPosts(data.records);
        setIsLoading(false);
      } else {
        setPosts(null)
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    getPosts()
  }, [getPosts])
  let renderPosts;
  if (posts) {
    renderPosts = posts.map((data, idx) => <Article
      key={idx}
      PID={data.post_id}
      name={data.User}
      Content={data.Content}
      PostTime={data.PostTime}
      likes={data.Like}
      liked={data.likedByYou}
      pu_id={data.user_id}
    />)
  }
  else {
    renderPosts = <h3 className="text-center text-green-500 m-auto text-2xl font-bold">No Post Found</h3>
  }
  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center text-green-500 text-3xl">
        <h3>Loading......</h3>
      </div>
    )
  }
  return (<>
    <div className="flex flex-row py-2 justify-normal  flex-wrap overflow-y-scroll hideScroll transition-all ease-in-out duration-300 h-full bg-gray-900 w-full phone:col-span-full lg:col-span-9 row-span-full   drop-shadow-xl rounded-sm  ">
      {renderPosts}
    </div>
    <div className="bg-gray-700 h-full phone:hidden lg:block row-span-full  lg:col-span-3 mr-1 px-2 drop-shadow-sm ">
      <h2>List of active users</h2>
    </div></>
  )
}
export default MyPosts