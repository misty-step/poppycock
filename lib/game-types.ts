export type GamePhase = "writing" | "voting" | "reveal" | "finished" | "abandoned";
export interface GamePlayer {
  playerId: string;
  name: string;
  seatIndex: number;
  score: number;
  roundPoints: number;
}
export interface GameOption {
  id: string;
  text: string;
  own: boolean;
  truth?: boolean;
  authors?: string[];
  voters?: string[];
}
export interface GameView {
  gameId: string;
  matchId: string;
  phase: GamePhase;
  round: number;
  totalRounds: number;
  participant: boolean;
  submitted: boolean;
  voted: boolean;
  submissionCount: number;
  voteCount: number;
  playerCount: number;
  prompt: { category: string; question: string };
  options: GameOption[];
  players: GamePlayer[];
  ownText?: string;
  ownVoteId?: string;
  source?: { title: string; url: string; note: string };
  truth?: string;
  canAdvance: boolean;
}
