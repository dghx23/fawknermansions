# Website Proposal — Fawkner Mansions History Site

A companion public website to the book, built to showcase the building's
heritage while the research and book are in progress, and to remain as a
permanent public record afterwards. This is a skeleton proposal — intended as
a discussion draft for the owner, Dr Jeff Nguyen, alongside
[`docs/project-brief.md`](project-brief.md), not a final spec.

## 1. Purpose

- Give Fawkner Mansions a credible public presence built on the actual
  Victorian Heritage Database listing (HO448), not marketing copy.
- Build an audience ahead of the book's release (heritage groups, local
  historians, former residents, architecture students).
- House the 3D/VR walkthrough once it exists, as the most shareable proof of
  the preservation work.
- Give the owners something they can point to — for council, insurance,
  heritage-body, or prospective-tenant conversations — independent of whether
  the book is ever commercially published.

## 2. Audience

1. Heritage and history enthusiasts / local historians.
2. Architecture students and academics (Edwardian Free Classical, Melbourne
   flats typology).
3. Stonnington Council / National Trust / heritage-body contacts.
4. Prospective residents and the building's own tenants.
5. Press / local media, if the book or documentary gets coverage.

## 3. Proposed sitemap (skeleton)

```
/                     Home — hero image, one-line heritage claim, nav
/history              History — architect, 1910–11 construction, timeline
/architecture         Architecture — annotated exterior/interior detail,
                       drawn from the Physical Description in the heritage
                       listing
/tour                 3D / VR walkthrough (embedded, once captured)
/gallery              Photo gallery — real, dated, captioned images only
                       (1960s photo, Sept 2026 photo, future additions)
/the-book             The book — concept, table of contents, release status,
                       pre-order or mailing-list signup once ready
/documentary          Documentary — embedded video once produced
/about                About the project — who's doing this and why, contact
/press                Press kit — for journalists/heritage bodies (optional,
                       add once there's coverage to link)
```

Keep it to one level of navigation — a heritage/history site benefits from
being simple to browse, not a deep content hierarchy.

## 4. Content plan per page

| Page | Primary source | Status |
|---|---|---|
| History | `docs/heritage-listing.md` (Statement of Significance, "Why is it significant?") | Ready to draft |
| Architecture | `docs/heritage-listing.md` (Physical Description) | Ready to draft |
| Tour | 3D/VR capture (see `docs/ideas.md` §4) | Pending capture |
| Gallery | 1960s photo + Sept 2026 tram photo (not yet in repo) + any archival finds (Trove, SLV, Stonnington History Centre) | Pending assets |
| The Book | `docs/ideas.md` §2 (structure) | Draft outline only |
| Documentary | Production (see `docs/ideas.md` §5) | Not started |
| About | `docs/project-brief.md` | Ready to draft |

## 5. Design language

Reuse the heritage design basis already established for the Mansion WiFi
portal in [`wifi-portal/GROK_CODE_PROMPT.md`](../wifi-portal/GROK_CODE_PROMPT.md),
so the WiFi splash page and the history site read as one family:

- Oxblood brick, bluestone blue-grey, cream render, black iron, restrained
  antique brass.
- Preserve the `FM` monogram and the address `250 Punt Road · Prahran`.
- No generic "boutique hotel" or "luxury apartment" styling — the tone is
  archival and civic, not commercial.
- Real photography only in the gallery, clearly dated/captioned; any
  illustrative/AI-generated imagery used elsewhere must be visibly labelled
  as illustrative, never presented as the actual building.

## 6. Technical approach

- **Static site** (e.g. a simple static site generator, or the same
  dependency-free plain HTML/CSS approach used for the WiFi portal) — low
  cost, easy to host, no ongoing CMS maintenance burden for a project this
  size.
- Hosting: any static host (GitHub Pages, Netlify, Vercel) — trivial to wire
  up directly from this repository once content is ready.
- No tracking/analytics beyond basic, privacy-respecting page-view counts if
  needed — consistent with the privacy stance already taken in the WiFi
  portal design brief.
- Domain: a dedicated domain (e.g. fawknermansions.com/.au) reads more
  credibly to heritage bodies and press than a subdomain; low annual cost.

## 7. Phased delivery

1. **Phase 0 — Skeleton (this document + placeholder pages).** Ship a
   minimal one-pager (heritage claim, history summary, "book coming" note,
   contact) so there's a live URL to reference immediately.
2. **Phase 1 — History & Architecture pages** once the extended research
   (Trove, Stonnington History Centre, PROV) is underway.
3. **Phase 2 — Gallery** once real archival/period images are sourced and the
   two authentic photos are added.
4. **Phase 3 — Tour** once the 3D/VR capture exists.
5. **Phase 4 — The Book & Documentary pages** once those productions have a
   firm release timeline.

## 8. What's needed from the owners

- Confirmation the building's name, address, and heritage citation can be
  used publicly (low risk — this is public council/heritage-database
  information, but worth stating explicitly in the pitch).
- Access for photography/scanning of common areas and the exterior (see open
  questions in `docs/project-brief.md`).
- A decision on whether the site is presented as an owner-endorsed project or
  an independent researcher/tenant project about the building — this changes
  the "About" page framing and what, if anything, carries the owners' name.

## 9. Success metrics (informal)

- A working Phase 0 page live within the free-rent/discount period, as
  evidence to the owners that the arrangement is producing something real.
- Heritage-body or local-media pickup (a mention from Stonnington History
  Centre, National Trust, or a local paper) as an early, low-cost validation
  signal before the book/documentary are finished.
