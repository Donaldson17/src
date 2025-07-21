import GoalItem from './GoalItem';

function GoalList({ goals, onUpdateGoal, onDeleteGoal, onDeposit }) {
  return (
    <div className="goal-list">
      <h2>Your Savings Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet. Add your first goal!</p>
      ) : (
        goals.map(goal => (
          <GoalItem
            key={goal.id}
            goal={goal}
            onUpdate={onUpdateGoal}
            onDelete={onDeleteGoal}
            onDeposit={onDeposit}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;