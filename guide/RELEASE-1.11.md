# Ghars 1.11.0 — remove inactive accounts without losing investment funding history

Build `dirhaya-v1-20260925-02`.

Use **Accounts → select an old account → Remove from active accounts**. The same action is offered when permanent deletion is blocked by old records. Confirm the explanation before proceeding.

This closes the account inside Ghars only; it does not close a real bank account. The account and its linked cards disappear from active lists and new-payment choices. Its past transactions and transfer source IDs remain intact. Separate investment accounts, holdings, investment values, total wealth, income, spending and unexplained amounts do not change. The app preserves existing funding records; it does not invent sources for investments whose funding was never recorded.

An account must have a zero balance and no goal allocations or investment holdings before closing. If money remains, the sheet shows the balance and links to Record a transfer or Correct the balance. Transfer only if that moves recorded money to where it is actually held. If an amount is already included in an investment account and the old account is a bookkeeping duplicate, correct the duplicate balance instead of adding the investment again. No balance is automatically written off, transferred or labelled unexplained.

Recurring schedules for the closed account are paused. Favourites are retained but hidden from quick favourites until the account is reopened or their payment account is changed. The default payment is cleared if it used the closed account or one of its cards. New-entry defaults ignore closed accounts and prefer a non-investment account when there is no active recent expense. Historical activity and chart filters still include closed accounts, clearly labelled.

Open **Accounts → Closed accounts** to view the old account and its history or choose **Reopen account**. Reopening leaves schedules paused for review. **Undo recent changes** reverses closing and restores the previous schedule/default settings together. Closed-account history cannot be changed in a way that leaves a hidden balance; reopen it first when corrections are needed. Truly unused accounts can still be permanently deleted through the existing separate confirmation.

Backups keep closed flags, original records and references. Start from today keeps closed balances at zero without displaying unnecessary balance fields. There is no data migration or automatic closure/deletion on update.

238 automated tests pass. New coverage checks separate investment values and exact transfer references before/after closing, total and chart conservation, paused schedules/default cleanup/favourites retention, undo and reopen, invalid hidden balances, new-entry restrictions, encrypted backup roundtrips, active selectors and historical filters, Start from today, and atomic failed-write/reopen behaviour. Physical iPhone/Safari layout and update acceptance remain pending.

Update the existing installation using **Settings → Check for updates** and confirm **Running version 1.11.0**. Use the same installed copy and retain a verified backup.
