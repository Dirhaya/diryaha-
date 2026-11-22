# Ghars 1.15.0 — Charity

Overview now has a compact Charity card with total donated. Open it to see donation history, this month's donations and this week's donations, or record a donation.

Donations reduce the paying account once, including payments made with a linked debit card. They do not count towards ordinary expenses, weekly/monthly spending limits, or spending charts. Net cash movement still includes donations.

Activity has a Donations filter and separate Spending and Donated totals. Donations support editing, deletion, repeating, duplicate warnings and undo. The offline assistant understands “charity”, “donations this month” and “donations this week”.

Existing Gifts and expenses are not automatically changed. To classify an earlier expense as a donation, edit its category to Charity; do not add a second transaction.

The Charity panel includes all recorded donations, including history before a tracking start date. Regular spending summaries still respect the tracking start date.

No database reset or migration is required. Donations use the existing outflow ledger with a Charity category. Old backups remain readable; restore backups containing Charity entries in this version or newer. CSV exports label these rows as donations.

## Verification

Automated tests cover cash deductions, separate totals, dates, tracking boundaries, recategorisation, undo, reserved funds, encrypted backups, recurring review, duplicate confirmation and failed-save rollback.

Physical iPhone testing has not been performed for this release. Before relying on the update, use synthetic records to check recording, editing, deleting and undoing a donation; verify its account balance changes once while expense totals stay unchanged. Check Arabic, large text, dark mode and offline reopening. Export and verify a backup before updating.
