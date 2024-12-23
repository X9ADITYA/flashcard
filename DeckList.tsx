import * as React from "react";

interface Deck {
  name: string;
  flashcards: number;
}

interface DeckListProps {
  decks: Deck[];
  selectDeck: (deckName: string) => void;
}

const DeckList: React.FC<DeckListProps> = ({ decks, selectDeck }) => {
  return (
    <div>
      {decks.map((deck, index) => (
        <div
          key={index}
          onClick={() => selectDeck(deck.name)}
          className="p-4 border rounded-lg mb-2 cursor-pointer"
        >
          <h3>{deck.name}</h3>
          <p>{deck.flashcards} Flashcards</p>
        </div>
      ))}
    </div>
  );
};

export default DeckList;
