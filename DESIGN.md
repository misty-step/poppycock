---
version: alpha
name: Poppycock — the party system
description: A loud, characterful party interface for an untimed bluffing game.
colors:
  primary: "#6537B5"
  on-primary: "#FFFFFF"
  background: "#F6F0FF"
  on-background: "#302044"
  surface: "#FFFFFF"
  on-surface: "#302044"
  secondary: "#E8DCFA"
  on-secondary: "#302044"
  accent: "#FFD166"
  on-accent: "#302044"
  muted: "#EEE8F4"
  on-muted: "#67566F"
  border: "#DBD0E5"
  input: "#887992"
  focus: "#0F62C8"
  success: "#276348"
  success-surface: "#E6F2EA"
  danger: "#A52F3B"
  on-danger: "#FFFFFF"
  danger-surface: "#FBEDEF"
  mint: "#BFE8D4"
  party-coral: "#FFAB96"
typography:
  display-lg:
    fontFamily: Fredoka
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.035em
  display-md:
    fontFamily: Fredoka
    fontSize: 2.75rem
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: -0.025em
  heading:
    fontFamily: Fredoka
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.015em
  body:
    fontFamily: Atkinson Hyperlegible
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Atkinson Hyperlegible
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1.5
  small:
    fontFamily: Atkinson Hyperlegible
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 8px
  md: 12px
  lg: 24px
  bubble: 24px 24px 24px 6px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: 48px
    padding: "{spacing.lg}"
    shadow: 0 3px 0 mix({colors.primary}, {colors.on-background})
  button-disabled:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: 48px
  button-destructive:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: 48px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    height: 48px
    padding: "{spacing.md}"
  entrance-ticket:
    backgroundColor: mix({colors.accent} 28%, {colors.surface})
    topBorder: 8px {colors.accent}
    rounded: 28px
    padding: "{spacing.xl}"
  invitation-board:
    backgroundColor: "{colors.party-coral}"
    textColor: "{colors.on-background}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  round-marker:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: 16px 16px 16px 4px
  category-chip:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-background}"
    typography: "{typography.small}"
    rounded: 10px
  answer-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  answer-option-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  question:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-md}"
    rounded: "{rounded.bubble}"
    padding: "{spacing.xl}"
  truth:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.success}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  error:
    backgroundColor: "{colors.danger-surface}"
    textColor: "{colors.danger}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
---

# Poppycock design system

## Overview

Poppycock is a shared-table bluffing game for 3–12 friends, played on separate phones. The interface should feel like a party already in progress and still help people look back up at one another. It is not a dashboard, a children's learning app, or a page of advertising slogans.

The direction is **a colorful party-game box**: a lilac room, grape ink, marigold, coral, and mint surfaces, speech bubbles for anything being said, and forty-eight expressive illustrated characters. The characters, wordmark, and color carry the fun. Questions, answers, scores, and controls stay literal and legible. Be loud with color and shape; never with the words a player needs to act on.

