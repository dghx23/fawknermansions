# Guest Wi‑Fi — Rollout Plan

Companion to the [captive-portal prototype](index.html) and the fuller
design/business documents at
[`admin/wifi-project.html`](../admin/wifi-project.html) and
[`admin/guest-operations.html`](../admin/guest-operations.html). Those two
pages carry the full detail (pricing model, Starlink terms research,
hardware options, revenue calculator); this document is the ordered,
owner-facing "what do we actually do, and in what order" plan. Nothing
here should contradict those pages — if it appears to, the admin pages are
the source of truth and this plan needs correcting.

## Before anything is sold to a guest: the compliance gate

This is a hard launch blocker, not a nice-to-have:

**Starlink's terms prohibit ordinary resale, but expressly permit
community Wi‑Fi / hotel-hotspot resale on a Priority Plan.** The building's
existing Starlink service must not be used to charge guests until this is
confirmed. Two sub-tasks, both administrative, neither requiring a
developer:

1. Contact Starlink (or review the account portal) to confirm whether the
   current service is eligible for upgrade to a **Priority Plan**, and get
   the actual order-specific pricing and data-allowance terms in writing —
   not the general public documentation, which varies by location/order.
2. Confirm who the Starlink account sits under. The cleaner structure is
   the account staying in the hotel/owner entity's name, with Sentrix
   Digital engaged as the managed operator under a written agreement —
   rather than Sentrix appearing as an unauthorised reseller.

**Nothing else in this plan should proceed to a paid launch until this
gate is closed.** Everything else (survey, portal, payments, check-in
integration) can be built and tested in parallel, but the "go live and
start charging guests" step waits here.

## Phase 1 — Commercial & plan verification

**Owner-side action**, no build work:
- Confirm the operating entity that will hold the Starlink account and the
  merchant/payment account.
- Get the Priority Plan eligibility and actual pricing in writing (see
  gate above).
- Decide: retain the existing Starlink dish, or move to newer hardware —
  contingent on the existing kit's generation, condition, and whether its
  account/plan can actually be upgraded to Priority. Do not assume the
  "rental kit, ~A$19 shipping" offer applies until a qualifying order is
  actually placed and confirmed.
- Put the managed-services/revenue-share agreement with Sentrix Digital
  (ABN 29 203 554 753) in writing before Phase 2 work begins — covering
  revenue split, settlement timing, hardware/code/data ownership, and a
  defined handover/exit process so the service isn't hostage to one
  person.

**Exit gate:** written confirmation of Priority-plan eligibility and
pricing, and a signed managed-services agreement.

## Phase 2 — Survey & core network

- Physical coverage survey of the building (see the [room & capacity
  model](../admin/wifi-project.html) for the current ~27
  theoretical bedroom / 9-per-floor / 3-level working assumption).
- Install or reconfigure: Starlink dish/router → gateway/firewall →
  managed switches/APs, split into the four segments already specified in
  the network architecture on the Wi‑Fi project page:
  - **Guest SSID** → captive portal → voucher/payment entitlement → internet
  - **Operations SSID/VLAN** → check-in tablet, staff devices, payment integrations
  - **IoT/fixed-equipment VLAN** → smart TVs, CCTV, sensors — never touches the guest portal
  - **Management plane** → Sentrix Digital's monitoring/controller
- Use managed, API-capable switches/APs — not consumer-only mesh hardware
  — so the monitoring layer in Phase 5 actually works.

**Exit gate:** coverage and stability testing across all guest areas;
confirmed VLAN isolation (IoT and operations traffic cannot reach or be
reached from the guest network).

## Phase 3 — Captive portal & payments

- The prototype at [`index.html`](index.html) is the design reference for
  the guest-facing screen: branded hero, voucher entry, five-package card
  payment selector (1 night A$6 / 2 nights A$10 / 3 nights A$13 / 7 days
  A$22 / 1 month A$55), Terms & Fair Use dialogs, success state.
  **It is a static front-end simulation with no backend** — nothing in it
  currently issues a real entitlement or talks to a payment processor.
