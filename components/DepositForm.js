import { useState } from 'react';

function DepositForm({ goalId, onDeposit }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && Number(amount) > 0) {
      onDeposit(goalId, amount);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <label>
        Deposit Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          min="1"
          step="0.01"
        />
      </label>
      <button type="submit">Add Deposit</button>
    </form>
  );
}

export default DepositForm;