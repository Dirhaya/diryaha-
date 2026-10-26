# Ghars 1.12.0 — partial stock sales

Build `dirhaya-v1-20261026-01`.

## Record a partial sale

Open **Accounts → your investment account → the stock → Sell part of this holding**.

Enter the number of shares sold, the actual proceeds received after fees, and the sale date. The share count is not the AED amount. Fractional shares up to six decimal places are supported. Confirm that the sale has not already been recorded, review the preview, and select **Record partial sale**. To dispose of the entire holding, keep using the separate **Sell all shares** option.

Only the sold shares are removed. Their proportion of the saved original cost and current value is allocated using exact integer share units and rounding to the nearest fils. The remainder stays with the same holding ID. The remaining valuation is a proportional estimate from the saved value, not a new market quote; the previous valuation date remains unchanged. Update the remaining holding value separately if market prices have moved. This is not tax-lot accounting or a tax calculation.

The net proceeds become cash inside the investment account. Total wealth changes only by the difference between net proceeds and the sold portion's saved value. There is no salary, expense or unexplained-income entry. Fees already deducted from net proceeds must not be entered again.

## Move the proceeds into the bank

After saving, **Record transfer to bank** opens a separate transfer draft with the source portfolio, a suggested active bank/savings account and the proceeds prefilled. Check the destination and actual transfer date, then save. Nothing reaches the bank balance until this separate transfer is confirmed. If the money is still with your broker, leave it as portfolio cash.

For a sale returning AED 500, the portfolio cash increases by AED 500 when the sale is recorded. A subsequent AED 500 transfer reduces portfolio cash and increases the bank by the same amount. That transfer does not increase total wealth. Any later spending is logged separately against the bank.

## History, undo and safeguards

**Accounts → investment account → Partial-sale history** shows the latest 20 partial sales, including shares sold, date, proceeds and shares remaining at that point. The full audit remains in the backup. Sales with no valuation difference still have an audit record. Closing the account retains this history; an account with sale history cannot be silently deleted or have its opening balance rewritten.

**Undo recent changes** reverses the sale's share count, remaining cost/value, cash adjustment and audit record together. If a transfer was recorded afterward, undo the transfer first, then the sale. Undo remains bounded by the existing recent-change retention policy. Reset money clears sale history after its existing confirmation; restore keeps sale records but begins a new undo history.

The sale is rechecked against the current database revision. Another save during review requires reopening the partial-sale form. Concurrent or repeated submissions of the same review commit at most once. Overselling, zero/negative share counts, excessive precision, future dates and negative proceeds are rejected. A loss that would leave goal reservations underfunded is rejected without changing records. This does not prevent someone deliberately opening a fresh form and entering the same sale again; check the history before recording.

Existing accounts, holdings and transactions are not rewritten by installing this release. The device database name, schema version and backup envelope version stay unchanged. The new audit is an optional `investmentSales` collection and is covered by encrypted backups and backup-content verification.

252 automated tests pass, including exact fractional allocation, cash/wealth conservation, sale gain/loss handling, other holdings unchanged, stale/concurrent confirmation, goal protections, atomic failed writes, reopen/undo, encrypted backup roundtrip, escaped/hidden audit display and separate transfer drafts. Tests use Node.js and simulated DOM/IndexedDB/service-worker APIs. Physical iPhone/Safari acceptance remains pending; no independent security audit is claimed.

Update the existing app via **Settings → Check for updates** and confirm **Running version 1.12.0**. No reinstall or manual re-entry is needed.
