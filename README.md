# MCAPS OS | SE OS Cowork-First Progress & Walkthrough — Leggett Hanes GEO Site Quantity Analysis

Customer-facing progress-and-walkthrough hub prepared for Leggett & Platt.

- Skin: Studio (media-forward), blue/white MCAPS OS | SE OS Atomic overlay
- Audience: Leggett & Platt technical and innovation reviewers
- Updated: 2026-09-28
- Gate: configured client-side display gate (not authentication)
- Expiry: none (`null` — no expiry date has been set; not a placeholder date)

## Status distinctions shown on the hub

- **Ready to review** — public/synthetic sample quantities and approved full-width Dynamics review captures.
- **Validated locally** — deterministic calculation and guard behavior; not a native Cowork tenant run.
- **Next validation** — execute one authorized sample in Cowork and prove the final read-only Dynamics handoff.

## Cowork-first pattern

- Cowork is the intended working surface for authorized document context,
  bounded calculation, reviewer questions, corrections, and reruns.
- Dynamics 365 is the intended read-only destination for the final reviewed
  information.
- The native customer Cowork run and Dynamics integration have not been
  completed or claimed.
- The homepage includes the exact approved public-sample inputs and outputs:
  a synthetic 30 ft by 20 ft rectangle, 600 sq ft net area, and separate
  18-inch and 24-inch overlap alternatives.

## Complete UI examples

The Hub now contains two newly rendered, full-page illustrative UIs:

- `examples/cowork-session.html` shows the complete Cowork work surface with
  public file attachments, progress, conversation, synthetic results, and
  output preview.
- `examples/dynamics-readonly.html` shows the complete Dynamics destination
  with locked commands, final synthetic quantities, evidence, assumptions,
  history, and a revision route back to Cowork.

Desktop and mobile captures are stored under `resources/screenshots/`. The
homepage presents the full desktop captures at their natural aspect ratios and
provides direct links to the complete responsive examples. The rejected legacy
fragments are not part of the customer-facing R5 package.

Both examples are explicitly labeled as illustrative local prototypes. They
are not live product screenshots, native Cowork execution evidence, a customer
tenant, or a connected Dynamics deployment.

Only reviewed customer-viewable files belong in this folder. Private governance,
source evidence, internal notes, and plaintext passphrases are intentionally
stored elsewhere. A client-side gate is a display convenience, not a security
boundary for files in a public repository.