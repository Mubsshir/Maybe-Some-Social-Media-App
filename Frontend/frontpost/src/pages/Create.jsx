import { useRef, useState } from "react";
import { sharePost } from "../services/auth-services";

const Create = () => {
  const [isSharing,setIsSharing]=useState();
  const [message,setMessage]=useState(null);
  const contentRef=useRef();
  const cancelHandler=(e)=>{
    e.preventDefault();
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    const content=contentRef.current.value;
    if(content.length>0){
      setIsSharing(true);
      try{
        const res=await sharePost(content);
        if(res){
          setMessage("Post shared...😊")
          setIsSharing(false);
        }
        else{
          setMessage("Opps 🤨")
          setIsSharing(false);
        }
      }catch(err){
        setMessage("Error: "+err);
        setIsSharing(false);
      }
    }
  }
  setTimeout(()=>{
    setMessage(null);
  },5000)

  return (
    <div className="bg-gray-800 col-span-full row-span-full">
      <form  onSubmit={submitHandler} className="rounded-md bg-gray-900 p-2 w-10/12 text-white mx-auto mt-40 border shadow-xl">
        <h4 className="text-lg font-bold mb-4">What is on your head....🧐</h4>
        <textarea  ref={contentRef} name="content" rows="4" className="w-full bg-transparent p-2 outline-none border rounded-sm border-white" maxLength={200}></textarea>
        <div className="flex">
          <button type="submit" className="my-2 flex mr-2 text-lg justify-center items-center bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            {'Post Now'}
          </button>
          <button onClick={cancelHandler} className="my-2 flex  text-lg justify-center items-center bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            {'Cancel'}
          </button>
        </div>
        <div>
        {isSharing&&<h3 className="text-green-500">Sharing.....</h3>}
        {message&&<h3 className="text-green-500">{message}</h3>}
      </div>
      </form>
    </div>
  )
}
export default Create