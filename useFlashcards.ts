import { useState } from "react";
import { Flashcard } from "./FlashcardTypes";

export const useFlashcards = (initialDeck: Flashcard[]) => {
  const [deck, setDeck] = useState(initialDeck);

  const addFlashcard = (newFlashcard: Flashcard) => {
    setDeck([...deck, newFlashcard]);
  };

  const removeFlashcard = (id: string) => {
    setDeck(deck.filter((flashcard) => flashcard.id !== id));
  };

  return { deck, addFlashcard, removeFlashcard };
};
