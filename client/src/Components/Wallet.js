import React, { useState } from 'react';
import '../Styles/Wallet.css';

const Wallet = () => {
  const [balance, setBalance] = useState(1500);
  const [vehicle, setVehicle] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([
    { vehicle: '2-Wheeler', amount: -50, date: '2024-11-01', description: 'Parking Fee' },
    { vehicle: '3-Wheeler', amount: -100, date: '2024-11-03', description: 'Parking Fee' },
    { vehicle: '4-Wheeler', amount: -150, date: '2024-11-05', description: 'Parking Fee' },
    { vehicle: '2-Wheeler', amount: -30, date: '2024-11-06', description: 'Parking Fee' },
    { vehicle: '3-Wheeler', amount: -80, date: '2024-11-07', description: 'Parking Fee' },
    { vehicle: '4-Wheeler', amount: -200, date: '2024-11-08', description: 'Parking Fee' },
  ]);

  const handleTransaction = () => {
    if (!vehicle || !amount || !description || isNaN(amount) || amount <= 0) {
      alert('Please fill all fields correctly!');
      return;
    }
    
    const newTransaction = {
      vehicle,
      amount: parseInt(amount), // ensure amount is treated as a number
      date: new Date().toISOString().split('T')[0],
      description,
    };
    
    setTransactions([...transactions, newTransaction]);
    setBalance(balance - parseInt(amount));
    
    // Clear input fields
    setVehicle('');
    setAmount('');
    setDescription('');
  };

  return (
    <div id="wallet-container">
      <h1 className="wallet-title">Wallet</h1>
      <div className="balance-section">
        <h2>Available Balance: ₹{balance}</h2>
      </div>
      <div className="transactions-section">
        <h2>Transaction History</h2>
        <div className="transactions-list">
          {transactions.map((transaction, index) => (
            <div className="transaction" key={index}>
              <div className="transaction-details">
                <span><strong>Vehicle:</strong> {transaction.vehicle}</span>
                <span><strong>Amount:</strong> ₹{transaction.amount}</span>
                <span><strong>Date:</strong> {transaction.date}</span>
                <span><strong>Description:</strong> {transaction.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="add-transaction">
        <input
          type="text"
          placeholder="Vehicle (e.g., 2-Wheeler)"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleTransaction}>
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default Wallet;
