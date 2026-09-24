# Fawkner Mansions — Quantified Risk Register
**Version:** 2.0  
**Date:** 25 September 2026

## Scoring
- **Likelihood (L):** 1 Rare → 5 Almost certain
- **Impact (I):** 1 Minor → 5 Severe
- **Evidence confidence (C):** 1 Weak/uncertain → 5 Strong
- **Priority score = (L × I) + (6 − C)**, maximum 30. The uncertainty term deliberately increases priority where evidence is weak.
- **Bands:** Critical 24–30; High 18–23; Medium 12–17; Low ≤11.

| ID | Risk | L | I | C | Score | Band | Evidence / trigger | Current control | Actionable intervention | Project capability to apply | Residual target |
|---|---|---:|---:|---:|---:|---|---|---|---|---|---|
| R01 | Historical date/configuration error (1909–10/1910/1912; 25 vs 27) | 5 | 4 | 3 | 22 | High | Conflicting official/secondary sources | Contradiction log | Retrieve permit, rate books, plans, early ads; publish range until resolved | Audit-style corroboration; source governance | Medium |
| R02 | Repeating unsupported sensational claims | 4 | 5 | 2 | 24 | Critical | User audit contains unverified “drug den/brothel/squalor” attribution | v2 quarantine | Do not publish until original source located; maintain claim-status field | Evidence assurance; reputational risk review | Low |
| R03 | Confusing local HO protection with Victorian Heritage Register | 4 | 4 | 5 | 17 | Medium | “Heritage-listed” can imply VHR | HO448 source logged | Use precise wording “protected under HO448; not on VHR” | Policy/regulatory source analysis | Low |
| R04 | Copyright / image-rights breach | 4 | 5 | 4 | 21 | High | Historical images may be all-rights-reserved or source unknown | Image manifest | Record creator, owner, licence, permission; publish only cleared assets | Governance + digital asset management | Medium |
| R05 | User-supplied image provenance misclassification | 4 | 4 | 2 | 20 | High | Some polished/period-looking images may be reconstructions or edited | Marked unverified | Hash, provenance questionnaire, original metadata, label documentary vs illustrative | Digital preservation workflow | Medium |
| R06 | Review-score misuse / statistical overclaim | 5 | 3 | 5 | 16 | Medium | Tripadvisor 1.0 has one review; Booking counts change | Date-stamped snapshot | Always display denominator + capture date; never infer causation | Quantitative/data-quality review | Low |
| R07 | Defamation / stakeholder relationship risk | 3 | 5 | 3 | 18 | High | Owner/operator and past-use claims can affect reputation | Attribution rules | Right-of-reply for disputed current claims; use neutral attributed language | Stakeholder reporting; assurance discipline | Low–Medium |
| R08 | PAO/heritage planning uncertainty affecting project claims | 4 | 4 | 5 | 17 | Medium | PAO remains; article/source dates differ | 1954 correction | Check current planning scheme before each publication edition | Regulatory monitoring | Low |
| R09 | Incomplete ownership chain | 4 | 3 | 2 | 17 | Medium | Post-Alfred ownership/sale not primary-sourced | Open question logged | Landata/title search; hospital disposal minutes; transaction evidence | Evidence tracing | Low |
| R10 | Archival loss / undocumented oral history | 4 | 4 | 4 | 18 | High | Former residents/staff ageing; records dispersed | Research roadmap | Structured oral-history program; consent/release forms; archive transcripts | Interview + research governance | Medium |
| R11 | Static admin page mistaken for secure backend | 4 | 5 | 5 | 20 | High | Current admin uses client-side password visible in source | README warning | Move sensitive research to real server-side auth before confidential interviews/data | Web/software capability | Low |
| R12 | Data-integrity errors from scraping/automation | 5 | 4 | 5 | 21 | High | Supplied audit records Suite 1–703 loop and empty map scrape | Artifact flagged | Validation checks, source snapshots, manual review before ingestion | Audit controls; automation QA | Low |
| R13 | Publication credibility harmed by circular sourcing | 4 | 4 | 4 | 18 | High | Many web articles repeat same claims | Source hierarchy | Trace claims to earliest/official source; cite secondary only for interpretation | RiskAtlas-style source governance | Low |
| R14 | Financial/resource overreach across book/VR/site/documentary | 3 | 4 | 3 | 14 | Medium | Multiple deliverables compete for time/money | Phased project | Stage gates; minimum viable archive first; budget/effort tracking | Project/risk management | Low–Medium |
| R15 | On-site photography / access / safety | 3 | 4 | 3 | 14 | Medium | Active accommodation and heritage building | None formal | Owner permission; resident privacy; safe access plan; no intrusive room capture | Assurance planning + fieldwork discipline | Low |
| R16 | Privacy risk in resident/guest documentation | 3 | 5 | 4 | 16 | Medium | Interviews, photos, correspondence may identify people | Avoid public PII | Consent, minimisation, retention schedule, separate private archive | Privacy/governance discipline | Low |
| R17 | Loss of research history between iterations | 4 | 3 | 5 | 14 | Medium | Iterative AI/web research can overwrite conclusions | Versioned run files | Immutable v1/v2… files + “new revelations” diff in every run | Git/source control | Low |
| R18 | Current hotel claims become stale | 5 | 2 | 5 | 11 | Low | Prices, room types, reviews and policies change | Snapshot labels | Auto/date-stamp operational checks; separate history from live data | Web/data monitoring | Low |

## Highest-priority interventions
1. **Quarantine unsupported sensational claims** until source-proven.
2. **Resolve provenance and rights for images** before public reuse.
3. **Resolve the 1909–12 chronology and 25/27 configuration** through original records.
4. **Replace the client-side admin gate** before storing sensitive interviews, owner communications or personal data.
5. **Add validation gates to scraped data** so a Suite-703 style artifact can never enter the factual record.
6. **Build title/ownership chronology** using Landata and Alfred Hospital disposal records.

## Capability map
The existing repository documents relevant project capabilities in audit/risk assurance, evidence-based research, regulatory/source governance, web development and digital-preservation/photogrammetry planning. These can support the interventions above. Where specialist legal, archival-conservation or heritage-architect advice is needed, treat it as an external capability to add rather than assuming it in-house.
