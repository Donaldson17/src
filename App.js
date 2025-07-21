import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await fetch('http://localhost:3000/goals');
      const data = await response.json();
      setGoals(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const addGoal = async (newGoal) => {
    try {
      const response = await fetch('http://localhost:3000/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newGoal,
          savedAmount: 0,
          createdAt: new Date().toISOString().split('T')[0]
        }),
      });
      const data = await response.json();
      setGoals([...goals, data]);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const updateGoal = async (updatedGoal) => {
    try {
      await fetch(`http://localhost:3000/goals/${updatedGoal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGoal),
      });
      setGoals(goals.map(goal => 
        goal.id === updatedGoal.id ? updatedGoal : goal
      ));
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const deleteGoal = async (id) => {
    try {
      await fetch(`http://localhost:3000/goals/${id}`, {
        method: 'DELETE',
      });
      setGoals(goals.filter(goal => goal.id !== id));
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  const makeDeposit = async (goalId, amount) => {
    try {
      const goal = goals.find(g => g.id === goalId);
      const updatedGoal = {
        ...goal,
        savedAmount: goal.savedAmount + Number(amount)
      };
      
      await fetch(`http://localhost:3000/goals/${goalId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
      });
      
      setGoals(goals.map(g => 
        g.id === goalId ? updatedGoal : g
      ));
    } catch (error) {
      console.error('Error making deposit:', error);
    }
  };

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <GoalList 
        goals={goals} 
        onUpdateGoal={updateGoal} 
        onDeleteGoal={deleteGoal}
        onDeposit={makeDeposit}
      />
    </div>
  );
}

export default App;