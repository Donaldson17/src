import { useState } from 'react';

const categories = [
  'Travel', 'Emergency', 'Electronics', 'Real Estate', 
  'Vehicle', 'Education', 'Shopping', 'Retirement', 'Home'
];

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      name,
      targetAmount: Number(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAddGoal(newGoal);
    setName('');
    setTargetAmount('');
    setCategory(categories[0]);
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Goal name"
        required
      />
      <input
        type="number"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        placeholder="Target amount"
        required
        min="1"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        min={new Date().toISOString().split('T')[0]}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;