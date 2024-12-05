import React from 'react'
import { Link } from "react-router-dom";
import Logout from '../pages/Logout';


const UserDashboard = () => {
  return (
    <div>

        <div className='flex flex-nowrap my-80 px-96 ml-0 space-x-16'>
            <li><Link to={'/deposit'}><button type="submit"className="size-52 w-70 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Deposit</button></Link></li>
            <li><Link to={'/withdraw'}><button type="submit"className="size-52 w-70 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Withdraw</button></Link></li>
            <li><Link to={'/transfer'}><button type="submit"className="size-52 w-70 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Transfer</button></Link></li>
            <li><Link to={'/transaction'}><button type="submit"className="size-52 w-70 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Transaction history</button></Link></li>
            <li><Logout/></li>
        </div>
    </div>
  )
}

export default UserDashboard