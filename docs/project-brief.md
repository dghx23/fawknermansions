# Project Brief

## Personal context

- Moved into Fawkner Mansions on **11 September 2026** and have lived there
  continuously since.
- Found the room via Booking.com; initial rate was **$75/night**.
- Now on a standing arrangement at **$440/week**.
- The owner is Dr Jeff Nguyen.
- Other residents are rarely seen and their arrangement with the building is
  unclear — worth investigating as part of the building's contemporary story,
  not just its 1910s origin.
- Two authentic photographs of the building are currently held: one from the
  1960s, and one taken in **mid-September 2026** showing a tram in front (both
  in a "Fawkner Mansions" PDF, not yet added to this repo). Other reference
  images used in early concept work were AI-generated placeholders, not the
  real building, and should not be presented as authentic.

## A separate idea worth raising: paid guest WiFi

Not part of the book proposal, but worth pitching to the owners at the same
time: there's no free WiFi at the building today. A Starlink connection
(~$75/month) plus a captive-portal router — reusing the "Mansion WiFi"
design already built in `wifi-portal/` — could offer paid guest access
($5/day, $20/week, $50/month), either via manually sold voucher tokens or a
card-payment page (payment integration not yet built). Even light uptake
clears the monthly connectivity cost. Full technical architecture and
pricing: `admin/index.html` &sect;5.

## The proposal (to the owner, Dr Jeff Nguyen)

Offer to research, document, and digitally preserve the building in exchange for
a rent discount or a rent-free period (e.g. 3 months), during which the project
would:

1. Thoroughly research the building's history (architect, original residents,
   later alterations, present-day condition).
2. Produce a 3D model of the building for preservation purposes, using drone
   and ground-based 3D mapping (photogrammetry) to digitally capture the
   entire exterior and common areas, then reconstruct it as a **VR
   (virtual reality) experience** — a 3D digital walkthrough people can
   explore with a headset or in a web browser, as if walking through the
   building in person. Framed explicitly as a hedge against the building
   being altered or demolished: if it's ever lost, this record isn't.
3. Produce a hardcover A5 book, print-on-demand via Amazon, with a small
   pre-printed run for distribution to heritage groups and universities.
4. Build a companion website showcasing the building and its history, subject
   to owner agreement.
5. Produce a 15–20 minute history documentary for social media/web — using
   the same drone and video-editing skillset as the 3D capture work, so the
   footage does double duty. A well-made documentary and a genuine "digital
   preservation of a heritage building" story is a plausible media hook:
   local press and heritage-interest coverage would promote the book, the
   documentary, and the building itself simultaneously, in Australia and
   potentially overseas given the foreign-language edition angle.

## Public-interest distribution potential (for the pitch)

Part of the case to Dr Nguyen: given the building's heritage significance
— oldest surviving residential flats in the City of Stonnington, one of the
oldest in Victoria — this isn't just a vanity project with one print run.
There's a plausible standing public-interest audience:

- **Victorian schools.** Victoria has on the order of ~2,250 schools in
  total (roughly 1,530 government, ~500 Catholic, ~220 independent). That's
  a rough, unverified order-of-magnitude figure for pitch purposes — check
  the actual current count (Victorian Department of Education / VCAA)
  before quoting a specific number to anyone. Local-history and Victorian
  studies curriculum units, plus school libraries generally, are a
  plausible low-take-up-rate but real standing market.
- **Victorian universities.** Eight Victoria-headquartered universities
  (Melbourne, Monash, RMIT, Deakin, La Trobe, Swinburne, Victoria
  University, Federation University), each with library acquisitions
  budgets and relevant architecture/heritage/history departments — see
  [`docs/ideas.md`](ideas.md) §7 for the Monash-specific approach, which
  extends to the others. Beyond library sales, actively approaching these
  universities for support and potential funding is worth pursuing — most
  heritage-documentation projects of this kind are funded or co-supported by
  a university department, local council heritage grant, or a heritage body
  (National Trust, Heritage Victoria), rather than self-funded outright.
  Worth researching how comparable projects were actually funded, and
  aligning the pitch to universities/grant bodies with that norm rather than
  inventing a novel funding model.
- **Standing orders, not a one-off run.** Because the trade edition is
  print-on-demand (see the proposal above), schools and universities can
  order on an ongoing basis rather than being limited to the initial seeded
  copies — a rolling distribution channel rather than a fixed print run.
- **Foreign-language editions.** Draft German, French, Spanish, and Chinese
  covers already exist as a concept (see `book-mockup.html`) — international
  schools, language-immersion programs, and diaspora/heritage-interest
  groups (particularly relevant given Melbourne's international student
  population) are a plausible secondary audience once those editions are
  properly translated and produced.

**Caveat:** the school/university figures above are order-of-magnitude
estimates for pitch purposes only, not verified market research — confirm
actual current counts before presenting specific numbers to Dr Nguyen or
anyone else.

## Open questions to resolve before pitching Dr Nguyen

- What access is actually needed (common areas, roof, individual flats,
  archives) and who can authorise it?
- Is the 3D/VR scan being pitched as a service to the owner (he keeps the
  asset) or as the author's own IP with a licence back to the owner?
- Confirm Dr Nguyen's authority to approve a rent concession directly.
- Any restriction from the heritage overlay (HO448) on filming, drone use, or
  physical alterations for scanning equipment?
- Insurance/liability for filming or 3D-scanning shared/common areas with other
  residents present.

## Related

See [`docs/heritage-listing.md`](heritage-listing.md) for the primary heritage
record, and [`docs/ideas.md`](ideas.md) for brainstormed structure and format
ideas for the book, documentary, website, and pitch.
