"use client";

import { useId, useRef, type ReactNode, type RefObject } from "react";
import { CircleAlert, CircleHelp, LoaderCircle, Trophy } from "lucide-react";
import type { GameView } from "@/lib/game-types";
import { Face } from "@/app/avatar";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Brand() {
  return (
    <span className="wordmark" aria-label="Poppycock">
      poppycock<span aria-hidden="true">!</span>
    </span>
  );
}

export function BusyIcon() {
  return <LoaderCircle className="size-4 shrink-0 motion-safe:animate-spin" aria-hidden="true" />;
}

export function ErrorNotice({ message, id }: { message: string; id?: string }) {
  return (
    <div className="error-notice" role="alert" id={id}>
      <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  onConfirm,
  busy = false,
  error,
  unavailable,
  destructive = false,
  cancelLabel = "Cancel",
  returnFocus,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: ReactNode;
  confirmLabel: string;
  onConfirm: () => void;
  busy?: boolean;
  error?: string;
  unavailable?: string;
  destructive?: boolean;
  cancelLabel?: string;
  returnFocus?: RefObject<HTMLElement | null>;
}) {
  const cancel = useRef<HTMLButtonElement>(null);
  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (!busy) onOpenChange(next);
      }}
    >
      <AlertDialogContent initialFocus={cancel} finalFocus={returnFocus}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription render={<div />} className="space-y-3">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {error && <ErrorNotice message={error} />}
        {unavailable && (
          <p className="text-sm text-muted-foreground" role="status">
            {unavailable}
          </p>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel ref={cancel} disabled={busy}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            variant={destructive ? "destructive" : "default"}
            disabled={busy || Boolean(unavailable)}
            aria-busy={busy}
            onClick={onConfirm}
          >
            {busy && <BusyIcon />}
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function RulesDialog({
  open,
  onOpenChange,
  returnFocus,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  returnFocus?: RefObject<HTMLElement | null>;
}) {
  const title = useRef<HTMLHeadingElement>(null);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {open === undefined && (
        <DialogTrigger render={<Button variant="ghost" size="sm" />}>
          <CircleHelp aria-hidden="true" />
          How to play
        </DialogTrigger>
      )}
      <DialogContent initialFocus={title} finalFocus={returnFocus}>
        <DialogHeader>
          <DialogTitle ref={title} tabIndex={-1} className="outline-none">
            How to play
          </DialogTitle>
          <DialogDescription>3–12 players. Six rounds. No time limit.</DialogDescription>
        </DialogHeader>
        <ol className="rules-steps">
          <li>
            <span aria-hidden="true">1</span>
            <div>
              <h3>Write an answer</h3>
              <p>
                Everyone gets the same question. Invent a believable answer and submit it. You can't
                change it afterward.
              </p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <div>
              <h3>Find the truth</h3>
              <p>
                The real answer is mixed with everyone's bluffs. Choose one, then lock your vote.
                You can't vote for your own bluff.
              </p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <div>
              <h3>See who you fooled</h3>
              <p>
                Reveal the truth, the bluffs, and the scores. Any player can start the next round
                when the table is ready.
              </p>
            </div>
          </li>
        </ol>
        <div className="rounded-md bg-secondary p-4">
          <h3 className="mb-2 font-bold">Scoring</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt>Vote for the truth</dt>
              <dd className="font-bold tabular-nums">+2 points</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt>Each player who votes for your bluff</dt>
              <dd className="font-bold tabular-nums">+1 point</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt>Write the exact truth (you don't vote that round)</dt>
              <dd className="font-bold tabular-nums">+2 points</dd>
            </div>
          </dl>
        </div>
        <details className="help-disclosure">
          <summary>A few special cases</summary>
          <div className="space-y-3 pt-3 text-sm text-muted-foreground">
            <p>
              Write the exact truth? You earn 2 points and don't vote that round. Matching ignores
              case, spacing, and final punctuation—not differences in meaning.
            </p>
            <p>
              Matching bluffs appear as one choice. Every author earns a point for each player
              fooled. Tied final scores share the win.
            </p>
            <p>
              Writing and voting end when everyone eligible finishes. The host can also end either
              step, skipping unfinished answers or votes. Players who join mid-game watch until the
              next game.
            </p>
          </div>
        </details>
      </DialogContent>
    </Dialog>
  );
}

export function Scoreboard({ game, final = false }: { game: GameView; final?: boolean }) {
  const id = useId();
  const sorted = [...game.players].sort((a, b) => b.score - a.score || a.seatIndex - b.seatIndex);
  let rank = 0;
  return (
    <section className="surface-panel scoreboard" aria-labelledby={id}>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <h2 id={id} className="section-title flex items-center gap-2">
            <Trophy className="size-6 shrink-0 text-primary" aria-hidden="true" />
            {final ? "Final scores" : "Scores"}
          </h2>
          {final && (
            <p className="supporting-copy text-sm">A round of applause for the whole table.</p>
          )}
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">Points</span>
      </div>
      <ol className="score-list">
        {sorted.map((player, index) => {
          if (index === 0 || player.score !== sorted[index - 1]?.score) rank = index + 1;
          return (
            <li
              className="score-row"
              data-leader={final && rank === 1 ? "true" : undefined}
              key={player.playerId}
            >
              <span className="w-5 shrink-0 text-center text-sm font-bold tabular-nums">
                <span className="sr-only">Rank </span>
                {rank}
              </span>
              <Face small playerId={player.playerId} seat={player.seatIndex} />
              <div className="min-w-0 flex-1">
                <p className="font-bold wrap-anywhere">{player.name}</p>
                {!final && player.roundPoints > 0 && (
                  <p className="text-sm font-bold text-success tabular-nums">
                    +{player.roundPoints} this round
                  </p>
                )}
              </div>
              <strong className="score-total text-2xl tabular-nums">
                {player.score}
                <span className="sr-only"> points</span>
              </strong>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
