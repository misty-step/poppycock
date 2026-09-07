"use client";

import { useRef, useState, type RefObject } from "react";
import { useMutation } from "convex/react";
import { Face } from "@/app/avatar";
import { api } from "@/convex/_generated/api";
import { AVATAR_IDS, AVATAR_NAMES, type AvatarId } from "@/lib/avatars";
import { gameError } from "@/lib/game-error";
import { BusyIcon, ErrorNotice } from "@/components/game-ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const characters = AVATAR_IDS.map((id) => ({
  id,
  label: AVATAR_NAMES[id],
  name: AVATAR_NAMES[id].split(" ")[0],
}));

export function AvatarPicker({
  open,
  current,
  token,
  online,
  onClose,
  returnFocus,
}: {
  open: boolean;
  current: AvatarId;
  token: string;
  online: boolean;
  onClose: () => void;
  returnFocus: RefObject<HTMLElement | null>;
}) {
  const choose = useMutation(api.avatars.choose);
  const [choice, setChoice] = useState<AvatarId | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  const selected = choice ?? current;

  function close() {
    if (busy) return;
    setChoice(null);
    setError("");
    onClose();
  }

  async function save() {
    if (busy || !online) return;
    setBusy(true);
    setError("");
    try {
      await choose({ avatarId: selected, guestToken: token });
      setChoice(null);
      onClose();
    } catch (cause) {
      setError(gameError(cause));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent
        className="avatar-dialog"
        initialFocus={title}
        finalFocus={returnFocus}
        showCloseButton={!busy}
      >
        <DialogHeader>
          <DialogTitle ref={title} tabIndex={-1} className="outline-none">
            Choose your avatar
          </DialogTitle>
          <DialogDescription>Pick a character to use at every table.</DialogDescription>
        </DialogHeader>
        <form
          className="avatar-form min-w-0"
          onSubmit={(event) => {
            event.preventDefault();
            void save();
          }}
        >
          <div className="avatar-options">
            <RadioGroup
              aria-label="Your avatar"
              value={selected}
              disabled={busy}
              onValueChange={(value) => {
                setChoice(value as AvatarId);
                setError("");
              }}
              className="avatar-grid"
            >
              {characters.map(({ id, label, name }) => (
                <label className="avatar-choice" key={id}>
                  <span className="justify-self-center">
                    <Face avatarId={id} />
                  </span>
                  <span className="text-center text-sm leading-snug wrap-anywhere">
                    <span aria-hidden="true">{name}</span>
                    <span className="sr-only">{label}</span>
                  </span>
                  <RadioGroupItem value={id} className="absolute top-1 right-1 size-4" />
                </label>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-4">
            {error && <ErrorNotice message={error} />}
            {!online && (
              <p className="text-sm text-muted-foreground" role="status">
                Reconnect to save your avatar.
              </p>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" disabled={busy} onClick={close}>
                Cancel
              </Button>
              <Button type="submit" disabled={busy || !online} aria-busy={busy}>
                {busy && <BusyIcon />}
                Save avatar
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
