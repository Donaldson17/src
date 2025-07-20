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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Deposit amount"
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;