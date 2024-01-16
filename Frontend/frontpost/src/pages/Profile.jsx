import { useState } from "react"
import { FaEdit, FaSave } from "react-icons/fa"
import { GoX } from 'react-icons/go'
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onEditHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      console.log("Submitting...")
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }
  return (
    <main className="w-full h-full grid grid-cols-3 bg-gradient-to-tr p-2 from-gray-700 to-black ">
      <section className="h-fit bg-gradient-to-t from-gray-800 to-black col-span-2 p-2 rounded-sm shadow-xl">
        <h3 className="text-green-500 text-4xl">About</h3>
        <form className=" mt-6 px-3">
          <div className="grid grid-cols-2 [&>*]:border-b [&>*]:border-gray-500 [&>*]:pb-2 [&>*]:text-lg mb-2">
            <h6 className="">Name</h6>
            <input type="text" name="name" defaultValue={'Mubasshir'} className={`bg-transparent outline-none ${isEdit ? 'text-green-500 text text-lime-200' : ''}`} disabled={!isEdit} />
          </div>
          <div className="flex">
            <button onClick={onEditHandler} type={isEdit ? 'submit' : 'button'} className="mt-10 flex  text-lg justify-center items-center bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              {isEdit ? 'Save ' : 'Edit Information'}{isEdit && <FaEdit className="ml-2" /> && <FaSave className="ml-2" />}
            </button>
            {isEdit && <button onClick={onEditHandler} type={isEdit ? 'submit' : 'button'} className="mt-10 ml-3 flex  text-lg justify-center items-center bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Cancel <GoX className="ml-2 " />
            </button>}
          </div>
        </form>
      </section>
      <section className="h-full">
        card for image
      </section>
    </main>
  )
}

export default Profile