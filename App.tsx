import React, { useState } from "react";
import Flashcard from "./Flashcard";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const addFlashcard = () => {
    if (newQuestion && newAnswer) {
      const newCard = {
        id: flashcards.length + 1,
        question: newQuestion,
        answer: newAnswer,
      };
      setFlashcards([...flashcards, newCard]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Flashcard App</h1>
      <div className="my-4">
        <input
          type="text"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addFlashcard} className="bg-blue-500 text-white p-2">
          Add Flashcard
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {flashcards.map((card) => (
          <Flashcard
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
