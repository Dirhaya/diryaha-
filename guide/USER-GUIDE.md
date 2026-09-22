# Using Dirhaya

## Start with the right balance

Add each real place that holds money: your bank, savings account, cash, digital wallet, or prepaid card. The starting balance is a snapshot; only record transactions that happen after that snapshot.

To reconstruct this month's salary and spending, use the balance before those transactions as the starting balance, then enter the transactions. Entering today's balance and adding a salary already included in it would count the salary twice.

## Start again without deleting your accounts

Version 1.2 can clear old numbers and let you track from today. You do not need to reconstruct spending from earlier months.

1. Open **Settings → Reset balances & history**. Choose **Save a backup first** if you may want the old records later.
2. Type **RESET** and choose **Reset money records**.
3. Open **Accounts → an account → Set starting balance**. Enter the money actually in that account now. Repeat for each place that holds money.
4. If some of that money is already for a goal, open the goal and use **Add savings**, choosing the same account for where it is held and where it comes from. This reserves money already included in your balance.
5. Record income, expenses, and transfers that happen after your starting balances. Do not add an earlier salary again if it is already included in those balances.

The reset keeps your account names, types, colours, linked cards, goal names, targets, deadlines, and appearance preferences. It clears account balances, all transactions, unexplained amounts, balance checks, goal savings, and the spending limit. It also clears the internal restore snapshot, so it cannot be undone inside the app. Backup files you previously saved in Files are untouched and can still be restored.

Starting balances are not counted as salary or unexplained income. They can be edited while the account has no transactions or goal reservations; after you begin tracking, use the normal transaction and balance-check tools. Debit cards share the linked account's balance, so do not enter it twice.

Updating to version 1.2 preserves existing records. Nothing resets until you confirm. Open the installed app while online to receive the update; if Settings still shows an older version, close the app and reopen it after the update downloads. Do not delete the app or clear website data to update it.

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

## Correct the month of spending

In version 1.1, open **Activity**, select an income or expense entry, and choose **Split across months**. Enter the portion belonging to another month and its date, then save. The remainder keeps its original date. Both portions keep the account, payment card, and category. An unexplained entry stays unexplained unless you categorise it.

For example, moving AED 1,500 of an AED 4,500 entry to a date last month leaves AED 3,000 this month. Your bank balance and combined spending remain unchanged. Repeat to divide across more dates. Use the Activity month filter to see each month's Money out; Overview always shows the current month.

To move a whole entry, choose **Edit entry** and change **Date**. In **Explain part or all**, you can also choose the actual spending date while categorising a portion. If you only know the month, use a date in that month and mark the date as estimated in the entry note. Dirhaya cannot infer the correct month from the current bank balance.

Do not add an extra expense for money already included in an unexplained balance-check gap. Split or explain the existing entry to avoid counting it twice. Save a backup before changing old records. Version 1.1 preserves version-1 records and uses the same database; updating does not reset them.

## See where your money goes

In version 1.3, open **Overview → Where your money goes** and choose a period and account. The graph ranks broad categories by amount. **All recorded dates** combines your saved history. In **Activity**, the graph follows the account, month, type and search filters and includes matching records beyond the first displayed page.

Groceries appear within Food & drink, Health appears within Health & personal care, and Gifts appears within Gifts & charity. These are display groups; saved category labels remain unchanged. Unexplained amounts are never guessed into another category. Amounts and bar proportions are hidden when the eye/privacy setting is enabled.

For assets you still own, create an account with type **Investment account** and record contributions as transfers from the bank or cash account. Gross contributions appear separately from spending and remain included in total money. Transfers between investment accounts and withdrawals are not new contributions. Values are entered manually and do not track market prices. Other transfers and goal reservations are excluded from the chart. Refunds remain income, so the chart shows gross spending rather than spending net of refunds.

Percentages use spending plus gross investment contributions as their denominator. The graph uses the dates you entered; it cannot correct estimated dates or duplicate entries. Existing data is preserved on update. Bank statements and personal records are not included in app releases.

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
