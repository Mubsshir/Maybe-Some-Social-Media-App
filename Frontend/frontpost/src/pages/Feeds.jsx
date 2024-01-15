import Article from "../components/Article"
const Feeds = () => {
  return (
    <div className="overflow-y-scroll drop-shadow-xl h-full w-10/12 rounded-sm  grid grid-cols-2 grid-flow-row-dense gap-2 bg-gradient-to-tl from-gray-700 to-black  px-1 py-2">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default Feeds