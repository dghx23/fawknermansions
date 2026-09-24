# Project Dashboard (`admin/index.html`)

A single self-contained HTML page: the storyboard, the condensed pitch to
Jeff Nguyen, best practices for this kind of heritage documentation project,
technology value-add ideas, monetisation ideas, and a list of who's likely to
be interested (councils, heritage bodies, universities, press, audiences).

Login: `david` / `admin123`.

## Important — this is not real security

This page is a **client-side UX gate only**. The login check runs entirely in
the browser's JavaScript, and the full dashboard content is downloaded to the
browser regardless of whether the login succeeds — it's simply hidden with
CSS/JS until the password is entered. Anyone who views the page source or
opens browser devtools can read the content (and the password) directly,
login or no login.

This is fine for what the page actually contains (a proposal/planning
document, nothing confidential like financials or personal data), but do
**not** extend this pattern to anything that needs genuine protection. If
this ever needs to hold something actually sensitive, replace it with real
server-side authentication (e.g. a small serverless function with a hashed
password and a session token) rather than adding more client-side checks.
