import { IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";

const Article = () => {
  return (
    <article className="px-5 py-3 bg-gray-800 h-fit  shadow-2xl rounded-xl hover:bg-gradient-to-tr from-gray-800 to-black">
      <div className="border-b pb-2">
        <h3 className="font-bold text-lg">Mubasshir Khan</h3>
        <h5 className="text-sm font-thin">Posted at: 01-Jan-2027</h5>
      </div>
      <div className="text-gray-200 border-b py-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quaerat atque asperiores tempora repellat fugit vitae quasi, totam unde doloremque error odio, omnis officia accusantium dolores qui numquam est ratione.</p>
      </div>
      <div className="flex justify-start items-center ">
        <h3 className="flex items-center text-lg my-2"><IoIosHeart fill="#22C55E" className="mr-2" size={'1.5rem'} />  Like</h3>
        <h3 className="flex items-center text-lg my-2 ml-4"><FaRegComment fill="#22C55E" className="mr-2" size={'1.5rem'} />  Comment</h3>
      </div>
    </article>
  )
}

export default Article