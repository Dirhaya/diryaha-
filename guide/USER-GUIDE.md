# Using Dirhaya

## Start with the right balance

Add each real place that holds money: your bank, savings account, cash, digital wallet, or prepaid card. The starting balance is a snapshot; only record transactions that happen after that snapshot.

To reconstruct this month's salary and spending, use the balance before those transactions as the starting balance, then enter the transactions. Entering today's balance and adding a salary already included in it would count the salary twice.

## Bank accounts and debit cards

Under **Accounts**, add your bank, then **Link a card**. Give the debit card a name and optionally its last four digits. You never need a full card number, PIN, expiry, or security code.

The card shows its linked bank balance and spending paid with that card. It does not add money to your total. Choose the card in the expense form to record a payment; the linked bank is reduced once.

A separately loaded prepaid card is different: add a **Prepaid card balance** account because it holds its own money.

## Put money toward China, a car, or marriage

Open **Goals**, choose a shortcut or **New goal**, and set your own target and optional date.

In **Add savings**, choose **Where the savings will be held** and **Take the money from**. Choose the same account when the money is already there. Choose a different source only when you have actually moved the money; the app records that transfer and reserves the savings at the destination. Dirhaya never moves money at your bank.

The savings are included in total money and excluded from unreserved money. Every goal detail shows its holding account. **Move saved money** records an actual move to another holding account without losing goal progress. **Release savings** makes reserved money available for spending; it does not move money by itself.

## Find unexplained spending

On Overview, use **Check my balance**, select an account, and enter the real current/posted balance from that account. Check the same kind of balance consistently and account for pending card payments and unlogged transfers first.

A lower actual balance creates an **Unexplained** expense for the gap. A higher balance creates **Unexplained income**. A matching balance adds no expense or income. Repeat checks compare against the updated balance, so the same gap is not recorded twice.

This identifies a difference, not its cause. Missing transfers, bank fees, forgotten expenses, pending payments, and incorrect starting balances may explain it. The app cannot see your bank statement.

### Your AED 10,000 example

Assume no opening balance or other income, and that the savings were moved to a separate savings account:

| Item | AED |
| --- | ---: |
| Salary received | 10,000 |
| Known spending | 1,000 |
| Saved toward goal one | 2,000 |
| Saved toward goal two | 1,500 |
| Expected remaining bank balance | 5,500 |
| Actual remaining bank balance | 1,000 |
| Unexplained spending | 4,500 |

After the check, total money is AED 4,500: AED 1,000 in the bank and AED 3,500 in savings. Goal reservations are part of that total, not extra money. Total spending is AED 5,500: AED 1,000 known and AED 4,500 unexplained.

If the savings stayed inside the same bank account, they were never an outflow from that account. The missing amount is then AED 8,000. A reservation claiming AED 3,500 is still held in an account with only AED 1,000 is not fully funded; the app asks you to correct the holding location or release the unfunded reservation first.

The salary and spending panels do not claim to trace a specific salary payment once it is mixed with older money or other income. They show monthly salary and recorded spending; balance checks identify gaps per account. A gap is dated on the day it is found, not an invented original date.

## Explain some money later

Tap **Unexplained spending**, choose an entry, then **Explain part or all**. Enter the amount you remember, its category, and a note.

For example, explaining AED 500 of the AED 4,500 gap leaves AED 4,000 unknown and increases known spending to AED 1,500. The bank balance and total spending do not change again.

If you discover the gap was actually a transfer or an incorrect entry, remove or correct the mistaken entry and record the real transaction. Recheck the affected accounts afterwards. Deleting an entry recalculates balances and is blocked if it would leave reserved savings unfunded.

## Ask the offline assistant

Type any of these, substituting your actual account or goal names:

- `2500 - 350`
- `(10000 - 1000 - 2000 - 1500) / 2`
- `20 percent of 500`
- `7 * 9`
- `balance`
- `salary`
- `unexplained`
- `spending this month`
- `goals`
- `expense 25 from Cash for coffee`
- `income 10000 to Bank for salary`
- `transfer 200 from Bank to Cash`
- `save 500 to China trip from Savings`

The assistant supports a small set of explicit commands. Use exact account/goal names. It opens a review form for money changes; a chat command alone does not save a transaction. Calculations use exact decimal fractions and label rounded division answers.

## Keep your records

In Settings, choose **Save a backup** and keep the `.dirhaya` file in Files. **Restore a backup** replaces the current records after review. **Undo the last restore** can recover the snapshot from before that restore. CSV export is for reviewing entries; the complete backup also includes accounts, linked cards, goals, and settings.

Back up before changing devices, switching hosts, deleting the app, or clearing website data. Internet is not needed to save a local backup, although a cloud destination in Files may need internet to sync.

Settings also includes beige/grey themes, hiding amounts, a name field, an optional spending limit, and an isolated sample mode. Sample changes do not overwrite your real finances. The downloadable interactive preview has no persistent saving at all.
