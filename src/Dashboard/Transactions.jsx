import React from 'react'

const Transactions = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Transaction History</h1>
        {/* {transactions.length === 0 ? (
          <div className="text-center text-gray-500">No transactions found</div>
        ) : ( */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Balance</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-center">{new Date(transaction.date).toLocaleString()}</td>
                    <td className="py-2 px-4 border-b text-center">{transaction.type}</td>
                    <td className="py-2 px-4 border-b text-center">{transaction.amount}</td>
                    <td className="py-2 px-4 border-b text-center">{transaction.balance}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Transactions