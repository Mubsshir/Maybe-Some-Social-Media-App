
const Navigation = () => {
  return (
    <ul className="drop-shadow-xl bg-gradient-to-tl from-gray-600 to-black hover:bg-gradient-to-br [&>*]:px-5 [&>*]:py-2 group [&>*]:cursor-pointer text-lg font-semibold h-full bg-gray-900 rounded-sm hover:bg-gray-800">
      <li className="hover:bg-gradient-to-r from-green-500 to-gray-800">My Profile</li>
      <li className="hover:bg-gradient-to-r from-green-500 to-gray-800">Feeds</li>
      <li className="hover:bg-gradient-to-r from-green-500 to-gray-800">My Post</li>
      <li className="hover:bg-gradient-to-r from-green-500 to-gray-800">Dashboards</li>
    </ul>

  )
}

export default Navigation