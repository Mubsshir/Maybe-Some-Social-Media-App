import Input from "./ui/Input"



const auth = () => {
  return (
    <div className="w-1/2 p-5  ">
      <form className="w-full px-4 bg-white flex flex-col py-4 rounded-lg rounded-b-none">
        <Input input={{type:'text',name:'username' ,placeHolder:'User name'}}/>
        <Input input={{type:'password',name:'password' ,placeHolder:'Password'}}/>
      </form>
      <button className="bg-blue-700 w-full font-sans text-white font-semibold text-lg py-2 rounded-b-lg">Login</button>
    </div>
  )
}

export default auth