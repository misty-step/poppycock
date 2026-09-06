"use client";

import {
  Component,
  useEffect,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";
import { useConvexConnectionState, useMutation, useQuery } from "convex/react";
import { QRCodeDisplay, useHeartbeat, useWakeLock } from "@parlor/react";
import { classifyPresence, type TimestampMs } from "@parlor/core";
import { api } from "../convex/_generated/api";
import type { Id } from "../convex/_generated/dataModel";
import type { GameView } from "../lib/game-types";
import { useGuest } from "./providers";

function message(error: unknown): string {
  const data = error !== null && typeof error === "object" && "data" in error ? error.data : null;
  const code =
    data !== null && typeof data === "object" && "code" in data && typeof data.code === "string"
      ? data.code
      : null;
  const messages: Record<string, string> = {
    NOT_ENOUGH_PRESENT_PLAYERS: "We need at least 3 players here to begin.",
    MATCH_PARTICIPANT_REQUIRED: "You have a front-row seat. Join the next game to play.",
    SELF_VOTE_NOT_ALLOWED: "That one’s yours. Pick someone else’s answer.",
    ROOM_NOT_OPEN: "That room has closed. Check the code or start a new table.",
    INVALID_ROOM_CODE: "Use the four-character code your host is showing.",
    INVALID_DISPLAY_NAME: "Choose a name between 1 and 24 characters.",
    ROOM_FULL: "This table is full. Poppycock seats up to 12.",
    ROOM_JOIN_RATE_LIMIT: "Too many attempts. Wait a minute before trying again.",
    HOST_REQUIRED: "The host has changed. The new host can start the game.",
    PHASE_EXPIRED: "That timer ran out. Your next turn will be ready shortly.",
    STALE_ROUND: "The table moved to a new round. Your current turn is shown here.",
    SUBMISSION_LOCKED: "Your bluff is already saved. It can’t be changed.",
    VOTE_LOCKED: "Your vote is already saved. Sit tight for the reveal.",
    MATCH_NOT_ACTIVE: "This game ended. Gather at the table to play another.",
    UNAUTHENTICATED: "Your guest pass needs refreshing. Reconnect to keep the same seat.",
    BLUFF_REQUIRED: "Write an answer before locking it in.",
    BLUFF_TOO_LONG: "Keep your answer to 180 characters or fewer.",
  };
  if (code && messages[code]) return messages[code];
  if (error instanceof Error)
    return error.message
      .replace(/\[CONVEX[^\]]*\]\s*/g, "")
      .split("\n")
      .filter((line) => !/^\s+at\s/.test(line) && !line.includes("Called by client"))
      .join(" ")
      .slice(0, 240);
  return "That didn’t go through. Check your connection and try again.";
}
function Face({ seat = 0, small = false }: { seat?: number; small?: boolean }) {
  return (
    <span className={`face face-${seat % 6}${small ? " face-small" : ""}`} aria-hidden="true">
      <i />
      <i />
      <b />
    </span>
  );
}
function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand brand-small" : "brand"}>
      poppycock<span className="brand-dot">!</span>
    </span>
  );
}
function Rules() {
  return (
    <details className="rules">
      <summary>How to play</summary>
      <ol>
        <li>
          <strong>Make something up.</strong> Everyone gets the same obscure question. Write a
          believable answer in 90 seconds.
        </li>
        <li>
          <strong>Find the real thing.</strong> Your bluffs get mixed with the truth. You have 60
          seconds to vote. You can’t pick your own.
        </li>
        <li>
          <strong>Take the credit.</strong> Get 2 points for finding the truth and 1 for each person
          you fool. Write the exact truth? You earn 2 points and sit out that vote.
        </li>
      </ol>
      <p>
        Six rounds. Most points wins; ties share the glory. Matching bluffs share their fooled-voter
        points. Miss a deadline? You sit out that action, not the game.
      </p>
    </details>
  );
}
class RoomBoundary extends Component<
  { children: ReactNode; recover: () => void; leave: () => void },
  { error: unknown }
