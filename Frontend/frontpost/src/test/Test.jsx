import { useRef } from "react";
import { postPicture } from "../services/profile-services";

const Test = () => {
  const fileRef = useRef();

  const uploadHandler = async() => {
    const formData = new FormData();
    const file= fileRef.current.files[0];
    console.log(file)
    formData.append('file',file);
    const result=await postPicture(formData);
    console.log(result);
  }

  return (
    <>
      <input className="bg-gray-50 py-2 px-4" ref={fileRef} type="file" />
      <button onClick={uploadHandler} className="bg-red-400  py-2 px-4 ml-2 text-white font-bold">Upload</button>
    </>
  )
}

export default Test