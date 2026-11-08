# Ghars 1.14.0 — weekly overviews and spending limit

Build `dirhaya-v1-20261108-01` adds a week-by-week overview to the existing compact Overview. Use the arrow controls to compare this week with earlier weeks. Weeks run Monday through Sunday using the device's local date. The card shows recorded spending, income and up to three largest spending categories.

Set or edit a **Weekly spending limit** from that card. The comparison uses recorded expenses only; transfers, opening balances, balance corrections, goal allocations and investment contributions do not count as spending. The limit never changes an account balance. Enter `0` to turn it off. The overview follows the app's **Start from today** tracking boundary; earlier records remain in Activity.

The offline assistant understands **spending this week** and **weekly budget**. The weekly limit is a local preference in Ghars settings and is included in ordinary Ghars backups. Older saved records and backups without this field remain valid. No account, transaction, goal, balance or earlier-period data is rewritten by installation. Resetting money records clears weekly and monthly limits, like other spending settings reset by that action.

Automated tests cover Monday/Sunday boundaries, weekly navigation and totals, preference validation, chat summaries and unchanged balances. Physical iPhone/Safari layout and accessibility checks remain pending; see [IPHONE-ACCEPTANCE.md](IPHONE-ACCEPTANCE.md).
