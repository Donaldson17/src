function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill" 
        style={{ width: `${Math.min(progress, 100)}%` }}
      >
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;