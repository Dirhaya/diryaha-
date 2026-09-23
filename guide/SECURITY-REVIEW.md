# Independent security review handoff

Status: **Not performed.** This document defines the scope for an independent reviewer; it is not an audit, certification or sign-off. A separate qualified reviewer and physical-device access are still needed before treating the app as ready to charge for.

## Data and trust boundaries

- Financial records, preferences, schedules and restore/start snapshots use the existing local IndexedDB vault. They are not encrypted by Ghars at rest.
- The passkey and recovery feature is an application screen lock. It does not encrypt the database. The OS/password provider handles authentication; UI locking is not a defence against malicious scripts or a compromised origin/device.
- Backup encryption protects an exported file, given a strong secret password. It cannot protect against someone already able to read the open app, malicious updates, device compromise, or weak/reused passwords.
- Ghars has no financial-data server, bank login, bank sync, analytics, external font service or cloud assistant. Hosting/update infrastructure still supplies executable code. Repository/hosting account security and release permissions are critical.
- Backup files, file names, categories, notes and account/goal names are untrusted inputs. Import is bounded and validated; all user text rendered into HTML must remain escaped. Never send genuine customer backups to public issues or repositories.

## Review targets

1. `public/backups.js`: native Web Crypto AES-256-GCM, fresh salt/IV, 128-bit authentication tag, authenticated algorithm/version header, PBKDF2-HMAC-SHA-256 at 600,000 iterations, password handling/Unicode/limits, malformed envelope and resource bounds, browser interoperability, no downgrade fallback after decryption failure. Benchmark derivation and memory use on supported real iPhones.
2. `public/security.js` and lock UI: challenge generation and signature validation, origin/RP checks, user verification, recovery-code storage and lock lifecycle during file selection, share sheets, cancellation, backgrounding and multiple windows. Evaluate whether the published “screen lock” claims accurately reflect bypass limits.
3. Core validation and arithmetic: category/reference validation, integer limits, duplicate IDs, reserve/holding constraints, imported unknown fields, prototype hazards, recurrence occurrence identity, race handling, stale reviews and atomic rollback.
4. Storage: concurrent windows, failed writes/quota, pre-restore/start snapshots, backup timestamps versus verification, user-directed reset, browser eviction/clear-data behaviour and honest recovery limitations. Review retention of snapshots against any future deletion promises.
5. DOM and CSP: stored/imported XSS, HTML escaping, dialogs/top-layer/focus, hidden amounts, exports and spreadsheet formula protection. Confirm no private data appears in telemetry, URL parameters, logs or network requests. Test downloaded code as served by GitHub Pages, not only source.
6. Update pipeline: repository permissions, dependency/build reproducibility, static asset completeness, service-worker lifecycle and cache updates, preservation of existing records, and how a malicious or broken release could affect local data.
7. Product claims: no bank execution, no native always-running recurring scheduler, no automatic manual-to-recurring transaction matching, no encrypted local database, no secure password recovery for encrypted backup files, and no claim of independent review until one is actually completed.

## Expected independent deliverables

A dated report specifying commit/build and tested device/browser versions, threat model, reproducible findings with severity, fixes and retest evidence, remaining risks, and explicit launch recommendations. Device acceptance is tracked separately in `IPHONE-ACCEPTANCE.md`.

## Engineering references used

- [MDN — SubtleCrypto.encrypt](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt): Web Crypto encryption and authenticated AES-GCM API behaviour.
- [OWASP — Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html): password derivation work-factor guidance. PBKDF2-SHA-256 is used here for native offline Web Crypto compatibility; this choice is not a claim of FIPS certification or OWASP approval of the app.

## 1.10 additions to review

Review the bounded undo journal and recovery snapshots for retention of deleted values, imported patch validation, stale dependency checks, and atomic rollback. Review duplicate acknowledgements against concurrent writes and changes to the draft, and recurring linking against occurrence reuse. Confirm the financial-content digest cannot incorrectly reset backup reminders after intervening saves or a restore. Check that translation changes presentation only, preserves form option values and user-supplied strings, and cannot introduce HTML through translated text. No financial data is sent to a translation service.
