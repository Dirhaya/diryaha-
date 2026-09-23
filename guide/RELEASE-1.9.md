# Ghars 1.9.0 — everyday tracking and verified backups

Build: `dirhaya-v1-20260923-04`. Published files are generated from `public/` into `docs/`. Existing database name, object store, database version, data format, app URL, and passkey keys are unchanged. No reset or financial migration runs during an update.

## Backup and restore

Open **Settings → Backup & restore → Create a backup**. Encryption is selected by default. Enter and repeat a long password (at least 12 characters), prepare the file, then tap **Share / Save to Files**. On iPhone, choose **Save to Files**, select a recognisable folder, and tap **Save**. A separate **Download file** button is available if sharing fails or is unavailable. Preparation and sharing are separate actions so sharing can begin from a fresh tap on iPhone.

Files use a unique `Ghars-date-time-id-encrypted.json` name. Plain JSON exports are explicitly selectable. Older `.dirhaya` and plain JSON backups remain readable. CSV files are for spreadsheets and cannot restore the app. The picker intentionally accepts all file types to avoid making older iPhone files unselectable; the selected content is validated before use.

**Export requested** means the share/download handoff completed. It is not proof of saving. Cancelled sharing does not record a successful handoff. **Backup verified** is recorded only after the user reselects a saved file, decrypts it if needed, and its data passes validation. Its SHA-256 file digest is compared with the latest export so an earlier or different backup cannot be labelled as verification of the latest export. Later changes still need a new backup. Verification does not replace money records.

Find files in **Files → Browse** using the chosen folder or search `Ghars-` / `Dirhaya`. Browser downloads can be under iCloud Drive or On My iPhone → Downloads according to browser settings. Ghars cannot discover the chosen save location or ensure the user retains the file.

Restore checks the file first, shows record counts, and requires a confirmation checkbox before replacement. It keeps an atomic pre-restore snapshot. **Undo the last restore** returns to that snapshot. A stale restore review is rejected if another app window has saved since the preview.

Encrypted backups use native Web Crypto AES-256-GCM, a new random 16-byte salt and 12-byte IV, and PBKDF2-HMAC-SHA-256 with 600,000 iterations. The encryption format/version/algorithm header is authenticated. Unsupported parameters, invalid sizes, wrong passwords and failed authentication are rejected. Passwords and keys are not saved in app settings or sent to a server. A forgotten backup password cannot be recovered; the screen-lock recovery code is unrelated. Device records are still not encrypted by Ghars.

## Overview and accounts

The three additive amounts are:

- Available cash: balances outside investment accounts minus the goal money reserved in those accounts.
- Cash set aside for goals: those cash reservations.
- Investment accounts: their entire recorded balance, with holdings value and cash/unassigned value shown as its components.

Their sum is total money. Goals backed by investment accounts are shown as a subset, not added again. Linked cards are not additional money. Spending has already reduced balances; future recurring bills have not. Values are manually recorded assets, not a complete net-worth calculation with debts.

**Start from today** is available on Overview and in Settings. Enter each account's current total, including goal money and holdings. Confirm the values. Differences are balance corrections, never invented salary or spending. Existing entries, including those previously recorded today, remain in Activity but no longer contribute to the default Overview period. New entries begin tracking from that setup. Goal and holding constraints still apply; the app does not silently release reservations or discard investments.

A pre-setup snapshot is saved atomically. Tracking options can include all history in Overview without changing balances, or explicitly restore the pre-setup snapshot (replacing later changes). The separate destructive Reset still requires typing RESET and clears numbers/history/schedules/snapshots while retaining account names, linked cards and goal targets.

**Accounts → account → Correct balance** fixes bookkeeping without income or spending. **Check actual balance** retains its separate behaviour of recording unexplained differences. Record Salary only for genuinely new receipts; use transfers to move existing funds to investment accounts and holding valuations for changes in investment value.

## Faster input and recurring entries

**Quick expense → Customise** or Settings lets the user select up to eight broad categories and a default account or linked debit card. Without a fixed default, the last payment in that category is remembered, then the latest expense. **Activity → expense → Repeat this expense** opens a draft with its amount, account, category and note, dated today. It does not save until confirmed.

**Recurring entries** supports salary, rent, subscriptions and bills as income/expense templates, with daily, weekly, monthly or yearly recurrence. Dates retain their original monthly anchor, including shorter months and leap years. Templates can be edited, paused or deleted. Deleting a template retains recorded transactions.

Due occurrences are prepared when the app is opened or viewed; the Overview refreshes on a new day when idle. They do not need a network connection or a background task. The earliest unhandled due date for each schedule is reviewed one at a time, with the actual amount, payment account and date editable. Confirming writes the entry and advances the schedule in one storage transaction. Double submissions or concurrent windows cannot record the same occurrence twice. Skipping marks that date handled without moving money. A manually logged bill is not automatically matched: skip its recurring occurrence to avoid adding it again.

## Updates and outstanding release checks

Settings and the installation screen show version and build. A downloaded update explains whether it is waiting for saving, an open screen, or assistant work. It applies after 30 idle seconds on a main view with no unfinished forms, assistant state or writes. Explicit reload still warns about unsaved work. The update does not delete IndexedDB.

Automated checks use Node.js, real Web Crypto, and simulated DOM/IndexedDB/service-worker APIs. The committed `tests/fixtures/v1.8-synthetic.json` was generated with the previous 1.8.0 core; it contains only synthetic records. Tests reopen it unchanged under 1.9 and roundtrip it through encrypted backup/restore.

**Not completed:** physical iPhone/Safari acceptance, actual sharing/download to Files, and an independent security review. See `IPHONE-ACCEPTANCE.md` and `SECURITY-REVIEW.md`. Automated results do not establish that these device behaviours or the security of the complete product have been independently verified.
