# Ghars 1.16.0 — Spend from goals

Open Goals, choose a goal, then Spend from goal. Select an account holding that goal's savings, or its linked debit card. Enter the amount and date and confirm the payment you made. This records the payment locally; it does not initiate a bank payment.

Each goal shows its target, already spent, saved money left to use, and how much still needs saving. Progress includes saved money plus goal payments, so using the savings does not erase progress. Amounts already spent are not included in current wealth.

Goal payments reduce the paying account and the reservation together. They are excluded from ordinary weekly/monthly expenses, spending charts and limits. They remain in Activity under Goal payments, in the goal's recent history, and in net cash movement. Charity stays separate.

You cannot spend more than this goal has saved in the selected account. If paying from another account, use Move saved money first to record the real transfer. Other goals' reserves remain protected.

To correct a payment, delete it and record it again. Deleting restores both the bank balance and the goal reservation. Undo recent changes also works. Goals with payment history cannot be removed; keeping them preserves their records.

Existing expenses are not automatically converted into goal payments. Do not enter the same purchase twice. Existing account data and goals remain intact; no reset is required. Backups containing goal payments should be restored only in this version or newer so reports classify those payments correctly.

Automated tests cover balances, progress, budgets, invalid amounts, other goals, linked cards, deletion, undo, duplicate review, encrypted backup roundtrips and atomic storage failure/reopening. Physical iPhone testing remains outstanding. Verify a backup before updating, then check a synthetic partial payment, undo, Arabic, large text, dark mode and offline reopening.
