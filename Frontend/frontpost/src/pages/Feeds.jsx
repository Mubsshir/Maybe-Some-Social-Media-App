import { useState, useEffect, useCallback } from "react"
import Article from "../components/Article"
import { getFeeds } from "../services/auth-services"
getFeeds
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getFeeds();
      if (data) {
        console.log(data)
        setPosts(data);
        setIsLoading(false);
      } else {
        setPosts([{}])
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

  const renderPosts = posts.map((data, idx) => <Article key={idx} name={data.User} Content={data.Content} PostTime={data.PostTime} />)
  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center text-green-500 text-3xl">
        <h3>Loading......</h3>
      </div>
    )
  }
  return (<>
    <div className=" gap-2 transition-all ease-in-out duration-300 h-full bg-gray-900 w-full phone:col-span-full lg:col-span-9 row-span-full   drop-shadow-xl rounded-sm  px-1 py-2 grid grid-cols-9  grid-rows-12">
      {posts ? renderPosts : <h4>No Post Found</h4>}
    </div>
    <div className="bg-gray-700 h-full phone:hidden lg:block row-span-full  lg:col-span-3 mr-1 px-2 drop-shadow-sm ">
      <h2>List of active users</h2>
    </div></>
  )
}

export default Feeds