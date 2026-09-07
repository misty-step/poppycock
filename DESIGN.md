---
version: alpha
name: Poppycock — the tabletop system
description: A calm, tactile interface for a lively, untimed bluffing game.
colors:
  primary: "#29263D"
  on-primary: "#FFFFFF"
  background: "#F5F7F5"
  on-background: "#29263D"
  surface: "#FFFFFF"
  on-surface: "#29263D"
  secondary: "#E7EEEB"
  on-secondary: "#29263D"
  accent: "#F2CF6B"
  on-accent: "#29263D"
  muted: "#EEF1EF"
  on-muted: "#606879"
  border: "#D8DFDB"
  input: "#84928A"
  focus: "#4362B5"
  success: "#276348"
  success-surface: "#E6F2EA"
  danger: "#A52F3B"
  on-danger: "#FFFFFF"
  danger-surface: "#FBEDEF"
  mint: "#D8EDE5"
typography:
  display-lg:
    fontFamily: Fredoka
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.04em
  display-md:
    fontFamily: Fredoka
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  heading:
    fontFamily: Atkinson Hyperlegible
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.02em
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
  lg: 20px
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
    rounded: "{rounded.lg}"
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

Poppycock is a shared-table bluffing game for 3–12 friends, played on separate phones. The interface should help people look back up at one another. It is not a dashboard, a children's learning app, or a page of advertising slogans.

The direction is **a well-made tabletop game**: paper surfaces, clear printed instructions, a restrained mint-and-gold palette, and twelve expressive paper-puppet characters. The characters and wordmark provide the personality. The controls stay calm and literal. Use whitespace before adding another box, border, badge, or joke.

This document follows Google's [DESIGN.md alpha specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md). Frontmatter holds normative tokens; prose explains their application. The implementation uses those values in `app/globals.css`, genuine locally owned [shadcn Base UI components](https://ui.shadcn.com/docs), and the existing `app/avatar.tsx` artwork. Interface guidance is informed by [Jakub Krehel's skills](https://github.com/jakubkrehel/skills), especially layout, accessibility, typography, and product writing. Neither a component library nor this document is a claim of accessibility certification.

## Colors

**Night ink** (`primary`) anchors text and the one primary action. **Cool chalk** (`background`) is the page. **White paper** (`surface`) separates controls and readable content. **Mint board** (`mint`) marks the question. **Pencil gold** (`accent`) identifies a selected choice or a final winner; it never means an error. **Garden green** (`success`) identifies revealed truth and earned points.

Use semantic tokens, not ad hoc hexadecimal colors in screen components. Artwork is the deliberate exception: its existing illustrated colors remain intact. Muted text is `on-muted`, never the border color or a translucent foreground. Danger is reserved for an error or leaving a table, not an ordinary next round. Selection, truth, errors, and locked states also have text, icons, or a border change; color alone is insufficient.

Maintain WCAG 2.x contrast: 4.5:1 for normal text, 3:1 for large text and essential non-text indicators. The light `border` separates non-interactive groups; input bounds use the darker `input`. Focus uses a separate visible outline with space from the selected border. Do not fade entire waiting screens or submitted answers.

## Typography

Keep the locally served **Fredoka** and **Atkinson Hyperlegible** families. Fredoka belongs to the wordmark, entrance headline, and question—not every heading, number, label, and button. Atkinson handles instructions, answer choices, names, controls, and scores.

Use the six token roles rather than improvising a new size per panel. Entrance display scales from 36px on narrow phones to 56px on wide screens. Questions scale from 24px to 32px; long questions need at least 1.4 line-height. Body and every editable control stay at 16px or larger. Use the 14px small role for fine print; muting explanatory copy does not require shrinking it. Scores and counts use tabular numerals.

Balance short headings; let body text wrap naturally. Keep paragraphs around 60 characters per line. Full player names, questions, and answer text must remain available on touch screens: wrap long unbroken strings rather than clipping or substituting a hover tooltip. Do not manufacture hierarchy with all-caps eyebrows or excessive tracking. Room codes are the exception to ordinary tracking because they must be read across a table.

Four-character room codes scale within their invitation container so enlarged text does not widen the viewport or split the code.

## Layout

Design mobile first at 320px, with 16px inline gutters and safe-area insets. The application expands to a 1040px content frame. Related elements sit 8–12px apart; groups sit 24–32px apart. Text containers grow. Use minimum heights for touch controls, never fixed heights for paragraphs or options.

Entrance: a compact brand header, one clear proposition, then a create/join form. On desktop, the proposition and illustrated sample answer occupy the left column; the form occupies the right. On a phone, the form must not be pushed below a full-screen poster. A join invitation leads with the join form rather than repeating the promotional introduction.

Lobby: make the room code and invitation useful, not decorative. Group the invitation and roster, then the host's start action. On desktop these can sit side by side; on mobile they stack. Show the actual minimum-player requirement next to a disabled start action.

During a round: a compact header, round/phase context, the question, and the player's task. Desktop can place the question beside the answer area. Mobile uses one column and compact question padding so choices appear promptly. A sticky vote/continue dock stays in document flow, respects safe areas, and must not obscure the final choice, focused field, or on-screen keyboard.

Reveal: truth first, then attribution and round scores. The source title is visible; lengthy editorial provenance is disclosed on request. Final standings lead with the result and the replay action. The roster is secondary rather than a second full-sized copy of the score list.

## Elevation & Depth

The paper metaphor is restrained. Use a fine border for a control, a subtle shadow for an elevated dialog, and at most one small offset in the entrance illustration. Do not apply thick black borders or hard shadows to every surface.

Menus and dialogs have clear backdrops and stay above sticky actions. There are no full-page gradients, ambient glows, bouncing controls, or continuously floating avatars. Hover changes color, not the position of the target. State changes are immediate; optional opacity/color transitions are 120–150ms. Modal appearance may use a single 150ms transition. Reduced motion removes movement and decorative animation; no information depends on it.

## Shapes

Controls and answer options use the 12px radius; large question and dialog surfaces use 20px. Small internal marks use 8px. Account for nested padding so an inner radius does not appear larger than its enclosing surface. Full rounding is reserved for a small avatar backing or radio indicator, not every button and label.

Use the existing twelve illustrations, without cropping ears or accessories. Players can choose their character from the lobby roster or the table options menu at any time; choices stay attached to the player's identity and persist across tables, reloads, and reconnections. The avatar picker uses a compact, keyboard-navigable radiogroup with visible focus, scrolling choices, and a pinned primary save action. Decorative portraits are hidden from assistive technology when the player's adjacent name provides the identity. Do not add a second generic avatar family.

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

Personality belongs in one entrance line, the illustrations, and occasional result copy. Instructions, errors, labels, and confirmations are plain. Remove filler such as “your wonderfully ordinary name,” “the convincingest,” “put on your innocent face,” and “go with your gut, or don't.” An error states what failed and a real next step; it does not expose a stack trace or joke about lost progress.

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

Selected local reference screens: [entrance](evidence/tabletop/front-door-desktop.png), [phone voting](evidence/tabletop/voting-phone.png), [reveal](evidence/tabletop/reveal-phone.png), [final scores](evidence/tabletop/final-standings-desktop.png), [enlarged rules](evidence/tabletop/rules-200-percent-320.png), and [leave confirmation](evidence/tabletop/leave-confirmation-320.png). The [compact verification record](evidence/tabletop/verification.json) names the source revisions, measured results, and limitations. These are deliberately selected design references; full fresh multiplayer captures are retained by the revision-specific CI artifact. Browser emulation is not physical-device testing or proof of the current hosted release.
