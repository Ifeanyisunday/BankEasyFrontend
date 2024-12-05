import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../apis/UserRegister';

export const Logout = () => {

    // const navigate = useNavigate();

    // const [logout, ] = useLogoutMutation();

    // const submitRequest = async (event) => {
    //     event.preventDefault();
    
    //     try {
    //       // Send user data to the backend
    //       const response = await logout({}).unwrap();
    //       alert(response.message); // "User registered successfully"
    //         navigate("/login");
    //     } catch (err) {
    //       if (err?.data?.error) {
    //         alert(`Error: ${err.data.error}`);
    //       } else {
    //         alert("An unexpected error occurred.");
    //         console.error(err);
    //       }
    //     }
    //   };

  return (
    <>
        {/* <form onSubmit={submitRequest}>
            <button type="submit"className="size-52 w-70 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Logout</button>
        </form> */}
    </>
  )
}

export default Logout