> {
  state: { error: unknown } = { error: null };
  static getDerivedStateFromError(error: unknown) {
    return { error };
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <section className="paper recovery">
        <h2>Let’s find your seat.</h2>
        <p role="alert">{message(this.state.error)}</p>
        <button
          onClick={() => {
            this.setState({ error: null });
            this.props.recover();
          }}
        >
          Reconnect
        </button>
        <button className="text-button" onClick={this.props.leave}>
          Back to the front door
        </button>
        <p className="muted">
          Your identity stays in this browser. Don’t clear browser data during a party.
        </p>
      </section>
    );
  }
}
export default function Home() {
  const guest = useGuest();
  const [mounted, setMounted] = useState(false);
  const [roomId, setRoomId] = useState<Id<"rooms"> | null>(null);
  const [joinCode, setJoinCode] = useState("");
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("join");
    if (code) setJoinCode(code.toUpperCase().slice(0, 4));
    else setRoomId(localStorage.getItem("poppycock:room") as Id<"rooms"> | null);
    setMounted(true);
  }, []);
  function enter(id: Id<"rooms">) {
    localStorage.setItem("poppycock:room", id);
    setRoomId(id);
    window.history.replaceState(null, "", "/");
  }
  function exit() {
    localStorage.removeItem("poppycock:room");
    setRoomId(null);
    window.history.replaceState(null, "", "/");
  }
  if (!mounted)
    return (
      <main className="loading">
        <Brand />
        <p>Setting the table…</p>
      </main>
    );
  return (
    <main className={roomId ? "room-shell" : "front-door"}>
      {roomId ? (
        <header className="room-header">
          <Brand small />
          <span className="header-note">A game of beautiful nonsense</span>
        </header>
      ) : null}
      {Boolean(guest.error) && (
        <div className="notice error" role="alert">
          {message(guest.error)}{" "}
          <button className="text-button" onClick={() => void guest.refresh().catch(() => {})}>
            Retry connection
          </button>
        </div>
      )}
      {!guest.credential ? (
        <section className="loading">
          <Brand />
          <p>{guest.loading ? "Saving your seat…" : "Connecting your guest seat…"}</p>
          <p className="muted">No account. Just you and a very convincing lie.</p>
        </section>
      ) : roomId ? (
        <RoomBoundary
          key={guest.credential}
          recover={() => void guest.refresh().catch(() => {})}
          leave={exit}
        >
          <Room roomId={roomId} token={guest.credential} exit={exit} />
        </RoomBoundary>
      ) : (
        <Entrance token={guest.credential} initialCode={joinCode} enter={enter} />
      )}
      <footer className="site-footer">
        <span>Made for the people around your table.</span>
        <span>Room & presence by Parlor</span>
      </footer>
    </main>
  );
}
function Entrance({
  token,
  initialCode,
  enter,
}: {
  token: string;
  initialCode: string;
  enter: (id: Id<"rooms">) => void;
}) {
  const create = useMutation(api.rooms.createRoom);
  const join = useMutation(api.rooms.joinRoom);
  const [name, setName] = useState(() => localStorage.getItem("poppycock:name") ?? "");
  const [code, setCode] = useState(initialCode);
  const [mode, setMode] = useState<"create" | "join">(initialCode ? "join" : "create");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      localStorage.setItem("poppycock:name", name.trim());
      if (mode === "create") {
        const result = await create({ displayName: name, guestToken: token });
        enter(result.roomId);
      } else {
        const result = await join({ displayName: name, code, guestToken: token });
        if (!result.ok) throw { data: { code: result.code } };
        enter(result.roomId);
      }
    } catch (cause) {
      setError(message(cause));
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="invitation">Bring friends. Make stuff up.</p>
          <h1>
            <Brand />
          </h1>
          <p className="tagline">
            The truth is strange.
            <br />
            Your friends are stranger.
          </p>
          <p className="hero-description">
            One peculiar question. A handful of believable lies. Can you spot the truth — or sell
            everyone your nonsense?
          </p>
          <div className="game-facts">
            <span>3–12 players</span>
            <span>6 rounds</span>
            <span>One phone each</span>
          </div>
        </div>
        <div className="box-art" aria-hidden="true">
          <div className="art-slip slip-back">
            <span>Sounds suspicious.</span>
            <Face seat={2} />
          </div>
          <div className="art-slip slip-front">
            <Face seat={0} />
            <span>
              Absolutely
              <br />
              made that up.
            </span>
            <div className="stamp">A very good lie</div>
          </div>
          <span className="spark spark-one">∗</span>
          <span className="spark spark-two">∗</span>
        </div>
      </section>
      <section className="entry-layout">
        <div className="paper entry-paper">
          <div className="mode-switch" aria-label="Choose how to play">
            <button
              className={mode === "create" ? "selected" : ""}
              onClick={() => setMode("create")}
            >
              Start a table
            </button>
            <button className={mode === "join" ? "selected" : ""} onClick={() => setMode("join")}>
              Join friends
            </button>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="name">What should we call you?</label>
            <input
              id="name"
              autoComplete="nickname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={24}
              placeholder="Your wonderfully ordinary name"
              required
            />
            {mode === "join" && (
              <>
                <label htmlFor="code">Your four-character room code</label>
                <input
                  id="code"
                  className="code-input"
                  autoCapitalize="characters"
                  autoComplete="off"
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value.toUpperCase().replace(/\s/g, "").slice(0, 4))
                  }
                  minLength={4}
                  maxLength={4}
                  placeholder="ABCD"
                  required
                />
              </>
            )}
            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}
            <button className="primary wide" disabled={busy}>
              {busy
                ? "Saving your seat…"
                : mode === "create"
                  ? "Make room for nonsense"
                  : "Take my seat"}
            </button>
          </form>
          <p className="entry-footnote">Free to play. No sign-ups. No one has to know anything.</p>
        </div>
        <aside className="how-preview">
          <h2>A good lie goes a long way.</h2>
          <p>
            Invent an answer. Pick the truth.
            <br />
            Get points for being right — or very convincing.
          </p>
          <Rules />
        </aside>
      </section>
    </>
  );
}
function useClock() {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

function subscribeNetwork(change: () => void) {
  window.addEventListener("online", change);
  window.addEventListener("offline", change);
  return () => {
    window.removeEventListener("online", change);
    window.removeEventListener("offline", change);
  };
}

function Room({ roomId, token, exit }: { roomId: Id<"rooms">; token: string; exit: () => void }) {
  const state = useQuery(api.rooms.getRoomState, { roomId, guestToken: token });
  const game = useQuery(api.game.view, { roomId, guestToken: token });
  const heartbeatMutation = useMutation(api.rooms.heartbeat);
  const leave = useMutation(api.rooms.leaveRoom);
  const start = useMutation(api.game.start);
  const heartbeat = useHeartbeat({
    send: async () => {
      await heartbeatMutation({ roomId, guestToken: token });
    },
  });
  useWakeLock({ enabled: true });
  const connection = useConvexConnectionState();
  const browserOnline = useSyncExternalStore(
    subscribeNetwork,
    () => navigator.onLine,
    () => true,
  );
  const now = useClock();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [requestId, setRequestId] = useState(() => crypto.randomUUID());
  if (!state || game === undefined)
    return (
      <div className="loading">
        <p>Finding everyone at the table…</p>
      </div>
    );
  const host = state.room.hostPlayerId === state.viewerPlayerId;
  const online = browserOnline && connection.isWebSocketConnected;
  const active = game && !["finished", "abandoned"].includes(game.phase);
  const present = state.members.filter(
    (member) =>
      classifyPresence(
        {
          joinedAt: member.joinedAt as TimestampMs,
          ...(member.lastSeenAt === undefined
            ? {}
            : { lastSeenAt: member.lastSeenAt as TimestampMs }),
        },
        now as TimestampMs,
      ) === "present",
  ).length;
  const joinUrl = `${window.location.origin}/?join=${state.room.code}`;
  async function begin() {
    setBusy(true);
    setError("");
    try {
      await start({ roomId, guestToken: token, requestId });
      setRequestId(crypto.randomUUID());
    } catch (cause) {
      setError(message(cause));
    } finally {
      setBusy(false);
    }
  }
  async function depart() {
    setBusy(true);
    try {
      await leave({ roomId, guestToken: token });
      exit();
    } catch (cause) {
      setError(message(cause));
      setBusy(false);
    }
  }
  if (state.room.closedAt !== undefined)
    return (
      <section className="paper recovery">
        <h2>This table has closed.</h2>
        <p>Nothing lost but a few beautiful lies. Start another room to play again.</p>
        <button onClick={exit}>Back to the front door</button>
      </section>
    );
  return (
    <>
      <div className="table-bar">
        <button
          className="room-code"
          onClick={() => setShowShare(!showShare)}
          aria-expanded={showShare}
        >
          <span>Room</span> <strong>{state.room.code}</strong>
          <span className="share-hint">Invite friends</span>
        </button>
        <span className={`connection ${online ? "" : "offline"}`}>
          <i />
          {!online
            ? "Reconnecting…"
            : heartbeat.status === "degraded"
              ? "Restoring presence…"
              : "All connected"}
        </span>
      </div>
      {!online && (
        <p className="notice" role="status">
          Your connection dropped. Keep this page open — your seat and saved answers will return.
        </p>
      )}
      {showShare && (
        <section className="paper share-panel">
          <QRCodeDisplay
            value={joinUrl}
            size={144}
            label={`Scan to join room ${state.room.code}`}
          />
          <div>
            <h2>Pull up a chair.</h2>
            <p>
              Open Poppycock on each phone and enter <strong>{state.room.code}</strong>, or scan the
              code.
            </p>
            <button
              className="secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(joinUrl);
                  setCopied(true);
                } catch {
                  setError(`Share this address: ${joinUrl}`);
                }
              }}
            >
              {copied ? "Link copied" : "Copy invite link"}
            </button>
          </div>
        </section>
      )}
      {error && (
        <p className="notice error" role="alert">
          {error}
        </p>
      )}
      {!active && (
        <section className="lobby-intro">
          <div>
            <p className="stage-label">
              {game?.phase === "finished"
                ? "That’s a wrap"
                : game?.phase === "abandoned"
                  ? "A fresh start"
                  : "The gathering of the fibbers"}
            </p>
            <h1>
              {game?.phase === "finished"
                ? "Well played. Well lied."
                : game?.phase === "abandoned"
                  ? "This game took a breather."
                  : "A few friends.\nZero poker faces."}
            </h1>
            <p>
              {game?.phase === "finished"
                ? "The final scores are in. The most convincing nonsense wins."
                : game?.phase === "abandoned"
                  ? "The match ended after everyone left or its 30-minute limit. Your room is still here — gather three players and deal again."
                  : "Everyone plays on their own phone. Share the code, settle in, and prepare to sound like you know things."}
            </p>
          </div>
          <Face seat={game?.phase === "finished" ? 3 : 1} />
        </section>
      )}
      {game?.phase === "finished" && <Scoreboard game={game} final />}
      {active ? (
        <Play
          key={`${game.gameId}:${game.round}`}
          game={game}
          token={token}
          host={host}
          online={online}
          now={now}
          viewerId={state.viewerPlayerId}
        />
      ) : (
        <section className="paper lobby-paper">
          <div className="section-heading">
            <h2>{game ? "Same table, new nonsense?" : "Who’s at the table?"}</h2>
            <span>{present} here / 12 seats</span>
          </div>
          <div className="player-list">
            {state.members.map((member) => {
              const presence = classifyPresence(
                {
                  joinedAt: member.joinedAt as TimestampMs,
                  ...(member.lastSeenAt === undefined
                    ? {}
                    : { lastSeenAt: member.lastSeenAt as TimestampMs }),
                },
                now as TimestampMs,
              );
              return (
                <div
                  className={`player-row ${presence !== "present" ? "away" : ""}`}
                  key={member.playerId}
                >
                  <Face small seat={member.seatIndex} />
                  <strong>
                    {member.displayName}
                    {member.playerId === state.viewerPlayerId ? " (you)" : ""}
                  </strong>
                  <span>
                    {member.isHost ? "Host" : presence !== "present" ? "Away" : "Ready to fib"}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="lobby-action">
            {host ? (
              <>
                <button
                  className="primary"
                  onClick={() => void begin()}
                  disabled={busy || present < 3 || !online}
                >
                  {busy
                    ? "Dealing the questions…"
                    : game
                      ? "Play another six"
                      : "Let the nonsense begin"}
                </button>
                <p>
                  {present < 3
                    ? `Waiting for ${3 - present} more ${3 - present === 1 ? "player" : "players"}. You need at least three.`
                    : "Six rounds. Two points for truth, one for every friend fooled."}
                </p>
              </>
            ) : (
              <p className="waiting">You’re in. Your host will start when everyone’s ready.</p>
            )}
          </div>
        </section>
      )}
      <div className="room-bottom">
        <Rules />
        <button
          className="text-button leave"
          disabled={busy}
          onClick={() => {
            if (
              window.confirm(
                "Leave this table? Your submitted answers stay in the game. You can rejoin with the room code.",
              )
            )
              void depart();
          }}
        >
          Leave table
        </button>
      </div>
    </>
  );
}
function Scoreboard({ game, final = false }: { game: GameView; final?: boolean }) {
  const sorted = [...game.players].sort((a, b) => b.score - a.score || a.seatIndex - b.seatIndex);
  return (
    <section className={`paper scoreboard ${final ? "final-scores" : ""}`}>
      <h2>{final ? "The convincingest of the bunch" : "The scores so far"}</h2>
      {sorted.map((player, index) => (
        <div
          className={`score-row ${final && player.score === sorted[0]?.score ? "leader" : ""}`}
          key={player.playerId}
        >
          <span className="rank">
            {index > 0 && player.score === sorted[index - 1]?.score ? "=" : index + 1}
          </span>
          <Face small seat={player.seatIndex} />
          <strong>{player.name}</strong>
          {player.roundPoints > 0 && <span className="points-gained">+{player.roundPoints}</span>}
          <span className="score">
            {player.score}
            <small>pts</small>
          </span>
        </div>
      ))}
    </section>
  );
}
function Play({
  game,
  token,
  host,
  online,
  now,
  viewerId,
}: {
  game: GameView;
  token: string;
  host: boolean;
  online: boolean;
  now: number;
  viewerId: string;
}) {
  const submit = useMutation(api.game.submit);
  const vote = useMutation(api.game.vote);
  const advance = useMutation(api.game.advance);
  const storageKey = `poppycock:draft:${game.gameId}:${game.round}`;
  const [text, setText] = useState(() => game.ownText ?? sessionStorage.getItem(storageKey) ?? "");
  const [selected, setSelected] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const seconds = Math.max(0, Math.ceil((game.deadline - now) / 1000));
  const reveal = game.phase === "reveal";
  const name = (id: string) =>
    game.players.find((player) => player.playerId === id)?.name ?? "A departed friend";
  async function action(kind: "submit" | "vote" | "advance") {
    setBusy(true);
    setError("");
    try {
      const args = { gameId: game.gameId as Id<"games">, guestToken: token, round: game.round };
      if (kind === "submit") await submit({ ...args, text });
      if (kind === "vote" && selected) await vote({ ...args, optionId: selected as Id<"options"> });
      if (kind === "advance") await advance({ ...args, phase: game.phase });
    } catch (cause) {
      setError(message(cause));
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="play-area">
      <div className="round-strip">
        <span>
          Round <strong>{game.round}</strong> of {game.totalRounds}
        </span>
        <div className="round-dots" aria-hidden="true">
          {Array.from({ length: game.totalRounds }, (_, i) => (
            <i className={i + 1 <= game.round ? "filled" : ""} key={i} />
          ))}
        </div>
        <span className={`timer ${seconds < 15 && !reveal ? "urgent" : ""}`}>
          {reveal
            ? "The reveal"
            : seconds > 0
              ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
              : "Wrapping up…"}
        </span>
      </div>
      {!game.participant && (
        <p className="notice">You’re watching this game. You’ll get a seat in the next one.</p>
      )}
      <section className="question-sheet">
        <span className="category">{game.prompt.category}</span>
        <h1>{game.prompt.question}</h1>
        <p>
          {reveal
            ? "And the truth, strange as it seems…"
            : game.phase === "writing"
              ? "Make it believable. Make it yours."
              : "One of these is true. The others? Your friends."}
        </p>
      </section>
      {error && (
        <p className="notice error" role="alert">
          {error}
        </p>
      )}
      {game.phase === "writing" && (
        <section className="paper answer-paper">
          {game.participant && !game.submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void action("submit");
              }}
            >
              <label htmlFor="bluff">Your remarkably plausible answer</label>
              <textarea
                id="bluff"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  sessionStorage.setItem(storageKey, e.target.value);
                }}
                maxLength={180}
                minLength={2}
                placeholder="Say it with confidence…"
                required
              />
              <div className="answer-footer">
                <span>{text.length}/180</span>
                <button
                  className="primary"
                  disabled={busy || !online || seconds === 0 || text.trim().length < 2}
                >
                  {busy ? "Saving your lie…" : "Lock in my bluff"}
                </button>
              </div>
              <p className="muted">Once it’s in, it’s in. Keep your answer to yourself.</p>
            </form>
          ) : (
            <div className="waiting-state">
              <Face seat={4} />
              <h2>{game.submitted ? "That sounds almost true." : "The bluffs are brewing."}</h2>
              <p>
                {game.submitted
                  ? "Your answer is locked in. Put on your most innocent face."
                  : "See what everyone comes up with when the voting opens."}
              </p>
              {game.ownText && <blockquote>{game.ownText}</blockquote>}
            </div>
          )}
          <div className="progress-note" role="status">
            {game.submissionCount} of {game.playerCount} answers are in.
          </div>
        </section>
      )}
      {game.phase === "voting" && (
        <section className="voting-area">
          <h2>
            {game.voted
              ? "Your part is done."
              : game.participant
                ? "Which one is the truth?"
                : "The suspects"}
          </h2>
          <div className="options">
            {game.options.map((option, i) => (
              <button
                key={option.id}
                className={`option ${selected === option.id ? "chosen" : ""} ${option.own ? "own-option" : ""}`}
                disabled={
                  !game.participant || game.voted || option.own || busy || !online || seconds === 0
                }
                onClick={() => setSelected(option.id)}
                aria-pressed={selected === option.id}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span>
                  {option.text}
                  {option.own && <small>Your answer — no self-votes</small>}
                </span>
                <span className="option-mark">{selected === option.id ? "●" : "○"}</span>
              </button>
            ))}
          </div>
          {game.participant && !game.voted && (
            <button
              className="primary vote-lock"
              disabled={!selected || busy || !online || seconds === 0}
              onClick={() => void action("vote")}
            >
              {busy ? "Saving your pick…" : "Lock in my vote"}
            </button>
          )}
          <p className="progress-note" role="status">
            {game.voteCount} votes locked in.{" "}
            {game.voted ? "Sit tight for the reveal." : "Go with your gut. Or don’t."}
          </p>
        </section>
      )}
      {reveal && (
        <>
          <section className="truth-slip">
            <span className="truth-label">The honest-to-goodness truth</span>
            <h2>{game.truth}</h2>
            {game.source && (
              <p>
                <a href={game.source.url} target="_blank" rel="noreferrer">
                  Check the source: {game.source.title}
                </a>
                <span className="source-note">{game.source.note}</span>
              </p>
            )}
          </section>
          <section className="reveal-options">
            <h2>Who sold you what?</h2>
            {game.options.map((option, i) => (
              <article
                key={option.id}
                className={`reveal-option ${option.truth ? "real-answer" : ""}`}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <div>
                  <h3>{option.text}</h3>
                  <p className="authorship">
                    {option.truth
                      ? "The truth"
                      : `A bluff by ${(option.authors ?? []).map(name).join(" & ")}`}
                    {option.truth && option.authors?.length
                      ? ` · Also known by ${option.authors.map(name).join(" & ")}`
                      : ""}
                  </p>
                  <p>
                    {option.voters?.length
                      ? `${option.truth ? "Spotted by" : "Fooled"} ${option.voters.map((id) => (id === viewerId ? "you" : name(id))).join(", ")}`
                      : "No takers"}
                  </p>
                </div>
                <span className="vote-tally">
                  {option.voters?.length ?? 0}
                  <small>votes</small>
                </span>
              </article>
            ))}
          </section>
          <Scoreboard game={game} />
          <div className="next-round">
            {game.participant && (host || game.canAdvance || seconds === 0) ? (
              <button
                className="primary"
                disabled={busy || !online}
                onClick={() => void action("advance")}
              >
                {busy
                  ? "Dealing…"
                  : game.round === game.totalRounds
                    ? "See the final standings"
                    : "Deal the next question"}
              </button>
            ) : (
              <p>
                {game.participant
                  ? `Your host can deal now. Any player can continue in ${seconds}s.`
                  : "The players will deal the next question shortly."}
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
