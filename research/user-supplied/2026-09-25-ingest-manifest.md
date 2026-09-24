# User-supplied research ingest — 25 September 2026

## Scope
The user supplied:
- 19 image files showing Fawkner Mansions exterior views, a black-and-white historical-looking exterior, present/recent interiors, reception, shared bathrooms, shared kitchen, library/reading areas, hallways and stair circulation;
- a 487-line HTML/text compilation titled **“Comprehensive Risk Audit & Data Compilation: Fawkner Mansions Heritage Hotel.”**

## Image manifest
The following chat-upload filenames/identifiers were received. Their visual content has been reviewed, but **creator, capture date, copyright owner and authenticity status are not yet established unless independently sourced**.

1. `840b1cd5-8c33-45dc-a6dc-c9c55a69bc16.png` — polished daylight exterior.
2. `946(1).jpg` — black-and-white exterior, later-20th-century vehicles visible.
3. `46649ea6-d14e-48ee-8f4b-c3a2d9a3e29e.png` — period-styled colour exterior with early motor cars; provenance must be confirmed before being called historical.
4. `67517be9b0a35fe468ad95198dfdd9b5e9ccd6f7.jpg` — wet/winter street exterior.
5. `295770e4-6728-4eb8-93cd-1929276aa820.png` — polished dusk/night exterior.
6. `467992342.jpg` — front entrance/exterior.
7. `470050366.jpg` — guest room.
8. `470050368.jpg` — guest room alternate angle.
9. `470050379.jpg` — guest room alternate angle.
10. `470346438.jpg` — reception.
11. `470346453.jpg` — reception joinery/art detail.
12. `470346480.jpg` — Guest Bathroom 2.
13. `470346498.jpg` — Guest Bathroom 2 shower area.
14. `470346692.jpg` — shared kitchen.
15. `470346726.jpg` — library reading area.
16. `470346796.jpg` — guest library.
17. `470346888.jpg` — wide hallway.
18. `470346929.jpg` — stair / hallway seating area.
19. `470347459.jpg` — Shared Bathroom 1.

### Rights/provenance status
**Uncleared.** Before public use, record: photographer/creator; original source; capture date; modifications/AI generation if any; copyright holder; licence/permission; exact caption.

## Supplied audit compilation
The supplied compilation contains useful dated operational snapshots and, importantly, documents its own extraction failures.

### Useful evidence to retain as a dated snapshot
- Booking.com aggregate data captured at 5.4/10 from 384 reviews with sub-scores.
- Tripadvisor aggregate data captured as 1.0, but review count absent in the scrape.
- Room-type and facilities listings.
- Labels/captions visible in hotel image listings such as “Shared Kitchen”, “Guest Bathroom 2”, “The Guest Library” and “Reception”.

### Explicit data-quality failures recorded by the compilation
- No verbatim individual guest reviews were recovered by the scrape.
- A scraper loop produced fictitious sequential “Suite 1” through “Suite 703” output.
- A map scrape produced no useful map/location content.

These failures make the compilation unsuitable as a sole factual authority.

### Claims quarantined pending original-source verification
The compilation attributes “drug den”, “brothel” and “chronic squalor” language to a supposed 2016 Age article. v2 research located the relevant Age/Commercial Real Estate “mystery building” article as published in 2019 with photographs dated 2016, but did not find those phrases in the located article. They must not be published as fact until the underlying original source is found.

## Repository-storage limitation
This commit preserves the **provenance manifest and research context** for all 19 images. The connected GitHub text-content interface used for this research update does not provide a binary upload path from the chat attachment store, so the image binaries themselves are not copied into the repository in this run. They should be added later under `assets/research/` only after provenance/rights review.
