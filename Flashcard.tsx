import * as React from "react";

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = React.useState(false); // Use React.useState

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40 border rounded-lg flex items-center justify-center text-center cursor-pointer"
    >
      {flipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
};

export default Flashcard;
