# Verification record

Verified on 22 September 2026 with Node.js v24. Tests run the production core, storage, UI templates, and service-worker source.

## Automated checks

Run `node --test tests/*.test.cjs`. Exact results from the release build are in `test-results.txt` beside this document.

- Monetary precision, decimal and Arabic-digit input, integer limits, income, expense, transfers, edit/delete behavior, and reserve constraints.
- Exact user scenario: AED 10,000 salary − AED 1,000 known spending − AED 3,500 transferred into reserved savings − AED 1,000 actual bank balance = AED 4,500 unexplained spending.
- Splitting unknown expenses into explained portions without changing total spending or debiting twice. Repeated balance checks, missing income, incorrect holding locations, and invalid categories.
- Debit-card payments debit the linked bank once; multiple linked cards create no extra money; prepaid cards retain independent balances.
- Goal transfers preserve total wealth, reservation amounts, and original allocation dates.
- Backup validation and recovery; account, card, and goal references; malformed dates and records; safe escaped text in templates.
- Offline arithmetic, operator precedence, exact decimal fractions, percentages, natural operator words, zero division, input limits, and review-only assistant drafts.
- Storage module exercised with a transaction-serializing in-memory IndexedDB adapter: restart reads, 40 concurrent updates, full rollback on validation or quota failure, and restore recovery.
- Service-worker module exercised with simulated cache/fetch APIs: required assets, offline HTML/JS/CSS responses, scoped cache cleanup, and no false readiness when an asset is missing.
- UI entry sheets, card selection, goal presets, live balance-gap preview, explanation sheet, activity filters, isolated demo changes, and privacy rendering with a minimal DOM adapter.

## Limits of this verification

The IndexedDB, cache, and DOM adapters are test doubles. They verify the application logic around browser APIs, not the browser's own implementations. No real Chromium, WebKit, Safari, or iPhone session was available. Browser installation was blocked by the environment's download policy; it was not bypassed. Visual layout, touchscreen/keyboard behavior, Add to Home Screen, actual device persistence, sharing to Files, and offline relaunch remain unverified on hardware.

The original release deployed successfully through GitHub Pages from main /docs, and the user reported installing it. Version 1.1 adds date splitting and version 1.2 adds a confirmed reset with retained accounts. Device-level testing of these new flows is still pending.

## iPhone acceptance check after deployment

1. Open the HTTPS deployment in Safari and add it to Home Screen. Open that icon. Confirm the beige theme, safe-area spacing, five navigation tabs, and all bottom-sheet buttons fit on the iPhone screen.
2. In the installed app, create a bank at AED 0 and a savings account at AED 0. Record AED 10,000 Salary and AED 1,000 expense. Link a debit card; confirm the total is still AED 9,000.
3. Create two goals. Save AED 2,000 and AED 1,500 in Savings, taking both from Bank. Confirm Bank is AED 5,500; Savings and goal allocations total AED 3,500.
4. Check the actual Bank balance as AED 1,000. Confirm unexplained spending is AED 4,500, known spending is AED 1,000, and total money is AED 4,500. Check AED 1,000 again; no new spending should appear.
5. Explain AED 500 as Transport. Confirm unknown spending becomes AED 4,000; known spending AED 1,500; Bank stays AED 1,000 and total spending stays AED 5,500.
6. Wait for Offline ready. Close the app, enable Airplane Mode, reopen from Home Screen, and verify the records and goals persist. Calculate `(2500 - 350) / 5`; expect 430. Add, edit, and delete a test expense; close/reopen and verify each saved change.
7. Test entry forms with the numeric keyboard visible. Switch beige/grey. Try long account names. Check that the active input, Save button, amounts, and bottom navigation remain reachable without horizontal page scrolling.
8. Export a complete backup to Files. Make a small change, restore the backup, and verify the earlier state. Use Undo the last restore and verify the pre-restore change returns. Export CSV and verify the debit card column. Keep the complete backup; CSV is not a restore file.
9. Test on a second window if using that mode, then close it. Enter real data only after these checks. Use the installed copy consistently and maintain backups.

These steps are a pending acceptance procedure, not a claim that device testing has been completed.

## Version 1.1: splitting across months

84 automated checks pass. New checks cover partial and repeated splits with exact fils, income and expense month totals, unchanged account balances and goal reservations, retained card/category metadata, invalid date/amount rejection, no duplicate balance-check spending, dating explained portions, version-1 backup compatibility, form submission, and atomic storage rollback plus reopening.

The data version, IndexedDB name, object store, and database version are unchanged. No startup migration or reset was added. Existing records are changed only when the user saves a split, explanation, or edit. The offline asset cache version is incremented independently.

On the installed iPhone after updating, open a test expense, choose Split across months, and move a portion to last month. Verify the current month drops by that amount, the prior month increases equally, and the bank balance remains unchanged. Close/reopen offline and verify both portions persist. These hardware checks are not claimed as completed.

## Version 1.2: reset numbers and retain account setup

98 automated checks pass. Added checks cover preserving account/card/goal identity and settings; clearing all balances, transactions, reservations, checks, and the spending limit; unchanged source records; and a revision increment without a schema change. Starting-balance edits create no income or unexplained entry. Transaction history, incoming transfers, and goal reservations prevent changing an account's starting balance after tracking begins.

Storage checks verify reset persistence after reopening, removal of the internal restore snapshot, atomic rollback of the entire vault on failure, and recovery from a previously exported backup. UI checks verify that opening or cancelling the dialog does not write, confirmation requires RESET, demo reset leaves device records unchanged, and the retained-account form saves a starting balance without adding income.

