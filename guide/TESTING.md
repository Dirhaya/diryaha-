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

This repository uses GitHub Pages publishing from main /docs. Enabling Pages and checking the live iPhone installation remain pending. No successful deployment is claimed.

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
