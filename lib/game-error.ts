export function gameErrorCode(error: unknown): string | null {
  const data = error !== null && typeof error === "object" && "data" in error ? error.data : null;
  return data !== null &&
    typeof data === "object" &&
    "code" in data &&
    typeof data.code === "string"
    ? data.code
    : null;
}

const messages: Record<string, string> = {
  NOT_ENOUGH_PRESENT_PLAYERS: "You need at least 3 connected players to start.",
  MATCH_PARTICIPANT_REQUIRED: "You're watching this game. You can play in the next one.",
  SELF_VOTE_NOT_ALLOWED: "You can't vote for your own answer. Choose another answer.",
  ROOM_NOT_OPEN: "This table has closed. Check the room code or create a new table.",
  ROOM_NOT_FOUND: "No table has that room code. Check the code with your host.",
  INVALID_ROOM_CODE: "Enter the four-character room code from your host.",
  INVALID_DISPLAY_NAME: "Enter a name between 1 and 24 characters.",
  ROOM_FULL: "This table has 12 players. Ask the host to make space or create another table.",
  ROOM_JOIN_RATE_LIMIT: "Too many join attempts. Wait a minute, then try again.",
  ROOM_CREATION_RATE_LIMIT:
    "You've created several tables recently. Wait a minute, then try again.",
  ROOM_CODE_EXHAUSTED: "A room code couldn't be assigned. Try creating the table again.",
  HOST_REQUIRED: "The host has changed. Only the current host can do this.",
  HOST_NOT_PRESENT: "Reconnect to the table before starting the game.",
  STALE_ROUND: "That round has ended. Your current round is shown here.",
  WRONG_PHASE: "That part of the round has ended. Continue with the current step.",
  SUBMISSION_LOCKED: "Your answer was already submitted and can't be changed.",
  VOTE_LOCKED: "Your vote was already locked and can't be changed.",
  VOTE_NOT_ALLOWED: "You submitted the truth, so you don't vote this round.",
  MATCH_NOT_ACTIVE: "This game has ended. Return to the table to play again.",
  NOT_A_ROOM_MEMBER: "You're no longer at this table. Return to the start screen to rejoin.",
  UNAUTHENTICATED:
    "Your connection needs refreshing. Reconnect without clearing your browser data.",
  BLUFF_REQUIRED: "Enter an answer before submitting.",
  BLUFF_TOO_LONG: "Keep your answer to 180 characters or fewer.",
  OPTION_NOT_FOUND: "That answer is no longer available. Choose from the current round.",
  CONTENT_NOT_READY: "The question deck isn't ready. Try starting the game again.",
};

export function gameError(error: unknown): string {
  const code = gameErrorCode(error);
  return (
    (code && messages[code]) ||
    "That action couldn't be completed. Check your connection and try again."
  );
}
