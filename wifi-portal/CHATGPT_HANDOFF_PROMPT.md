# ChatGPT handoff prompt — WiFi hotspot business build-out

Paste the prompt below into ChatGPT and attach this `wifi-portal/` folder
(or the relevant files from it). This is a sibling document to
[`GROK_CODE_PROMPT.md`](GROK_CODE_PROMPT.md), which covers the captive-portal
*design* — this one is scoped to the *business/payment logic* layered on top
of it, which hasn't been built yet.

---

You are continuing a **paid guest WiFi** project for **Fawkner Mansions,
250 Punt Road, Prahran, Victoria** — a heritage-listed 1910–11 building. A
captive-portal design already exists (`index.html`, `router/` in this
folder) with a business case now attached to it, but the payment/voucher
logic itself is not yet built. That's your job.

## What already exists

- A heritage-branded captive-portal UI (`index.html`) and the real
  OpenWrt/openNDS router config (`router/`) for a Cudy M1200 — see
  `GROK_CODE_PROMPT.md` for the full design brief and hard constraints on
  that layer. **Do not break the router config or the visual design** while
  building the logic below.
- The business case (see `../admin/index.html` &sect;5, "WiFi hotspot — a
  separate, standalone revenue idea", in the parent project repo, or ask for
  it to be pasted in):
  - Connectivity: Starlink, ~$75/month, servicing the whole building's guest
    traffic on one connection.
  - Pricing: $5/day, $20/week, $50/month per guest.
  - **Access method A (live today, no build needed):** pre-generated voucher
    codes, sold or handed out manually, redeemed on the captive portal.
  - **Access method B (not built — this is the task):** the captive portal
    collects card payment directly and issues access automatically.

## The actual task

Design and build the **card-payment access path**:

1. A payment step in (or linked from) the captive portal, collecting card
   payment for one of the three price tiers (day/week/month).
2. A payment gateway integration — Stripe is the obvious default for an
   Australian guest-WiFi use case (has an Australian entity option, handles
   Visa/Mastercard/Amex/Apple Pay/Google Pay, which matches the payment
   marks already planned — see `../assets/payment-logos/` in the parent
   repo). Evaluate against alternatives if there's a good reason to.
3. On successful payment, automatically generate/issue a voucher-equivalent
   access grant to the openNDS captive portal — this needs to interoperate
   with **openNDS's actual authentication mechanism**, not a fake
   browser-only "paid" flag. Research openNDS's FAS (Forwarding
   Authentication Service) / voucher API before designing this — don't
   guess at how openNDS expects to receive an authorization.
4. Basic admin visibility: a way to see recent payments/access grants
   without needing to SSH into the router (even a simple log view is fine
   for v1 — this doesn't need to be sophisticated).

## Constraints carried over from the design brief

- Keep the existing heritage visual design (oxblood, bluestone, cream,
  black iron, the `FM` monogram) — this is a payment/logic layer added to
  the existing portal, not a redesign.
- No accounts, no marketing email collection, no tracking beyond what's
  needed to process the payment and grant access.
- The router runs OpenWrt 23.05.5 on a Cudy M1200 — keep any router-side
  component lightweight; heavier logic (payment processing, voucher
  issuance) belongs off-router, e.g. in a small serverless function, not on
  the router itself.
- Don't invent or assume Stripe (or any provider) account credentials —
  flag exactly what needs to be set up (account, API keys, webhook
  endpoint) rather than fabricating placeholder secrets.
- This is genuinely unbuilt — say so plainly in whatever you produce rather
  than presenting a mockup as if it were a working payment system.

## Deliverable

Either a concrete implementation plan (architecture, chosen provider,
openNDS integration approach, what needs external account setup) or working
code for the pieces that can be built without live credentials — whichever
is more useful given what's attached. Explain openNDS's actual
authentication mechanism as you understood it before proposing how the
payment flow hooks into it, so the choice can be sanity-checked against
real openNDS documentation.

---
