import React,  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTransferMutation } from '../apis/UserRegister';

const Transfer = () => {


  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const [transfer, ] = useTransferMutation();

  const submitRequest = async (event) => {
    event.preventDefault();

    try {
      // Send user data to the backend
      const response = await transfer({ amount, receiver }).unwrap();
      alert(response.message); // "User registered successfully"
      setAmount("")
      setReceiver("")
      navigate("/userdashboard");
    } catch (err) {
      if (err?.data?.error) {
        alert(`Error: ${err.data.error}`);
      } else {
        alert("An unexpected error occurred.");
        console.error(err);
      }
    }
  };


  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={submitRequest}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Withdraw Money</h2>
          <div
            className={`text-center mb-4 `}
          >
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Recipient username</label>
            <input
              type="text"
              id="username"
              value={receiver} onChange={(e) => setReceiver(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter deposit amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Withdraw
        </button>
      </form>
    </div>
    </div>
  )
}

export default Transfer