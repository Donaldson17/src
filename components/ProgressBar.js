function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill" 
        style={{ width: `${Math.min(progress, 100)}%` }}
      ></div>
      <span>{Math.round(progress)}%</span>
    </div>
  );
}

export default ProgressBar;