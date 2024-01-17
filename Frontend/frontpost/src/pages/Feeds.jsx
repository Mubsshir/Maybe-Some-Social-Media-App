import { useState, useEffect } from "react"
import Article from "../components/Article"
import { getFeeds } from "../services/auth-services"
getFeeds
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const data = await getFeeds();
    if (data) {
      console.log(data)
      setPosts(data);
    }
  };
  useEffect(() => {
    getPosts()
  }, [])

  const renderPosts = posts.map((data, idx) => <Article key={idx} name={data.User} Content={data.Content} PostTime={data.PostTime} />)
  return (
    <div className="overflow-y-scroll drop-shadow-xl h-full w-10/12 rounded-sm  grid grid-cols-2 grid-flow-row-dense gap-2 bg-gradient-to-tl from-gray-700 to-black  px-1 py-2">
      {posts?renderPosts:<h4>No Post Found</h4>}
    </div>
  )
}

export default Feeds