"use client";

import {
  Component,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useConvexConnectionState, useMutation, useQuery } from "convex/react";
import type { FunctionReturnType } from "convex/server";
import { QRCodeDisplay, useHeartbeat, useWakeLock } from "@parlor/react";
import { classifyPresence, type TimestampMs } from "@parlor/core";
import {
  Check,
  CircleHelp,
  Copy,
  LogOut,
  MoreHorizontal,
  Share2,
  Smile,
  WifiOff,
} from "lucide-react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { gameError } from "@/lib/game-error";
import { avatarForSeat } from "@/lib/avatars";
import { useGuest } from "./providers";
import { AvatarContext, Face } from "./avatar";
import { AvatarPicker } from "@/components/avatar-picker";
import { Entrance } from "@/components/entrance";
import { GameStage } from "@/components/game-stage";
import {
  Brand,
  BusyIcon,
  ConfirmDialog,
  ErrorNotice,
  RulesDialog,
  Scoreboard,
} from "@/components/game-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type RoomState = FunctionReturnType<typeof api.rooms.getRoomState>;
type RosterEntry = {
  member: RoomState["members"][number];
  presence: ReturnType<typeof classifyPresence>;
  portrait: number;
};

function StartHeader() {
  return (
    <header className="site-header">
      <Brand />
      <RulesDialog />
    </header>
  );
}

class RoomBoundary extends Component<
  { children: ReactNode; recover: () => void; exit: () => void },
  { error: unknown }
> {
  state: { error: unknown } = { error: null };
  static getDerivedStateFromError(error: unknown) {
    return { error };
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <>
        <StartHeader />
        <main className="mx-auto my-10 max-w-lg space-y-5" id="main-content">
          <h1 className="screen-title">Reconnect to your table</h1>
          <ErrorNotice message={gameError(this.state.error)} />
          <p className="supporting-copy">
            Keep this browser's data to preserve your player identity.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => {
                this.setState({ error: null });
                this.props.recover();
              }}
            >
              Reconnect
            </Button>
            <Button variant="outline" onClick={this.props.exit}>
              Back to start
            </Button>
          </div>
        </main>
      </>
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
    setJoinCode("");
    window.history.replaceState(null, "", "/");
    window.scrollTo(0, 0);
  }
  function exit() {
    localStorage.removeItem("poppycock:room");
    setRoomId(null);
    setJoinCode("");
    window.history.replaceState(null, "", "/");
    window.scrollTo(0, 0);
  }
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to game
      </a>
      {(!mounted || !guest.credential || !roomId) && <StartHeader />}
      {Boolean(guest.error) && (
        <div className="mt-5 space-y-3">
          <ErrorNotice message={gameError(guest.error)} />
          <Button variant="outline" onClick={() => void guest.refresh().catch(() => {})}>
            Reconnect
          </Button>
        </div>
      )}
      {!mounted || !guest.credential ? (
        <main id="main-content" className="loading-screen" role="status">
          <p>Connecting to Poppycock…</p>
        </main>
      ) : roomId ? (
        <RoomBoundary
          key={guest.credential}
          recover={() => void guest.refresh().catch(() => {})}
          exit={exit}
        >
          <Room roomId={roomId} token={guest.credential} exit={exit} />
        </RoomBoundary>
      ) : (
        <main id="main-content">
          <Entrance token={guest.credential} initialCode={joinCode} enter={enter} />
        </main>
      )}
      <footer className="site-footer">
        <span>Bring friends. No accounts needed.</span>
        <span>Built with Parlor</span>
      </footer>
    </div>
  );
}

