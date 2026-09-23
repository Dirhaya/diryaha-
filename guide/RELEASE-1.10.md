# Ghars 1.10.0 — easier family use

Build `dirhaya-v1-20260923-05`. The app address, local database name and backup format version remain unchanged. Updating does not reset existing records or require re-entry. Family members use the same link on their own devices; their local financial records remain separate.

## Undo recent changes

Open **Activity → Undo** or **Settings → Undo recent changes**. Review the latest action and confirm **Undo latest change**. Entries, edits, deletions, splits, account changes, goal allocations, investment changes and recurring reviews can be reversed one at a time, newest first. IDs and affected records are restored; unrelated display and personal preferences stay intact.

Only actions recorded after this update are included. The app retains up to 20 changes, with a 2 MB serialized journal limit; unusually large actions can shorten the available history. A dependency or changed record can block undo rather than create invalid balances or broken references. Restore, reset and Start from today establish a new undo boundary. Restore and Start from today retain their separate snapshot recovery features. Reset still requires its explicit warning and typed confirmation and has no in-app undo.

## Possible duplicate warnings

The expense, income, edit, repeat, favourite and recurring-record forms check for similar entries in the same account and of the same type. Equal amounts within three calendar days are flagged; amounts within 2% or AED 1 in the same category within one day are also flagged. Salary receives an additional same-month check. Editing an entry excludes itself.

A warning saves nothing. Check the existing entries, cancel or amend the draft, or tick **I checked. This is a separate payment.** and submit again. Changing the draft requires another acknowledgement. The storage transaction checks the latest records so concurrent submissions cannot silently bypass the warning. These are heuristic warnings, not proof that two legitimate purchases are the same. The app never auto-deletes a suspected duplicate.

## Link recurring bills to existing entries

In **Recurring entries → Review**, choose **Already recorded · link an entry**. Search the unlinked entries for the same account and income/expense type, select the payment, review it and confirm. The original amount and date remain unchanged, and no money moves. The scheduled occurrence is marked handled and the next date is prepared. Undo reverses the link and schedule advancement together. Cancelled occurrences can still be skipped.

## Expense favourites

Use **Overview/Activity → Manage favourites**, or **Save as favourite** on an expense. Save a name, usual amount, category, account or linked debit card, and optional note. Up to 30 favourites are available. Each shortcut opens a draft dated today; check and confirm it before recording. Amounts are not automatically charged or logged. Favourites are device-local and included in backups. Remove a favourite before deleting the account/card it uses. Money reset clears favourites as well as history.

## First-time setup

New installations are guided through name, language, text size, current account balances, default payment and the first backup. Opening balances are money already held, not new salary. Goal money and a linked debit card are not separate copies of the bank balance. Progress is saved so setup can resume. Backup creation and verification use the same existing encrypted-backup flow, with an explicit **Do this later** option.

Existing users are not forced into setup. **Settings → Guided setup** opens it when wanted and preserves existing entries. For an established ledger that needs a fresh tracking boundary, use the separate **Start from today** feature.

## Gentle backup reminders

An Overview banner appears when there is no matching verified backup, or after the selected interval or number of relevant changes. Defaults are seven days or 20 changes. In **Settings → Gentle backup reminders**, choose 3/7/14/30 days, 10/20/50 changes, or turn reminders off. **Tomorrow** snoozes for one day. **Back up now** opens the backup workflow.

Reminders appear inside the app, not as background push notifications. An export request never counts as verification. Reopen the saved file and complete verification. A canonical digest compares accounts, cards, entries, goals, holdings, recurring schedules, favourites and the tracking boundary against the current records. A matching verification resets the reminder baseline only if no intervening save occurred. An older or different copy does not clear the need to back up new changes. Display preferences and export bookkeeping do not affect this comparison. Restore clears reminder claims until the restored data is verified again.

## Arabic/English and larger text

Open **Settings → English / العربية · Text size**. Choose English or Arabic and Standard, Large or Extra large text. Arabic uses a right-to-left layout with translated interface labels and instructions. Names, personal notes and underlying account/category values are preserved. Choices work offline and are included in backups. The assistant's free-text entry command examples remain English; Arabic-labelled forms and buttons remain available. Existing arithmetic also accepts Arabic numerals.

## Updating and verification

Open the existing installed app online and use **Settings → Check for updates**. Close unfinished forms and helper drafts when ready, then allow the update or use the offered Reload control. Confirm **Running version 1.10.0**. Do not uninstall or clear website data to update. Keep a verified backup.

218 automated tests pass. New coverage includes exact ledger undo, dependency checks and failed-write rollback, bounded history, duplicate acknowledgement and concurrent submissions, matched recurring bills without double-counting, favourites through encrypted backups, setup completion/resume, reminder thresholds/current-copy checks, stable category option values during Arabic/English switching, and preserving synthetic records generated by the previous 1.9 core. Tests use Node.js, native Web Crypto and simulated DOM/IndexedDB/service-worker APIs.

Physical iPhone/Safari upgrade, keyboard, right-to-left layout, larger-text and VoiceOver checks remain pending in [the acceptance checklist](IPHONE-ACCEPTANCE.md). No independent security review is claimed. The app lock remains a screen lock; encrypted exported backups do not encrypt the device database. Undo history and snapshots can retain recently deleted records until aged out or cleared by the documented boundaries.
