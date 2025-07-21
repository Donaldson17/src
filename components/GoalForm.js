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
      category,
      deadline,
    };
    onAddGoal(newGoal);
    setName('');
    setTargetAmount('');
    setCategory(categories[0]);
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      <label>
        Goal Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Vacation Fund"
          required
        />
      </label>
      <label>
        Target Amount ($):
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="1000"
          required
          min="1"
          step="0.01"
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label>
        Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </label>
      <button type="submit">Create Goal</button>
    </form>
  );
}

export default GoalForm;