This document follows Google's [DESIGN.md alpha specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md). Frontmatter holds normative tokens; prose explains their application. The implementation uses those values in `app/globals.css`, genuine locally owned [shadcn Base UI components](https://ui.shadcn.com/docs), and the portraits in `public/avatars`, rendered by `app/avatar.tsx`. Interface guidance is informed by [Jakub Krehel's skills](https://github.com/jakubkrehel/skills), especially layout, accessibility, typography, and product writing. Neither a component library nor this document is a claim of accessibility certification.

## Colors

**Grape** (`primary`) anchors the one primary action, the wordmark, and the round marker. **Party lilac** (`background`) is the room, and its deeper `secondary` shade marks celebration, category chips, and resting tabs. **White paper** (`surface`) carries readable content. **Mint** (`mint`) is the question bubble. **Coral** (`party-coral`) is the invitation. **Marigold** (`accent`) identifies a selected answer, the entrance ticket, and a final winner; it never means an error. **Garden green** (`success`) identifies revealed truth and earned points.

Use semantic tokens, not ad hoc hexadecimal colors in screen components. Artwork is the deliberate exception: its existing illustrated colors remain intact. Muted text is `on-muted`, never the border color or a translucent foreground. Danger is reserved for an error or leaving a table, not an ordinary next round. Selection, truth, errors, and locked states also have text, icons, or a border change; color alone is insufficient.

Maintain WCAG 2.x contrast: 4.5:1 for normal text, 3:1 for large text and essential non-text indicators. Colored party surfaces carry `on-background` text, not muted grey; supporting copy on coral is darkened rather than faded. The light `border` separates non-interactive groups; input bounds use the darker `input`. `focus` is deliberately blue so a focused control never reads as a selected one, and it keeps space from any selection border. Do not fade entire waiting screens or submitted answers.

## Typography

Keep the locally served **Fredoka** and **Atkinson Hyperlegible** families. Fredoka is the party voice: wordmark, entrance headline, screen and section titles, question, round marker, and score totals. Atkinson handles instructions, answer choices, names, controls, and fine print, where character shapes matter more than personality.

Use the token roles rather than improvising a new size per panel. Entrance display scales from 44px on narrow phones to 72px on wide screens. Screen titles scale to 44px; questions scale with the wrapping question section so a two-column reveal shrinks the heading instead of using the viewport. Body and every editable control stay at 16px or larger. Use the 14px small role for fine print; muting explanatory copy does not require shrinking it. Scores and counts use tabular numerals.

Balance short headings; let body text wrap naturally. Keep paragraphs around 60 characters per line. Full player names, questions, and answer text must remain available on touch screens: wrap long unbroken strings rather than clipping or substituting a hover tooltip. Do not manufacture hierarchy with all-caps eyebrows or excessive tracking. Room codes are the exception to ordinary tracking because they must be read across a table.

Four-character room codes scale within their invitation container so enlarged text does not widen the viewport or split the code.

## Layout

Design mobile first at 320px, with 16px inline gutters and safe-area insets. The application expands to a 1040px content frame. Related elements sit 8–12px apart; groups sit 24–32px apart. Text containers grow. Use minimum heights for touch controls, never fixed heights for paragraphs or options.

Entrance: a compact brand header, one loud proposition, then a create/join ticket. On desktop, the proposition and the illustrated example bluff occupy the left column; the ticket occupies the right. On a phone, document order reaches the inputs before the decorative cast, so the form is never pushed below a full-screen poster. A join invitation leads with the join form rather than repeating the promotional introduction.

Lobby: make the room code and invitation useful, not decorative. Group the invitation and roster, then the host's start action. On desktop these can sit side by side; on mobile they stack. Show the actual minimum-player requirement next to a disabled start action.

During a round: a compact header, round/phase context, the question, and the player's task. Desktop can place the question beside the answer area. Mobile uses one column and compact question padding so choices appear promptly. A sticky vote/continue dock stays in document flow, respects safe areas, and must not obscure the final choice, focused field, or on-screen keyboard.

Reveal: truth first, then attribution and round scores. The source title is visible; lengthy editorial provenance is disclosed on request. Final standings lead with the celebrated result, the winner's portrait on a single marigold burst, and the replay action. The roster is secondary rather than a second full-sized copy of the score list.

## Elevation & Depth

Depth is printed, not glossy. A party surface may carry one flat offset shadow with no blur — the primary action, the entrance ticket, the invitation board, and the example-bluff bubble each use one. Everything else uses a fine border. Do not stack a blurred shadow, a hard offset, and a thick outline on the same element, and do not give every card the same drop.

Menus and dialogs have clear backdrops and stay above sticky actions. There are no full-page gradients, ambient glows, bouncing controls, or continuously floating avatars. Hover changes color, not the position of the target. State changes are immediate; optional opacity/color transitions are 120–150ms. Modal appearance may use a single 150ms transition. Reduced motion removes movement and decorative animation; no information depends on it.

## Shapes

Controls and answer options use the 12px radius; question, ticket, celebration, and dialog surfaces use 24–28px. Small chips and internal marks use 8–10px. Anything being said — the question, the example bluff, the round marker, the winner banner — squares off one corner into a speech-bubble tail. Account for nested padding so an inner radius does not appear larger than its enclosing surface. Full rounding is reserved for portraits and radio indicators, not every button and label.

Use the forty-eight illustrated character portraits from the tabletop avatar sheets, framed as circles with a fine inset edge and subtle shadow. Roster and scoreboard portraits are 48px; standalone portraits are 80px. Preserve the illustrations and their original colors rather than adding another artwork family. Players can choose their character from the lobby roster or the table options menu at any time; choices stay attached to the player's identity across tables, reloads, and reconnections.

The picker is a quiet portrait gallery, not a collection of boxed cards. Show an 88px preview with the full character name. Each whole portrait-and-name option is a keyboard-navigable radio with a short visible name and full accessible name. Selection uses a grape ring and checkmark; the blue focus outline stays visibly separate from it. Let the instructions, preview, and choices scroll together while the title and save/cancel actions stay visible, including with enlarged text. Omit the preview on short landscape screens. Decorative portraits are hidden from assistive technology; adjacent player names or radio labels supply the identity.

Avatar framing references: [desktop picker](evidence/tabletop/avatar-polish-desktop.png) and [phone picker](evidence/tabletop/avatar-polish-phone.png), captured from the local running interface.

## Components

### Foundation

Use shadcn's **Base Nova / Base UI** source for Button, Input, Textarea, Tabs, Dialog, AlertDialog, DropdownMenu, and RadioGroup. Customize the actual local component recipes to the tokens above. Install only used components; do not add an entire gallery. Keep game ownership in real Convex/Parlor. Do not replace those services with demo state or optimistic score calculations.

The accepted-vote receipt uses the authenticated viewer's `game.view.ownVoteId`; do not infer a chosen answer from the `voted` flag. Deploy the matching Convex backend before the web application. Other players' votes remain private until reveal.

Buttons have a 48px primary touch target, visible focus, a stable action label while pending, and an adjacent explanation when unavailable. Icon-only buttons have at least a 44px hit area and a useful accessible name. Use one primary action per peer group. Links stay links; Base UI Button is not a navigation substitute.

Create/join is a real keyboard-operable tab set. Form fields have visible labels, associated instructions and validation, and preserve values after failure. Empty input is an invitation to complete the form, not an unexplained disabled control. Submission errors identify the field where possible and focus it. There is no custom field-validation framework.

Voting is one radiogroup with whole-row hit targets, arrow-key navigation, visible selection, and a distinct focus indicator. The user's own bluff stays readable but cannot be selected. A selection is not yet a submitted vote. The accepted vote is shown persistently and survives reload using the private server projection. A spectator sees answers as read-only content; an exact-truth author gets a clear explanation of why no vote is needed. Before reveal, never disclose other players' votes or truth/source metadata.

Invitation and rules use accessible dialogs. Table management uses a labelled menu; **Leave table** lives there, not beside the primary game action. Leaving and ending unfinished input use a consequence-specific AlertDialog. Focus enters deliberately, Escape cancels when safe, background content is inert, and closing restores focus to a sensible trigger. Reconnection notices appear only when useful; do not narrate healthy infrastructure throughout the game.

Long instructional dialogs initially focus their title, not a lower disclosure that scrolls the introduction out of view. Keep modal gutters at 16px and padding at 24px when text is enlarged; reflow content rather than enlarging empty space.

### State and copy contract

| Context                       | Label or instruction                    |
| ----------------------------- | --------------------------------------- |
| Entrance modes                | Create table / Join table               |
| Name and invitation fields    | Your name / Room code                   |
| Start a six-round game        | Start game                              |
| Submit the writing turn       | Submit answer → Answer submitted        |
| Confirm a chosen option       | Lock vote → Vote locked                 |
| Host skips unfinished writing | End writing → End writing for everyone? |
| Host skips unfinished voting  | Reveal answers → Reveal answers now?    |
| Continue after reveal         | Next round / Final scores               |
| Replay                        | Play again                              |
| Departure                     | Leave table / Stay                      |
| Character selection           | Change avatar → Save avatar             |

Use **table** for the persistent shared room, **game** for six rounds, **round** for a question, **answer** for a choice, and **bluff** for an invented answer. Do not alternate room/table/seat or lie/fib/nonsense just to avoid repeating a word. Room code is a familiar exception: it identifies the invitation code.

Personality belongs in the entrance headline, screen and section titles, the illustrations, and short result or invitation copy: “Your friends are full of it.”, “Your table of tall tales”, “The truth, at last!”. Instructions, field labels, errors, and confirmations stay plain, and every action keeps its literal name. Remove filler such as “your wonderfully ordinary name,” “the convincingest,” “put on your innocent face,” and “go with your gut, or don't.” An error states what failed and a real next step; it does not expose a stack trace or joke about lost progress.

There are no turn timers, reveal delays, or total game caps. Progress counts report submitted answers or locked votes without inventing who remains eligible after departures. Waiting text names the next action, not an estimated time. Nothing implies a seat is reserved after explicitly leaving.

## Do's and Don'ts

- Do keep the current question and next action more prominent than the brand or infrastructure.
- Do retain submitted text and accepted vote receipts; distinguish choice, pending, accepted, and waiting.
- Do test small screens, long content, touch and keyboard, 200% text, reduced motion, offline recovery, spectators, ties, and twelve players on the real application.
- Do use stable polite status announcements for phase/input updates and alerts for actionable errors.
- Do preserve browser zoom and support forced colors. Never hide horizontal overflow to conceal a layout defect.
- Don't turn every content group into the same card or repeat the instructions in three places.
- Don't make disabled controls or color-only markers explain themselves.
- Don't add timers, stock marketing sections, tooltip-only explanations, unused tokens, or new artwork families.
- Don't treat shadcn defaults or a passing DESIGN.md linter as proof that the actual screens are usable.
- Don't reset a player's chosen character when they switch tables, rejoin, or take a different seat.

Selected local reference screens: [entrance](evidence/party/entrance-desktop.png), [phone entrance](evidence/party/entrance-phone.png), [phone voting](evidence/party/voting-phone.png), [reveal](evidence/party/reveal-desktop.png), [final scores](evidence/party/final-standings-desktop.png), and [enlarged narrow entrance](evidence/party/entrance-320-200-percent.png). Earlier passes keep their own references in the [verification history](docs/verification.md#verification-history). These are deliberately selected design references; full fresh multiplayer captures are retained by the revision-specific CI artifact. Browser emulation is not physical-device testing or proof of the current hosted release.