function useClock() {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
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
function createRequestId() {
  return crypto.getRandomValues(new Uint32Array(4)).join("-");
}

function Invitation({ code, url, showQr = true }: { code: string; url: string; showQr?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [manual, setManual] = useState(false);
  const link = useRef<HTMLInputElement>(null);
  const id = useId();
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setManual(false);
    } catch {
      setManual(true);
      requestAnimationFrame(() => {
        link.current?.focus();
        link.current?.select();
      });
    }
  }
  return (
    <div className="invitation space-y-5 text-center">
      <div>
        <p className="text-sm text-muted-foreground">Room code</p>
        <strong className="table-code">{code}</strong>
      </div>
      {showQr && (
        <div className="mx-auto flex w-fit max-w-full rounded-md bg-white p-3">
          <QRCodeDisplay value={url} size={144} label={`Scan to join table ${code}`} />
        </div>
      )}
      <Button variant="outline" className="w-full" onClick={() => void copy()}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? "Link copied" : "Copy invite link"}
      </Button>
      <p className="sr-only" role="status">
        {copied ? "Invite link copied." : manual ? "Select and copy the invite link below." : ""}
      </p>
      {manual && (
        <div className="space-y-2 text-left">
          <label htmlFor={`${id}-link`} className="text-sm font-bold">
            Copy this invite link
          </label>
          <Input
            ref={link}
            id={`${id}-link`}
            value={url}
            readOnly
            onFocus={(event) => event.target.select()}
          />
        </div>
      )}
    </div>
  );
}

