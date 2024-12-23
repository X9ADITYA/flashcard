import * as React from "react";

interface ProgressTrackerProps {
  mastered: number;
  total: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  mastered,
  total,
}) => {
  return (
    <div className="p-4">
      <h2>Progress</h2>
      <p>
        {mastered}/{total} Flashcards Mastered
      </p>
      <progress value={mastered} max={total}></progress>
    </div>
  );
};

export default ProgressTracker;
