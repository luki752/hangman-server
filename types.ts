export type Player = {
  name: string;
  id: string;
  avatar: string;
  socketId: string;
  guessedLetters: string[];
  score: number;
  connectedToRoom: boolean;
  hasChosenWord: boolean;
};
type WordToGuess = {
  word: string;
  translation: string;
  original: string;
  category: string;
};
export type Message = {
  playerName: string;
  playerAvatar: string;
  playerId: string;
  message: string;
  createdAt: string;
};
export type Round = {
  round: number;
  roundWinners: {
    id: string;
    name: string;
  }[];
  wordToGuessChooser: string;
  players: Player[];
  playersInGame: string[];
  customWord: boolean;
  difficulty: number;
  language: string;
  vacant: boolean;
  wordToGuess: WordToGuess;
  roundTime: number;
};

export type room = {
  playersLimit: number;
  roomId: string;
  private: boolean;
  roundTime: number;
  rounds: Round[];
  roundsNumber: number;
  currentRound: number;
  creator: string;
  inGame: boolean;
  createdAt: Date;
  messages: Message[];
};
export type roomPayload = {
  privateRoom: boolean;
  playersLimit: number;
  customWord: boolean;
  word: WordToGuess;
  roundTime: number;
  roundsNumber: number;
  language: string;
  difficulty: number;
  creator: {
    name: string;
    id: string;
    avatar: string;
  };
};
export type joinRoomPayload = {
  roomId: string;
  player: {
    id: string;
    name: string;
    avatar: string;
  };
};
export type setWordToGuessPayload = {
  roomId: string;
  customWord: boolean;
  language: string;
  wordToGuess: WordToGuess;
  playerIndex: number;
  difficulty: number;
};
export type guessLetterPayload = {
  letter: string;
  roomId: string;
  playerId: string;
  roundTime: number;
};
