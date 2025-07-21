function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;
  
  const today = new Date();
  const approachingDeadlines = goals.filter(goal => {
    if (goal.savedAmount >= goal.targetAmount) return false;
    const deadline = new Date(goal.deadline);
    const timeLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    return timeLeft <= 30 && timeLeft >= 0;
  }).length;
  
  const overdueGoals = goals.filter(goal => {
    if (goal.savedAmount >= goal.targetAmount) return false;
    const deadline = new Date(goal.deadline);
    return deadline < today;
  }).length;

  return (
    <div className="overview">
      <h2>Savings Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Goals</h3>
          <p>{totalGoals}</p>
        </div>
        <div className="stat-card">
          <h3>Total Saved</h3>
          <p>${totalSaved.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completedGoals}</p>
        </div>
        <div className="stat-card">
          <h3>Approaching</h3>
          <p>{approachingDeadlines}</p>
        </div>
        <div className="stat-card">
          <h3>Overdue</h3>
          <p>{overdueGoals}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;