Reset uses one IndexedDB transaction to clear the vault and write the validated replacement. No reset runs at startup, on update, or without user confirmation. The database name, version, and data schema are unchanged. The service-worker asset build is incremented so installed apps can receive the new files.

Pending iPhone check: save a backup, confirm the reset, verify retained accounts/cards/goal plans and zero amounts, set actual starting balances, and record a new expense. Confirm no artificial income appears and the new balance persists after closing and reopening offline. These hardware checks have not been completed.

## Version 1.3: broad category graph

105 automated checks pass. Added checks verify grouping and ranking with exact fils, unchanged source records, investment contributions preserving total assets, exclusion of ordinary transfers and investment-to-investment moves, no duplicate card counting, and refunds/income/reservations staying out of expense totals. UI tests verify period/account selection, Activity filters, privacy hiding both values and proportions, investment account options, and reset compatibility. Test fixtures are synthetic and contain no statement data.

Graph elements use native HTML/CSS and existing app modules, with no external chart service or new runtime dependencies. Existing data is not migrated or overwritten. The account type allowlist gains investment; old backups remain readable by the new release. A backup with investment accounts requires this release or later to restore.

Pending hardware check: confirm graph labels and selectors fit the iPhone screen, change periods and accounts, toggle hidden amounts, and relaunch offline. No real Safari or iPhone test was available for this release; the automated UI uses a minimal DOM adapter.

## Version 1.4: floating assistant and offline commands

115 automated checks pass. New core tests cover exact bill splitting, discount/markup arithmetic, division-by-zero rejection, last-month queries, category aggregation and spending-limit replies. UI checks cover keeping the helper within the active modal, preserving the form and unfinished helper text across minimise/reopen, explicit amount insertion without storage writes, shared last-result arithmetic, privacy clearing, retaining entry drafts without replacing forms, and refusing to insert negative or high-precision amounts.

The helper uses existing app modules, native DOM elements and the existing calculator. It makes no new network requests, changes no storage schema and never auto-saves a financial action. App updates preserve saved records. Chat and calculator state are session-only.

Pending iPhone acceptance: open an expense, type an amount and note, open the helper, calculate, minimise and check the draft remains. Reopen, use a result, check other fields and save. Repeat with the keyboard visible and in landscape; confirm scrolling, focus and minimise remain reachable. Test offline relaunch. Automated DOM doubles do not verify Safari layout, top-layer rendering or keyboard behavior; no physical iPhone test is claimed.

## Version 1.4.2: update handling

119 automated checks pass. Service-worker tests now require reload-cache requests for every precached file; offline asset serving and scope-limited old-cache cleanup still pass. New UI checks cover explicit registration.update(), newer-build notification without automatic reload or form replacement, confirmation before reloading, no reload prompt for same/older builds, and offline-check failures preserving stored records. The update path never clears or recreates IndexedDB.

Physical iPhone update delivery remains unverified. Pending acceptance: update an installed older version online, confirm the ready prompt, cancel a reload to retain a draft, then save the draft and reload. Verify the new version, stored records and offline restart.

## Version 1.5: quick expense entry

125 automated checks pass. New UI checks cover all six shortcuts, no mutation on open/cancel, exact fils and linked-card account mapping on save, restored-state payment defaults, category-specific defaults taking priority over other expenses, invalid-amount rejection, duplicate-submit protection, calculator/form coexistence, demo isolation and empty-account onboarding.

Existing core validation and atomic persistence handle quick entries. No schema, storage name or stored-record migration was added. Payment defaults are computed from saved expense history; amounts are never repeated automatically.

Pending iPhone check: tap a shortcut, verify the keyboard and payment selector are reachable, expand date/note, use and minimise the calculator, save, then reopen offline and check the default. Automated checks use the DOM adapter; no real iPhone layout/keyboard test is claimed.

## Version 1.6: investment holdings

135 automated checks pass. Holdings tests verify exact wealth conservation for purchases, no expense/salary inflation, multiple companies within one portfolio, no double counting of already-included assets, unrecorded assets added once, valuation deltas, full sales to cash, explicit funding different from original cost, protected backing balances and generated ledger entries, invalid/fractional quantities, atomic rejection, JSON backup round trips and reset clearing holdings. UI tests submit actual holding forms and verify saved quantities and valuation totals.

Holdings are optional per-account metadata and their value is included in the existing account balance. No database migration, storage-name change or automatic rewrite is performed. Ledger and holdings changes are committed together by the existing atomic storage path. Existing investment accounts without holdings remain valid. Physical iPhone portfolio form/layout testing remains pending.


## Version 1.7 checks

147 automated tests pass. Added schedule validation, duplicate times, daily Calendar recurrence and alarms, next-occurrence dates, settings backup round trips, and preservation through money reset.

Passkey tests use real Node WebCrypto ECDSA signatures with a simulated credential provider. They verify challenge, origin, credential ID, relying-party hash, user-verification flags, invalid signatures, setup cancellation, recovery hashing, and authenticated removal. DOM tests verify no financial storage read before startup unlock, preservation of expense drafts, blocked navigation while locked, cancelled unlocks, recovery, and storage-error handling.

These checks are not a real Safari or iPhone test. Face ID/passcode prompts, Calendar import and alert delivery, and iOS background snapshots need physical-device verification. The feature is a local screen lock, not data encryption. Calendar alerts require explicit import and are managed separately after import.


Version 1.7.2: 152 tests pass. Added automatic update checks for idle application, open drafts, settings, calculator, screen lock, offline checks, and reload-loop prevention. Browser lifecycle APIs are simulated; physical iPhone testing remains outstanding.
