import { useState } from 'react';
import ProgressBar from './ProgressBar';
import DepositForm from './DepositForm';

function GoalItem({ goal, onUpdate, onDelete, onDeposit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState(goal);

  const handleUpdate = () => {
    onUpdate(editedGoal);
    setIsEditing(false);
  };

  const remainingAmount = goal.targetAmount - goal.savedAmount;
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  
  const deadline = new Date(goal.deadline);
  const today = new Date();
  const timeLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
  
  let status = '';
  if (goal.savedAmount >= goal.targetAmount) {
    status = 'Completed';
  } else if (timeLeft < 0) {
    status = 'Overdue';
  } else if (timeLeft <= 30) {
    status = 'Approaching Deadline';
  }

  return (
    <div className={`goal-item ${status.toLowerCase().replace(' ', '-')}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedGoal.name}
            onChange={(e) => setEditedGoal({...editedGoal, name: e.target.value})}
          />
          <input
            type="number"
            value={editedGoal.targetAmount}
            onChange={(e) => setEditedGoal({...editedGoal, targetAmount: e.target.value})}
          />
          <input
            type="date"
            value={editedGoal.deadline}
            onChange={(e) => setEditedGoal({...editedGoal, deadline: e.target.value})}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{goal.name}</h3>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Remaining: ${remainingAmount}</p> 
          <ProgressBar progress={progress} />
          <p>Deadline: {goal.deadline} ({timeLeft} days left)</p>
          {status && <p className="status">{status}</p>}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(goal.id)}>Delete</button>
          <DepositForm goalId={goal.id} onDeposit={onDeposit} />
        </div>
      )}
    </div>
  );
}

export default GoalItem;