function Roster({
  entries,
  viewerId,
  onChangeAvatar,
}: {
  entries: RosterEntry[];
  viewerId: string;
  onChangeAvatar: (trigger: HTMLButtonElement) => void;
}) {
  return (
    <ul className="m-0 list-none p-0">
      {entries.map(({ member, presence, portrait }) => (
        <li className="player-row flex-wrap" key={member.playerId}>
          <Face small playerId={member.playerId} seat={portrait} />
          <div className="roster-name">
            <strong>
              {member.displayName}
              {member.playerId === viewerId && (
                <span className="ml-1 font-normal text-muted-foreground">(you)</span>
              )}
            </strong>
            <small>
              {member.isHost ? "Host" : "Player"}
              {presence !== "present" ? " · Away" : ""}
            </small>
          </div>
          {member.playerId === viewerId && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) => onChangeAvatar(event.currentTarget)}
            >
              Change avatar
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
}

function Room({ roomId, token, exit }: { roomId: Id<"rooms">; token: string; exit: () => void }) {
  const state = useQuery(api.rooms.getRoomState, { roomId, guestToken: token });
  const game = useQuery(api.game.view, { roomId, guestToken: token });
  const avatars = useQuery(api.avatars.forRoom, { roomId, guestToken: token });
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
  const [dialog, setDialog] = useState<"invite" | "rules" | "leave" | "avatar" | null>(null);
  const [requestId, setRequestId] = useState(createRequestId);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const inviteTrigger = useRef<HTMLButtonElement>(null);
  const dialogReturn = useRef<HTMLElement | null>(null);
  const roomHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (
      state &&
      avatars &&
      (game === null || game?.phase === "finished" || game?.phase === "abandoned")
    )
      roomHeading.current?.focus();
  }, [Boolean(state && avatars), game?.phase]);
  if (!state || game === undefined || avatars === undefined)
    return (
      <>
        <StartHeader />
        <main id="main-content" className="loading-screen" role="status">
          Loading your table…
        </main>
      </>
    );
  const host = state.room.hostPlayerId === state.viewerPlayerId;
  const hostName = state.members.find((member) => member.isHost)?.displayName ?? "The host";
  const online = browserOnline && connection.isWebSocketConnected;
  const active = game && !["finished", "abandoned"].includes(game.phase);
  const joinUrl = `${window.location.origin}/?join=${state.room.code}`;
  const seats = new Map(game?.players.map((player) => [player.playerId, player.seatIndex]));
  const usedPortraits = new Set(
    state.members.flatMap((member) => {
      const seat = seats.get(member.playerId);
      return seat === undefined ? [] : [seat];
    }),
  );
  const entries: RosterEntry[] = state.members.map((member) => {
    let portrait = seats.get(member.playerId);
    if (portrait === undefined) {
      portrait = member.seatIndex;
      if (usedPortraits.has(portrait)) {
        portrait = 0;
        while (usedPortraits.has(portrait)) portrait += 1;
      }
      usedPortraits.add(portrait);
    }
    return {
      member,
      portrait,
      presence: classifyPresence(
        {
          joinedAt: member.joinedAt as TimestampMs,
          ...(member.lastSeenAt === undefined
            ? {}
            : { lastSeenAt: member.lastSeenAt as TimestampMs }),
        },
        now as TimestampMs,
      ),
    };
  });
  const viewerAvatar =
    avatars[state.viewerPlayerId] ??
    avatarForSeat(
      entries.find((entry) => entry.member.playerId === state.viewerPlayerId)?.portrait ?? 0,
    );
  const present = entries.reduce((count, entry) => count + Number(entry.presence === "present"), 0);
  const maxScore = game ? Math.max(...game.players.map((player) => player.score)) : 0;
  const leaders = game?.players.filter((player) => player.score === maxScore) ?? [];
  const finished = game?.phase === "finished";
  function openFromMenu(next: "invite" | "rules" | "leave" | "avatar") {
    dialogReturn.current = menuTrigger.current;
    setError("");
    setDialog(next);
  }
  function openAvatar(trigger: HTMLButtonElement) {
    dialogReturn.current = trigger;
    setDialog("avatar");
  }
  async function begin() {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await start({ roomId, guestToken: token, requestId });
      setRequestId(createRequestId());
    } catch (cause) {
      setError(gameError(cause));
    } finally {
      setBusy(false);
    }
  }
  async function depart() {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await leave({ roomId, guestToken: token });
      exit();
    } catch (cause) {
      setError(gameError(cause));
      setBusy(false);
    }
  }
  if (state.room.closedAt !== undefined)
    return (
      <>
        <StartHeader />
        <main className="mx-auto my-10 max-w-lg space-y-5" id="main-content">
          <h1 className="screen-title">This table has closed</h1>
          <p className="supporting-copy">Create a new table to play another game.</p>
          <Button onClick={exit}>Back to start</Button>
        </main>
      </>
    );
  const startAction = (
    <div className="mt-5 space-y-3 border-t border-border pt-5">
      {host ? (
        <>
          <Button
            className="w-full"
            disabled={busy || present < 3 || !online}
            aria-busy={busy}
            onClick={() => void begin()}
          >
            {busy && <BusyIcon />}
            {game ? "Play again" : "Start game"}
          </Button>
          <p className="text-sm text-muted-foreground" role="status">
            {!online
              ? "Reconnect to start a game."
              : present < 3
                ? `You need ${3 - present} more ${3 - present === 1 ? "player" : "players"} to start.`
                : "Start when everyone is here. Each game has six rounds."}
          </p>
        </>
      ) : (
        <p className="text-sm text-muted-foreground" role="status">
          {hostName} will start {game ? "the next game" : "when everyone is here"}.
        </p>
      )}
    </div>
  );
  return (
    <AvatarContext.Provider value={avatars}>
      <header className="site-header">
        <Brand />
        <nav aria-label="Table controls" className="ml-auto flex items-center gap-2">
          <Button
            ref={inviteTrigger}
            variant="outline"
            size="sm"
            className="room-code"
            aria-label={`Room ${state.room.code}. Invite friends`}
            aria-haspopup="dialog"
            onClick={() => {
              dialogReturn.current = inviteTrigger.current;
              setDialog("invite");
            }}
          >
            <span className="hidden sm:inline">Room</span>
            <strong>{state.room.code}</strong>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  ref={menuTrigger}
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Table options"
                />
              }
            >
              <MoreHorizontal aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => openFromMenu("invite")}>
                <Share2 aria-hidden="true" />
                Invite friends
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => openFromMenu("rules")}>
                <CircleHelp aria-hidden="true" />
                How to play
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => openFromMenu("avatar")}>
                <Smile aria-hidden="true" />
                Change avatar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                disabled={busy}
                onClick={() => openFromMenu("leave")}
              >
                <LogOut aria-hidden="true" />
                Leave table
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <div role="status" aria-live="polite">
        {(!online || heartbeat.status === "degraded") && (
          <div className="connection-notice">
            <WifiOff className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              {!online
                ? "Reconnecting. Keep this page open; your submitted answers and votes are saved."
                : "Restoring your connection to the table."}
            </p>
          </div>
        )}
      </div>
      {error && dialog !== "leave" && (
        <div className="mt-5">
          <ErrorNotice message={error} />
        </div>
      )}
      <main id="main-content">
        {active ? (
          <GameStage
            game={game}
            token={token}
            host={host}
            online={online}
            viewerId={state.viewerPlayerId}
          />
        ) : (
          <>
            <section className="lobby-heading flex items-start justify-between gap-5">
              <div className="min-w-0 space-y-2">
                <h1 ref={roomHeading} tabIndex={-1} className="screen-title outline-none">
                  {finished
                    ? leaders.length === 1
                      ? `${leaders[0]!.name} wins!`
                      : leaders.length === game.players.length
                        ? "Everyone ties!"
                        : `${leaders.length} players tie for first`
                    : game?.phase === "abandoned"
                      ? "Ready for another game?"
                      : "Your table"}
                </h1>
                <p className="supporting-copy">
                  {finished
                    ? "Six rounds played. One more game?"
                    : game?.phase === "abandoned"
                      ? "The last game has ended. Your table is still open."
                      : "Gather 3–12 players. Everyone uses their own phone."}
                </p>
              </div>
              {finished && leaders.length === 1 && (
                <div className="hidden sm:block">
                  <Face playerId={leaders[0]!.playerId} seat={leaders[0]!.seatIndex} />
                </div>
              )}
            </section>
            {finished ? (
              <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_320px]">
                <Scoreboard game={game} final />
                <section className="surface-panel">
                  <h2 className="section-title">Same table, next game</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Everyone at this table can join the next game, including anyone who was
                    watching.
                  </p>
                  {startAction}
                  <details className="help-disclosure mt-4 border-t border-border">
                    <summary>{state.members.length} players at the table</summary>
                    <Roster
                      entries={entries}
                      viewerId={state.viewerPlayerId}
                      onChangeAvatar={openAvatar}
                    />
                  </details>
                </section>
              </div>
            ) : (
              <div className="lobby-grid">
                <aside className="invite-board">
                  <h2 className="section-title mb-2">Invite your friends</h2>
                  <p className="mb-5 text-sm text-muted-foreground">
                    Friends use this code to join your table.
                  </p>
                  <Invitation code={state.room.code} url={joinUrl} showQr={false} />
                  <Button
                    variant="ghost"
                    className="mt-3 w-full"
                    onClick={(event) => {
                      dialogReturn.current = event.currentTarget;
                      setDialog("invite");
                    }}
                  >
                    Show QR code
                  </Button>
                </aside>
                <section className="surface-panel">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="section-title">Players</h2>
                    <p className="text-sm text-muted-foreground tabular-nums">
                      {state.members.length} of 12 players
                    </p>
                  </div>
                  <Roster
                    entries={entries}
                    viewerId={state.viewerPlayerId}
                    onChangeAvatar={openAvatar}
                  />
                  {startAction}
                </section>
              </div>
            )}
          </>
        )}
      </main>
      <Dialog
        open={dialog === "invite"}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent finalFocus={dialogReturn}>
          <DialogHeader>
            <DialogTitle>Invite friends</DialogTitle>
            <DialogDescription>
              Share this code or link. Each player joins on their own phone.
            </DialogDescription>
          </DialogHeader>
          <Invitation code={state.room.code} url={joinUrl} />
        </DialogContent>
      </Dialog>
      <RulesDialog
        open={dialog === "rules"}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
        returnFocus={dialogReturn}
      />
      <AvatarPicker
        open={dialog === "avatar"}
        current={viewerAvatar}
        token={token}
        online={online}
        onClose={() => setDialog(null)}
        returnFocus={dialogReturn}
      />
      <ConfirmDialog
        open={dialog === "leave"}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
        title="Leave this table?"
        description={
          state.members.length === 1 ? (
            <p>
              You're the last player. Leaving closes the table and ends any game still in progress.
            </p>
          ) : (
            <>
              <p>
                Your submitted answers and scores stay in this game. You can rejoin with code{" "}
                <strong>{state.room.code}</strong> in this browser if the table is still open and
                has space.
              </p>
              {host && <p>Another player will become the host.</p>}
            </>
          )
        }
        confirmLabel="Leave table"
        cancelLabel="Stay"
        destructive
        onConfirm={() => void depart()}
        busy={busy}
        error={error}
        unavailable={!online ? "Reconnect before leaving the table." : undefined}
        returnFocus={dialogReturn}
      />
    </AvatarContext.Provider>
  );
}
