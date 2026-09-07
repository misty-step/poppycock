"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useMutation } from "convex/react";
import { normalizeDisplayName, ROOM_CODE_ALPHABET, ROOM_CODE_LENGTH } from "@parlor/core";
import { Face } from "@/app/avatar";
import { BusyIcon, ErrorNotice } from "@/components/game-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { gameError, gameErrorCode } from "@/lib/game-error";

const nameInstruction = "Enter a name between 1 and 24 characters.";
const codeInstruction = "Enter the four-character room code from your host.";

export function Entrance({
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
  const [name, setName] = useState("");
  const [code, setCode] = useState(() =>
    initialCode.toUpperCase().replace(/\s/g, "").slice(0, ROOM_CODE_LENGTH),
  );
  const [mode, setMode] = useState<"create" | "join">(initialCode ? "join" : "create");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [codeError, setCodeError] = useState("");
  const pending = useRef(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const codeInput = useRef<HTMLInputElement>(null);
  const directJoin = Boolean(initialCode) && mode === "join";
  const actionLabel = mode === "create" ? "Create table" : "Join table";

  useEffect(() => {
    try {
      const savedName = window.localStorage.getItem("poppycock:name");
      if (savedName) setName((current) => current || savedName);
    } catch {
      // Remembering a nickname is optional when browser storage is unavailable.
    }
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    setError("");
    setNameError("");
    setCodeError("");
    nameInput.current?.setCustomValidity(normalizeDisplayName(name).ok ? "" : nameInstruction);
    codeInput.current?.setCustomValidity("");
    if (!event.currentTarget.reportValidity()) return;

    pending.current = true;
    setBusy(true);
    try {
      window.localStorage.setItem("poppycock:name", name.trim());
    } catch {
      // A blocked preference store must not prevent creating or joining a table.
    }

    try {
      if (mode === "create") {
        const result = await create({ displayName: name, guestToken: token });
        enter(result.roomId);
      } else {
        const result = await join({ displayName: name, code, guestToken: token });
        if (!result.ok) throw { data: { code: result.code } };
        enter(result.roomId);
      }
    } catch (cause) {
      const message = gameError(cause);
      const failure = gameErrorCode(cause);
      if (failure === "INVALID_DISPLAY_NAME") {
        setNameError(message);
        nameInput.current?.focus();
      } else if (
        mode === "join" &&
        (failure === "INVALID_ROOM_CODE" ||
          failure === "ROOM_NOT_OPEN" ||
          failure === "ROOM_NOT_FOUND")
      ) {
        setCodeError(message);
        codeInput.current?.focus();
      } else {
        setError(message);
      }
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  const form = (
    <form
      noValidate
      onSubmit={submit}
      aria-label={actionLabel}
      aria-busy={busy}
      aria-describedby={error ? "entrance-error" : undefined}
      className="grid min-w-0 gap-6"
    >
      <div className="grid min-w-0 gap-2">
        <label htmlFor="name" className="text-base font-bold">
          Your name
        </label>
        <Input
          ref={nameInput}
          id="name"
          name="displayName"
          autoComplete="nickname"
          value={name}
          required
          readOnly={busy}
          aria-invalid={Boolean(nameError)}
          aria-describedby={`name-help${nameError ? " name-error" : ""}`}
          onChange={(event) => {
            event.currentTarget.setCustomValidity("");
            setName(event.currentTarget.value);
            setNameError("");
            setError("");
          }}
          onInvalid={(event) => setNameError(event.currentTarget.validationMessage)}
        />
        <p id="name-help" className="text-sm text-muted-foreground">
          Shown to other players.
        </p>
        {nameError && <ErrorNotice id="name-error" message={nameError} />}
      </div>

      {mode === "join" && (
        <div className="grid min-w-0 gap-2">
          <label htmlFor="code" className="text-base font-bold">
            Room code
          </label>
          <Input
            ref={codeInput}
            id="code"
            name="roomCode"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            value={code}
            required
            minLength={ROOM_CODE_LENGTH}
            maxLength={ROOM_CODE_LENGTH}
            pattern={`[${ROOM_CODE_ALPHABET}]{${ROOM_CODE_LENGTH}}`}
            readOnly={busy}
            aria-invalid={Boolean(codeError)}
            aria-describedby={`code-help${codeError ? " code-error" : ""}`}
            onChange={(event) => {
              event.currentTarget.setCustomValidity("");
              setCode(
                event.currentTarget.value
                  .toUpperCase()
                  .replace(/\s/g, "")
                  .slice(0, ROOM_CODE_LENGTH),
              );
              setCodeError("");
              setError("");
            }}
            onInvalid={(event) => {
              event.currentTarget.setCustomValidity(codeInstruction);
              setCodeError(codeInstruction);
            }}
          />
          <p id="code-help" className="text-sm text-muted-foreground">
            The four-character code on your host’s screen.
          </p>
          {codeError && <ErrorNotice id="code-error" message={codeError} />}
        </div>
      )}

      {error && <ErrorNotice id="entrance-error" message={error} />}
      <Button type="submit" disabled={busy} aria-busy={busy} className="w-full">
        {busy && <BusyIcon />}
        {actionLabel}
      </Button>
      <span className="sr-only" role="status">
        {busy ? (mode === "create" ? "Creating table." : "Joining table.") : ""}
      </span>
    </form>
  );

  return (
    <section
      aria-labelledby="entrance-title"
      className={
        directJoin
          ? "mx-auto w-full max-w-lg py-8 md:py-12"
          : "grid min-w-0 gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:gap-x-12 lg:gap-y-8 lg:py-12"
      }
    >
      {!directJoin && (
        <div className="min-w-0 space-y-4 lg:col-start-1 lg:row-start-1">
          <h1 id="entrance-title" className="font-display text-hero text-balance">
            Make it up. Make them believe it.
          </h1>
          <p className="max-w-prose text-base leading-relaxed">
            Make up a believable answer. Then find the truth among your friends’ bluffs.
          </p>
          <ul className="supporting-copy flex flex-wrap gap-x-5 gap-y-1" aria-label="Game details">
            <li>3–12 players</li>
            <li>Six untimed rounds</li>
            <li>One phone each</li>
          </ul>
        </div>
      )}

      <div className="surface-panel min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        {directJoin && (
          <div className="mb-6 space-y-2">
            <h1 id="entrance-title" className="screen-title text-balance">
              Join your friends
            </h1>
            <p className="text-base leading-relaxed">
              Check your name and room code, then join the table.
            </p>
          </div>
        )}
        <Tabs
          value={mode}
          onValueChange={(value) => {
            if (pending.current || value === mode || (value !== "create" && value !== "join"))
              return;
            setMode(value);
            setError("");
            setNameError("");
            setCodeError("");
            nameInput.current?.setCustomValidity("");
            codeInput.current?.setCustomValidity("");
          }}
        >
          <TabsList aria-label="Choose how to play" className="w-full">
            <TabsTrigger value="create" disabled={busy}>
              Create table
            </TabsTrigger>
            <TabsTrigger value="join" disabled={busy}>
              Join table
            </TabsTrigger>
          </TabsList>
          <TabsContent value="create" className="mt-4">
            {mode === "create" && form}
          </TabsContent>
          <TabsContent value="join" className="mt-4">
            {mode === "join" && form}
          </TabsContent>
        </Tabs>
      </div>

      {!directJoin && (
        <figure className="flex min-w-0 items-center gap-4 border-t border-border pt-6 lg:col-start-1 lg:row-start-2">
          <div className="shrink-0">
            <Face seat={0} />
          </div>
          <figcaption className="min-w-0 space-y-1 wrap-anywhere">
            <p className="supporting-copy">Example bluff: What was a knocker-up?</p>
            <blockquote className="text-base font-bold leading-relaxed">
              “A carpenter who tested door knockers.”
            </blockquote>
          </figcaption>
        </figure>
      )}
    </section>
  );
}
