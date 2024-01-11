import Input from "./ui/Input"



const auth = () => {
  return (
    <div className="w-1/3 h-auto bg-white rounded-2xl overflow-auto mt-3.5 mr-28 backdrop-blur-lg drop-shadow-lg bg-opacity-5">
      <h3 className="text-center my-4 text-3xl" ><span className="font-bold text-green-500">Login</span> <br /> to Your Account</h3>
      <form className="w-full px-4  flex flex-col py-4 rounded-lg rounded-b-none">
        <Input input={{ labelName: "User Name", type: 'text', name: 'username' }} />
        <Input input={{ labelName: 'Password', type: 'password', name: 'password' }} />
      </form>
      <button className="bg-green-500 mt-3 w-full font-sans text-white font-semibold text-2xl py-3">Login</button>
    </div>
  )
}

export default auth