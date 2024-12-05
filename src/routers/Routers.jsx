// import Login  from "../pages/Login";
import Register from "../pages/Register";
import Deposit from "../Dashboard/Deposit";
import Withdraw from "../Dashboard/Withdraw";
import Transfer from "../Dashboard/Transfer";
import Transactions from "../Dashboard/Transactions";
import Login from '../pages/Login';
import UserDashboard from "../Dashboard/UserDashboard";


const ROUTES = [
  {
    path: "/",
    element:<Register/>
  },
  {
    path: "/deposit",
    element:<Deposit/>
  },
  {
    path: "/userdashboard",
    element:<UserDashboard/>
  },
  {
    path: "/withdraw",
    element:<Withdraw/>
  },
  {
    path: "/transfer",
    element:<Transfer/>
  },
  {
    path: "/transaction",
    element:<Transactions/>
  },
  {
    path: "/login",
    element:<Login/>
  }
]
  
  export default ROUTES;