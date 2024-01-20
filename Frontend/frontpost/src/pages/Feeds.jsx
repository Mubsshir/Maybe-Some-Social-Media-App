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
  },[setIsLoading]);
  
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
  return (
    <div className="overflow-y-scroll drop-shadow-xl h-full w-10/12 rounded-sm  grid grid-cols-2 grid-flow-col-dense gap-2 bg-gradient-to-tl from-gray-700 to-black  px-1 py-2">
      {posts ? renderPosts : <h4>No Post Found</h4>}
    </div>
  )
}

export default Feeds