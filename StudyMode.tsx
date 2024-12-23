import * as React from "react";

import Flashcard from "./Flashcard";

interface StudyModeProps {
  flashcards: { question: string; answer: string }[];
}

const StudyMode: React.FC<StudyModeProps> = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = React.useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div>
      <Flashcard {...flashcards[currentCard]} />
      <button
        onClick={nextCard}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default StudyMode;
