# Ghars 1.10.1 — account deletion fix

Build `dirhaya-v1-20260925-01`.

A validation error containing “transaction” was incorrectly presented as a device-storage failure. Errors now retain their actual explanation; known browser storage failures still show recovery guidance.

Use **Accounts → select account → Delete unused account**. If the account has no entries, goal allocations, holdings, favourites or recurring schedules, the confirmation shows the balance that will be removed from the total. If it has unused linked debit cards, it names them and requires **Also delete these unused linked cards** before proceeding. Account, cards and their default-payment preference are updated atomically, and **Undo recent changes** restores them together.

Accounts referenced by recorded entries (including transfers and balance corrections), goals, holdings, favourites or recurring schedules remain protected. The sheet shows the relevant activity or linked items and provides buttons to review them. A zero balance alone does not make an account unused. No personal records are deleted by installing this update.

Deletion rechecks dependencies in the storage transaction. A new linked card or changed opening balance after review requires another review. Tests cover unused/used accounts, explicit card confirmation, default-payment cleanup, exact undo, failed-write rollback and reopening, dependency blockers, stale review and error classification. **227 automated tests pass.** Real iPhone/Safari acceptance remains pending.

Update the existing installed copy through **Settings → Check for updates**, then confirm **Running version 1.10.1**. Keep the same installation; no database reset or re-entry is needed.
