import React,  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useWithdrawMutation } from '../apis/UserRegister';

const Withdraw = () => {

  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const [withdraw, ] = useWithdrawMutation();

  const submitRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await withdraw({ amount }).unwrap();
      alert(response.message); 
      setAmount("")
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

export default Withdraw