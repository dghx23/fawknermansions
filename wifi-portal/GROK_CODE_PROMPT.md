# Grok Code handoff prompt

Paste the following prompt into Grok Code and attach this entire project folder.

---

You are continuing an existing production-quality captive portal project for **Fawkner Mansions, 250 Punt Road, Prahran, Victoria**, using the public Wi-Fi name **Mansion WiFi**.

## Goal

Maintain and improve the supplied captive-portal interface without losing its heritage-specific design or breaking its OpenWrt/openNDS deployment path.

## Existing project

- `index.html` — self-contained interactive design preview with inline CSS and JavaScript.
- `fawkner-mansions-illustration.webp` — original architectural illustration used by the preview.
- `router/mansion-splash.css` — lightweight CSS installed on the Cudy M1200 for the real openNDS portal.
- `router/configure-opennds.sh` — guarded OpenWrt installer/configuration script.
- `router/INSTALLATION_GUIDE.md` — network, firewall, installation, testing and rollback instructions.

## Heritage design basis

The design must remain grounded in the documented character of Fawkner Mansions:

- Designed by Ernest H. Willis and constructed in 1910–11.
- Edwardian Free Classical architecture.
- Three-storey red-brick massing.
- Parapeted corner towers and hip-roof entrance towers with semi-circular windows.
- Fine varied brickwork, corbelled bands, rusticated pilasters and restrained cream render.
- Black metal palisade fence on a bluestone plinth.
- Red-and-grey tessellated entrance path with bluestone edging.
- Two mature Liquidambar trees framing the entrance.

Use oxblood brick, bluestone blue-grey, cream render, black iron and restrained antique brass. Preserve the `FM` monogram and the address `250 Punt Road · Prahran`. Do not turn it into a generic luxury hotel, Gothic castle or modern apartment brand.

## Product flow

The first screen must immediately show:

1. Fawkner Mansions identity and architectural image.
2. The connected SSID: `Mansion WiFi`.
3. A short lawful/respectful-use agreement.
4. A clear `Connect to Mansion WiFi` button.
5. Concise privacy language explaining that normal technical connection data may be logged, with no marketing sign-up.
6. A connected confirmation state.

The design must work in narrow captive-portal mini-browsers and ordinary mobile/desktop browsers. Maintain strong contrast, large touch targets, keyboard focus states, reduced-motion support and readable text.

## Critical technical constraints

- Keep the preview dependency-free: plain HTML, CSS and minimal JavaScript.
- Do not add external fonts, JavaScript libraries, trackers, analytics or remote images.
- Keep `fawkner-mansions-illustration.webp` local.
- Do not introduce accounts, email collection or marketing forms.
- The JavaScript in `index.html` is a preview simulation only.
- The real router authentication must remain openNDS-native. Do not replace it with a fake browser-only login.
- Captive-portal mini-browsers may block JavaScript, external CSS and links, or close immediately after authentication.
- Keep `router/mansion-splash.css` compact and compatible with the default openNDS ThemeSpec HTML selectors, including `.offset`, `.insert`, `med-blue`, `big-red`, `italic-black`, `copy-right`, and standard form inputs.
- The Cudy M1200 runs OpenWrt 23.05.5. Avoid resource-heavy services and frameworks.
- openNDS must bind only to `br-guest`, never `br-lan`.
- Guest addressing is `192.168.20.0/24` with gateway `192.168.20.1`.
- Firewall routing must be guest-to-WAN only; never guest-to-LAN.
- Preserve client isolation, DHCP/DNS access and WAN masquerading.
- Preserve the installer’s explicit checks and timestamped backups.

## Quality bar

- Refined, historically grounded and welcoming.
- No generic template styling.
- No oversized marketing hero that delays the connection action.
- No invented heritage claims or inaccurate dates.
- No changes to router commands unless verified against openNDS/OpenWrt documentation.
- Validate local asset paths, HTML structure, inline JavaScript syntax and shell syntax after changes.

Start by reviewing every supplied file. Explain the intended changes briefly, then edit the files directly and return a concise change summary plus any router steps that the owner must perform.

---
