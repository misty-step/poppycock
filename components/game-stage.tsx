"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { BadgeCheckIcon, ChevronDownIcon, LockKeyholeIcon } from "lucide-react";
import { Face } from "@/app/avatar";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { gameError, gameErrorCode } from "@/lib/game-error";
import type { GameView } from "@/lib/game-types";
import { BusyIcon, ConfirmDialog, ErrorNotice, Scoreboard } from "@/components/game-ui";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

type GameStageProps = {
  game: GameView;
  token: string;
  host: boolean;
  online: boolean;
  viewerId: string;
};
type Action = "submit" | "vote" | "advance";
type ActionError = { action: Action; message: string; field?: boolean };

export function GameStage(props: GameStageProps) {
  const { game, viewerId } = props;
  return <RoundPhase key={`${game.gameId}:${game.round}:${game.phase}:${viewerId}`} {...props} />;
}

function RoundPhase({ game, token, host, online, viewerId }: GameStageProps) {
  const submit = useMutation(api.game.submit);
  const vote = useMutation(api.game.vote);
  const advance = useMutation(api.game.advance);
  const storageKey = `poppycock:draft:${game.gameId}:${game.round}`;
  const [text, setText] = useState(
    () =>
      game.ownText ??
      (typeof window === "undefined" ? "" : (sessionStorage.getItem(storageKey) ?? "")),
  );
  const [selected, setSelected] = useState<string | null>(game.ownVoteId ?? null);
  const [pending, setPending] = useState<Action | null>(null);
  const [error, setError] = useState<ActionError | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const answer = useRef<HTMLTextAreaElement>(null);
  const hostTrigger = useRef<HTMLElement | null>(null);
  const active = useRef(false);
  const inFlight = useRef(false);
  const id = useId();
  const headingId = `${id}-heading`;
  const errorId = `${id}-error`;
  const formId = `${id}-answer-form`;
  const unfinished = game.phase === "writing" || game.phase === "voting";
  const reveal = game.phase === "reveal";
  const canWrite = game.phase === "writing" && game.participant && !game.submitted;
  const canVote = game.phase === "voting" && game.participant && !game.voted;
  const exactTruth = game.phase === "voting" && game.participant && game.voted && !game.ownVoteId;
  const readyToContinue = unfinished && !host && game.participant && game.canAdvance;
  const primaryAction: Action | null = canWrite
    ? "submit"
    : canVote
      ? "vote"
      : (reveal && game.participant) || readyToContinue
        ? "advance"
        : null;
  const continueLabel = reveal
    ? game.round === game.totalRounds
      ? "Final scores"
      : "Next round"
    : game.phase === "writing"
      ? "Open voting"
      : "Reveal answers";
  const primaryLabel =
    primaryAction === "submit"
      ? "Submit answer"
      : primaryAction === "vote"
        ? "Lock vote"
        : continueLabel;
  const phaseTitle =
    game.phase === "writing"
      ? game.submitted
        ? "Answer submitted"
        : game.participant
          ? "Write an answer"
          : "Writing"
      : game.phase === "voting"
        ? game.ownVoteId
          ? "Vote locked"
          : exactTruth
            ? "No vote needed"
            : game.participant
              ? "Find the truth"
              : "Voting"
        : reveal
          ? "Round results"
          : game.phase === "finished"
            ? "Final scores"
            : "Game ended";
  const visibleError =
    error &&
    !((error.action === "submit" && game.submitted) || (error.action === "vote" && game.voted))
      ? error
      : null;
  const selectedIndex = game.options.findIndex((option) => option.id === selected && !option.own);
  const viewerSeat = game.players.find((player) => player.playerId === viewerId)?.seatIndex ?? 0;
  const playerName = (playerId: string) =>
    playerId === viewerId
      ? "you"
      : (game.players.find((player) => player.playerId === playerId)?.name ?? "a former player");
  const hostUnavailable = !host
    ? "The host has changed. Only the current host can do this."
    : !online
      ? "Reconnect before moving the table on."
      : !game.canAdvance
        ? "This part of the round can no longer be ended."
        : undefined;
  const actionStatus = !online
    ? pending
      ? "Connection lost. Your action is still pending. Keep this page open."
      : canWrite
        ? "You can keep writing. Reconnect to submit your answer."
        : canVote
          ? "You can keep choosing. Reconnect to lock your vote."
          : "Reconnect before continuing."
    : pending === "submit"
      ? "Submitting your answer."
      : pending === "vote"
        ? "Locking your vote."
        : pending === "advance"
          ? "Moving to the next step."
          : null;

  // Keep pending-action cleanup independent of server receipt updates.
  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
    };
  }, []);

  // Move from the completed form to its receipt, not on ordinary presence updates.
  useEffect(() => {
    heading.current?.focus();
  }, [game.submitted, game.ownVoteId]);

  const rememberHostTrigger = useCallback((node: HTMLButtonElement | null) => {
    // A host change removes the trigger while its confirmation may still be open.
    hostTrigger.current = node ?? heading.current;
  }, []);

  async function perform(action: Action, hostOverride = false) {
    if (inFlight.current || !online || !game.participant) return;
    if (action === "submit" && !canWrite) return;
    if (action === "vote" && (!canVote || selectedIndex < 0 || !selected)) return;
    if (action === "advance" && (!game.canAdvance || (hostOverride && !host))) return;
    inFlight.current = true;
    setPending(action);
    setError(null);
    try {
      const args = { gameId: game.gameId as Id<"games">, guestToken: token, round: game.round };
      if (action === "submit") await submit({ ...args, text });
      else if (action === "vote") await vote({ ...args, optionId: selected as Id<"options"> });
      else await advance({ ...args, phase: game.phase });
      if (active.current && action === "advance") setConfirmOpen(false);
    } catch (cause) {
      if (!active.current) return;
      const code = gameErrorCode(cause);
      const field = action === "submit" && Boolean(code?.startsWith("BLUFF_"));
      setError({ action, message: gameError(cause), field });
      if (field) answer.current?.focus();
    } finally {
      inFlight.current = false;
      if (active.current) setPending(null);
    }
  }

  const question = (
    <section className="min-w-0 space-y-3" aria-label="This round's question">
      <p className="round-category inline-flex max-w-full text-sm font-bold [overflow-wrap:anywhere]">
        {game.prompt.category}
      </p>
      <h2 className="question-card [overflow-wrap:anywhere]">{game.prompt.question}</h2>
    </section>
  );
  const choiceRows =
    game.phase === "voting"
      ? game.options.map((option, index) => {
          const choiceId = `${id}-choice-${index}`;
          const locked = game.ownVoteId === option.id;
          const chosen = (game.ownVoteId ?? selected) === option.id;
          const note = locked
            ? "Your locked vote"
            : option.own
              ? canVote
                ? "Your answer — you can't vote for it"
                : "Your answer"
              : chosen && canVote
                ? "Selected — not locked"
                : null;
          const classes = `option flex min-w-0 items-start gap-3 [overflow-wrap:anywhere] ${
            chosen
              ? "border-primary bg-accent text-accent-foreground"
              : "bg-card text-card-foreground"
          } ${option.own ? "border-input border-dashed" : ""}`;
          const content = (
            <>
              <span id={`${choiceId}-letter`} className="shrink-0 font-bold">
                <span className="sr-only">Answer </span>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="min-w-0 flex-1 space-y-2">
                <span id={`${choiceId}-text`} className="option-text block">
                  {option.text}
                </span>
                {note && (
                  <span
                    id={`${choiceId}-note`}
                    className="flex items-start gap-2 text-sm font-bold"
                  >
                    {locked && (
                      <LockKeyholeIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    )}
                    {note}
                  </span>
                )}
              </span>
            </>
          );
          return canVote ? (
            <label
              key={option.id}
              htmlFor={choiceId}
              className={`${classes} has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background ${option.own || pending ? "cursor-default" : "cursor-pointer"}`}
              data-own={option.own || undefined}
              data-selected={chosen || undefined}
            >
              {content}
              <RadioGroupItem
                id={choiceId}
                value={option.id}
                disabled={option.own}
                aria-labelledby={`${choiceId}-letter ${choiceId}-text`}
                aria-describedby={note ? `${choiceId}-note` : undefined}
                className="mt-1"
              />
            </label>
          ) : (
            <article
              key={option.id}
              className={classes}
              data-own={option.own || undefined}
              data-accepted={locked || undefined}
              aria-labelledby={`${choiceId}-letter ${choiceId}-text`}
              aria-describedby={note ? `${choiceId}-note` : undefined}
            >
              {content}
            </article>
          );
        })
      : null;

  return (
    <section
      className="space-y-6"
      aria-labelledby={headingId}
      data-phase={game.phase}
      data-round={game.round}
    >
      <header className="round-heading space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p id={`${id}-round`} className="round-marker tabular-nums">
            Round <strong className="text-2xl">{game.round}</strong> of {game.totalRounds}
          </p>
          {unfinished && host && game.participant && (
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button ref={rememberHostTrigger} variant="outline" />}>
                Host controls <ChevronDownIcon aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 max-w-[calc(100vw-2rem)]"
                finalFocus={confirmOpen ? false : hostTrigger}
              >
                <DropdownMenuItem
                  disabled={Boolean(pending) || Boolean(hostUnavailable)}
                  onClick={() => {
                    setError(null);
                    setConfirmOpen(true);
                  }}
                >
                  {game.phase === "writing" ? "End writing" : "Reveal answers"}
                </DropdownMenuItem>
                {(hostUnavailable || pending) && (
                  <p className="supporting-copy px-3 py-2">
                    {hostUnavailable ?? "Wait for your current action to finish."}
                  </p>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <h1
          ref={heading}
          id={headingId}
          tabIndex={-1}
          className="screen-title outline-none"
          aria-describedby={`${id}-round`}
          aria-live="polite"
          aria-atomic="true"
        >
          {phaseTitle}
        </h1>
      </header>

      {unfinished && (
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
          {question}
          <section
            className="min-w-0 space-y-4"
            aria-label={game.phase === "writing" ? "Writing turn" : "Answers"}
          >
            {game.phase === "writing" ? (
              <>
                {canWrite ? (
                  <form
                    id={formId}
                    className="surface-panel space-y-4"
                    aria-busy={pending === "submit"}
                    onSubmit={(event) => {
                      event.preventDefault();
                      void perform("submit");
                    }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="bluff" className="block font-bold">
                        Your answer
                      </label>
                      <Textarea
                        ref={answer}
                        id="bluff"
                        name="bluff"
                        value={text}
                        rows={4}
                        required
                        maxLength={180}
                        readOnly={Boolean(pending)}
                        aria-invalid={visibleError?.field || undefined}
                        aria-describedby={`${id}-answer-hint ${id}-answer-count${visibleError ? ` ${errorId}` : ""}`}
                        onChange={(event) => {
                          setText(event.target.value);
                          sessionStorage.setItem(storageKey, event.target.value);
                          if (error?.action === "submit") setError(null);
                        }}
                      />
                      <p
                        id={`${id}-answer-count`}
                        className="supporting-copy text-right tabular-nums"
                      >
                        {text.length} / 180 characters
                      </p>
                    </div>
                    <p id={`${id}-answer-hint`} className="supporting-copy">
                      Make it believable enough to fool the table. Once submitted, your answer is
                      locked.
                    </p>
                  </form>
                ) : game.submitted ? (
                  <div className="surface-panel space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0" aria-hidden="true">
                        <Face playerId={viewerId} seat={viewerSeat} small />
                      </span>
                      <p>Your answer can't be changed. Voting opens when writing ends.</p>
                    </div>
                    {game.ownText && (
                      <blockquote className="border-l-2 border-success pl-4 [overflow-wrap:anywhere]">
                        {game.ownText}
                      </blockquote>
                    )}
                  </div>
                ) : (
                  <p>You're watching this game. The answers will appear when voting opens.</p>
                )}
                <p className="supporting-copy tabular-nums" role="status">
                  {game.submissionCount} {game.submissionCount === 1 ? "answer" : "answers"}{" "}
                  submitted.
                </p>
              </>
            ) : (
              <>
                <p id={`${id}-vote-hint`}>
                  {exactTruth
                    ? "Your answer matched the truth. You earned 2 points and don't vote this round."
                    : game.ownVoteId
                      ? "Your locked answer is marked below. The truth appears when voting ends."
                      : game.participant
                        ? "Choose one answer, then lock your vote."
                        : "You're watching this game. These answers are read-only while the players vote."}
                </p>
                <p className="supporting-copy tabular-nums" role="status">
                  {game.voteCount} {game.voteCount === 1 ? "vote" : "votes"} locked.
                </p>
                {canVote ? (
                  <RadioGroup
                    name="vote"
                    value={selected ?? ""}
                    readOnly={Boolean(pending)}
                    required
                    aria-labelledby={headingId}
                    aria-describedby={`${id}-vote-hint${visibleError ? ` ${errorId}` : ""}`}
                    className="gap-3"
                    onValueChange={(value) => {
                      if (typeof value !== "string" || pending) return;
                      if (!game.options.some((option) => option.id === value && !option.own))
                        return;
                      setSelected(value);
                      if (error?.action === "vote") setError(null);
                    }}
                  >
                    {choiceRows}
                  </RadioGroup>
                ) : (
                  <div className="space-y-3">{choiceRows}</div>
                )}
              </>
            )}
          </section>
        </div>
      )}

      {reveal && (
        <>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-8">
            <section className="truth-slip surface-panel min-w-0 space-y-3 border-success bg-success-surface text-success">
              <p className="reveal-heading flex items-center gap-2 font-bold">
                <BadgeCheckIcon className="size-6 shrink-0" aria-hidden="true" />
                The truth, at last!
              </p>
              <h2 className="screen-title [overflow-wrap:anywhere]">{game.truth}</h2>
              {game.source && (
                <div className="space-y-2 text-foreground [overflow-wrap:anywhere]">
                  <p>
                    Source:{" "}
                    <a
                      href={game.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {game.source.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                  {game.source.note && (
                    <details>
                      <summary className="min-h-11 cursor-pointer rounded-sm py-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                        About this source
                      </summary>
                      <p className="pt-2">{game.source.note}</p>
                    </details>
                  )}
                </div>
              )}
            </section>
            {question}
          </div>
          <section className="space-y-4" aria-labelledby={`${id}-reveal-answers`}>
            <h2 id={`${id}-reveal-answers`} className="section-title">
              Answers and votes
            </h2>
            <div className="space-y-3">
              {game.options.map((option, index) => (
                <article
                  key={option.id}
                  className={`option flex min-w-0 items-start gap-3 [overflow-wrap:anywhere] ${option.truth ? "border-success bg-success-surface" : "bg-card text-card-foreground"}`}
                  data-truth={option.truth || undefined}
                  data-accepted={game.ownVoteId === option.id || undefined}
                >
                  <span className="shrink-0 font-bold" aria-hidden="true">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="option-text font-bold">{option.text}</h3>
                    <p>
                      {option.truth
                        ? "The truth"
                        : `Written by ${(option.authors ?? []).map(playerName).join(", ")}`}
                      {option.truth && Boolean(option.authors?.length)
                        ? ` · Also answered by ${(option.authors ?? []).map(playerName).join(", ")}`
                        : ""}
                    </p>
                    <p>
                      {option.voters?.length
                        ? `${option.truth ? "Found by" : "Fooled"} ${option.voters.map(playerName).join(", ")}`
                        : "No votes"}
                    </p>
                    {game.ownVoteId === option.id && (
                      <p className="flex items-center gap-2 text-sm font-bold">
                        <LockKeyholeIcon className="size-4" aria-hidden="true" />
                        Your locked vote
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <Scoreboard game={game} />
          {!game.participant && (
            <p className="supporting-copy">
              {game.round === game.totalRounds
                ? "A player will open the final scores when the table is ready."
                : "A player will start the next round when the table is ready."}
            </p>
          )}
        </>
      )}

      {game.phase === "finished" && <Scoreboard game={game} final />}
      {game.phase === "abandoned" && (
        <p>
          This game ended before all six rounds were completed. You can start another game at the
          table.
        </p>
      )}

      {visibleError && !confirmOpen && !primaryAction && (
        <ErrorNotice id={errorId} message={visibleError.message} />
      )}
      {primaryAction && (
        <div className="action-dock space-y-3" aria-busy={Boolean(pending)}>
          {visibleError && !confirmOpen && (
            <ErrorNotice id={errorId} message={visibleError.message} />
          )}
          {actionStatus && (
            <p className="supporting-copy" role="status">
              {actionStatus}
            </p>
          )}
          {primaryAction === "advance" && !game.canAdvance && (
            <p className="supporting-copy">This game can no longer advance.</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {canVote ? (
              <p id={`${id}-selection`} className="supporting-copy" role="status">
                {selectedIndex < 0
                  ? "No answer selected."
                  : `Answer ${String.fromCharCode(65 + selectedIndex)} selected, not locked.`}
              </p>
            ) : (
              <span />
            )}
            <div className="flex flex-col gap-3 sm:flex-row">
              {readyToContinue && primaryAction !== "advance" && (
                <Button
                  variant="outline"
                  disabled={Boolean(pending) || !online}
                  onClick={() => void perform("advance")}
                >
                  {pending === "advance" && <BusyIcon />}
                  {continueLabel}
                </Button>
              )}
              <Button
                type={canWrite ? "submit" : "button"}
                form={canWrite ? formId : undefined}
                disabled={
                  Boolean(pending) ||
                  !online ||
                  (canVote && selectedIndex < 0) ||
                  (primaryAction === "advance" && !game.canAdvance)
                }
                aria-describedby={canVote ? `${id}-vote-hint ${id}-selection` : undefined}
                onClick={canWrite ? undefined : () => void perform(primaryAction)}
              >
                {pending === primaryAction && <BusyIcon />}
                {primaryLabel}
              </Button>
            </div>
          </div>
        </div>
      )}

      {unfinished && (
        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={(open) => {
            if (pending) return;
            setConfirmOpen(open);
            if (!open) setError(null);
          }}
          title={game.phase === "writing" ? "End writing for everyone?" : "Reveal answers now?"}
          description={
            game.phase === "writing"
              ? "Open voting with the answers already submitted. Anyone still writing won't be able to submit an answer this round."
              : "Show the truth and score the locked votes. Anyone still choosing won't be able to vote this round."
          }
          confirmLabel={game.phase === "writing" ? "End writing" : "Reveal answers"}
          cancelLabel={game.phase === "writing" ? "Keep writing" : "Keep voting"}
          onConfirm={() => void perform("advance", true)}
          busy={pending === "advance"}
          error={error?.action === "advance" ? error.message : undefined}
          unavailable={hostUnavailable}
          returnFocus={hostTrigger}
        />
      )}
    </section>
  );
}