- Build the real entitlement backend: voucher generation/redemption,
  payment-webhook handling, and an API the captive portal (openNDS FAS or
  equivalent) calls to actually open guest internet access.
- Payment hardware decision is already made in the guest-operations
  document: **Square Terminal + Terminal API**, or **Tyro EFTPOS +
  iClient**, are the two viable options. Do **not** attempt Tap to Pay on
  the Lenovo tablet — its spec sheet confirms no NFC. Keep card data out
  of the Fawkner/Sentrix application entirely; the terminal/processor
  handles it.
- Decide the reconciliation path: payment event → backend creates
  entitlement linked to guest + booking + room + validity → token/QR
  issued → same entitlement recognised by the captive portal.

**Exit gate:** payment success and failure paths both tested (including
a declined card and a network drop mid-transaction); entitlement issuance
and expiry both verified against real time-in-service, not just at
purchase.

## Phase 4 — Check-in integration

- Once a booking is matched on the reception tablet (or guest pre-arrival
  link), the Wi‑Fi package closest to the booked stay length is offered
  automatically — this is a check-in-flow feature, not a separate sale.
- Successful in-person payment returns to the backend and creates the
  same entitlement described in Phase 3, linked to guest ID, booking ID,
  room, and package.
- This phase depends on the guest-operations check-in system existing at
  all (device choice, mount, offline/LTE failover, identity handling) —
  see `admin/guest-operations.html` for that full design. If check-in
  digitisation is delayed, guest Wi‑Fi can still launch on voucher-only
  sales (front-desk hands over a pre-printed token) without waiting on
  the tablet check-in build.

**Exit gate:** privacy/security review of what guest data the Wi‑Fi
entitlement actually stores (should be booking/room/validity — not ID
images or card data).

## Phase 5 — Managed operations (ongoing, not a one-off milestone)

- **Starlink layer:** Enterprise Dashboard monitoring (online/offline,
  alerts, obstruction, latency, throughput, uptime); official API only if
  the account qualifies as eligible — do not architect around API access
  being guaranteed.
- **Internal network layer:** managed switch/AP controller exposing
  device health, AP/client load, VLAN state, firmware, remote config.
- **Application layer:** captive portal uptime, payment webhook health,
  token issuance failures, check-in integration status.
- **Alerting:** backend raises actionable alerts to Sentrix when any
  layer fails; routine issues resolved remotely, physical visits are the
  exception not the routine.
- **Reporting:** owners get agreed dashboard/report access to revenue and
  service health — this should not be a black box they have to ask about.

**This phase never "completes."** It's the ongoing operating cost that
justifies the revenue share in the commercial model.

## What can start today, at zero build cost

Two things don't wait on any of the above:

1. **Manual voucher sales.** Pre-printed tokens handed over for cash/card
   at the desk, redeemed against... nothing yet, since there's no real
   backend — so this can't actually go live until Phase 3's entitlement
   system exists. Listed here only to flag it as the fastest path once
   Phase 3 lands; it does not need the check-in tablet (Phase 4) first.
2. **The compliance gate itself.** Confirming Starlink Priority-plan
   eligibility is a phone call / account-portal check, not engineering
   work — it should be the very first thing actioned, in parallel with
   nothing, because every other phase's guest-facing launch depends on it.

## Summary sequencing

| Phase | Depends on | Can run in parallel with |
|---|---|---|
| 1. Commercial/plan verification | Nothing | Nothing — this gates everything else |
| 2. Survey & core network | Phase 1 agreement signed | Phase 3 build work |
| 3. Captive portal & payments | Phase 1 gate closed for a *paid* launch; can be *built and tested* earlier | Phase 2 |
| 4. Check-in integration | Phase 3 entitlement API existing | — |
| 5. Managed operations | Phases 2–3 live | Ongoing from go-live |

The single most important near-term action is closing the Starlink
Priority-plan compliance gate — it's the one item that blocks a legitimate
launch and is not something more prototype work can substitute for.
