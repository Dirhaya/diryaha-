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

## Record laundry spending

In version 1.4.1, choose **Add entry → Expense → Category → Laundry**. To recategorise a saved expense, open it in Activity and choose **Edit entry → Category → Laundry**. The graph shows Laundry separately, and the assistant understands `spending on laundry this month`. Existing entries are not automatically recategorised.

## See where your money goes

In version 1.3, open **Overview → Where your money goes** and choose a period and account. The graph ranks broad categories by amount. **All recorded dates** combines your saved history. In **Activity**, the graph follows the account, month, type and search filters and includes matching records beyond the first displayed page.

Groceries appear within Food & drink, Health appears within Health & personal care, and Gifts appears within Gifts & charity. These are display groups; saved category labels remain unchanged. Unexplained amounts are never guessed into another category. Amounts and bar proportions are hidden when the eye/privacy setting is enabled.

For assets you still own, create an account with type **Investment account** and record contributions as transfers from the bank or cash account. Gross contributions appear separately from spending and remain included in total money. Transfers between investment accounts and withdrawals are not new contributions. Values are entered manually and do not track market prices. Other transfers and goal reservations are excluded from the chart. Refunds remain income, so the chart shows gross spending rather than spending net of refunds.

Percentages use spending plus gross investment contributions as their denominator. The graph uses the dates you entered; it cannot correct estimated dates or duplicate entries. Existing data is preserved on update. Bank statements and personal records are not included in app releases.

## Keep the assistant beside an entry

In version 1.4, tap **Assistant / calculator** while viewing a page or filling in an expense, income or transfer. The helper stays usable inside the entry sheet. On small screens it sits above the form; on wider screens it sits beside it. Tap the minus button to minimise, then reopen it to resume. The current form is preserved.

For a positive calculation result with no more than two decimal places, **Use amount** fills the active amount field. It does not save the entry or change its account, date, note or category. Review and save the form yourself. Negative, zero, overly large and higher-precision answers are displayed without a Use amount button. You can still type a chosen rounded amount manually.

The full Assistant tab has a minimise button that returns to the page you came from. Full and floating chat share conversation history, unfinished text and the last calculation. `ans` reuses the displayed last result, including its displayed rounding; it is cleared by Clear chat, privacy toggles and switching demo/real data. Chat is session-only and disappears when the app reloads. Minimise does not clear it.

The floating helper can show balances and goals, answer spending questions, and calculate. A command that prepares a new entry stays in chat for review from the main Assistant tab after you finish or cancel your current form. It never replaces an unfinished entry automatically. Hiding amounts also clears chat and disables the helper until amounts are shown again.

## Ask the offline assistant

Type any of these, substituting your actual account or goal names:

- `2500 - 350`
- `(10000 - 1000 - 2000 - 1500) / 2`
- `20 percent of 500`
- `7 * 9`
- `split 120 between 3`
- `20% off 150`
- `add 5% to 100`
- `ans * 2`
- `spending last month`
- `salary last month`
- `income last month`
- `spending on food this month`
- `spending on transport last month`
- `budget`
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

## Update the installed app

Version 1.4.2 adds **Settings → Check for updates**. Connect to the internet, run the check, and keep the app open while an update downloads. When **Update ready → Reload** appears, finish your current entry and choose Reload. The confirmation explains that unfinished forms and calculator text will be lost; saved records stay on the device.

Before this version arrives, the older equivalent is **Settings → Add to your iPhone → Check offline status**. Keep the installed app open online, then fully close it in the app switcher and reopen it. Check the version in Settings. Deleting the app or clearing Safari/website data is not required and can remove financial records. Safari and the installed app may use different storage, so check the installed copy itself.

## Log a quick expense

Version 1.5 adds **Quick expense** to Overview and Activity. Tap Food & drink, Transport, Laundry, Groceries, Bills or Shopping, enter the amount, check **Pay from**, then tap **Save expense**.

The category is already chosen and the date is today. Open **Date & note · optional** to backdate the entry or add a note. Use the normal Add entry form for other categories, income or transfers. Quick buttons do not repeat the previous amount or save automatically.

The selected account or linked card comes from your latest saved expense in that category. If there is no category history, the latest expense account is used; with no expenses, the first account is selected. You can change it before saving. Cancelled or failed entries do not change this default. Deleting or resetting the source history changes which default can be remembered. These preferences remain separate for each device's records and for sample mode.

The floating assistant/calculator works inside the quick form, including Use amount. Always review the payment account before saving. A shortcut uses today's date even if Activity is currently filtered to an older month.

## Track shares inside one investment portfolio

In version 1.6, open **Accounts → Investments → Add portfolio**. One portfolio can hold multiple companies. Enter an opening total only for cash and investments not already represented by another app account; otherwise start at zero.

Open the portfolio and choose **Add stock / holding**. Enter a company or fund, the number of shares, total original cost, and total current value. For example, 400 shares costing AED 1,000 and currently worth AED 1,000 are one AED 1,000 asset, not AED 1,000 per share. Fractional shares support up to six decimals.

Choose how the money is recorded:

- **Already included in this portfolio’s balance:** labels part of its existing value as shares. It does not add wealth. Use this after you already entered an opening balance or transfer.
- **Move money from another app account:** records a transfer, then assigns the holding. Expand Source account to choose where the funds come from. Amount moved defaults to original cost; for an old individual-stock account already valued differently, explicitly use its current recorded value. The difference between transferred amount and current holding value becomes a valuation adjustment.
- **Existing investment not yet counted anywhere:** adds its current value to the portfolio as an asset adjustment. Use only when that value is absent from all other accounts.

The portfolio shows share value and cash/value not yet assigned to holdings. These add up to the portfolio total, which is included once in total money. Goal reservations remain part of those same assets. Valuations are manual and do not fetch live prices.

Tap a holding to update its quantity, original cost or current total value. The change in current value updates total money as a valuation adjustment, not income or spending. Do not use quantity/cost edits to conceal a purchase: funding for additional purchases must also be recorded. Separate purchases can be entered as separate holdings/lots with the same company name.

**Sell all shares** removes that holding and leaves the net proceeds as portfolio cash. Enter proceeds after any fees, then record a transfer if you withdraw the cash. Partial sales are not supported in this release. **Remove share details only** requires confirmation and keeps the account value unchanged; it does not sell anything or remove wealth.

You can retain your old individual-stock accounts. To consolidate a balance that has no holding details yet, add it to the portfolio using Move money from another app account and its actual recorded value; do not also choose the unrecorded option. Reserved goal money may need to be moved or released separately. Nothing is automatically merged or deleted.

The app prevents withdrawals that would spend the value still assigned to shares. Update or sell the holding first. Portfolio-generated financial records are managed through the holding, not deleted or edited as ordinary expenses. Backups include holding details; use version 1.6 or later to manage them. Reset balances & history also clears investment holdings while keeping portfolio account names.


## Daily reminders (version 1.7)

Open **Settings → Reminders & app lock → Daily reminders**. Add or remove times, choose each time, and save. You can choose up to 24 distinct times per day; removing all times saves an empty schedule.

To receive alerts when Dirhaya is closed, tap **Export Calendar alerts** and import the resulting Dirhaya-daily-reminders.ics events into a calendar that supports this format. Enable that calendar's notifications. The events repeat daily at the selected local times, starting at the next occurrence. They contain only a generic expense-logging reminder, with no financial details.

**Saving times in Dirhaya alone does not activate alerts.** iPhone import options vary: if Files or the share sheet does not offer Calendar import, use a calendar app that supports .ics import, or create daily reminders at these times in Apple Reminders. Calendar/Reminders then controls delivery and Focus settings may silence alerts.

Editing or clearing the schedule inside Dirhaya does not alter events already imported. Remove the old repeating Calendar events before importing a changed schedule to avoid duplicate alerts. These are Calendar-based reminders, not web push notifications. Background web push requires an online push service ([Apple documentation](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)).

## Face ID / device lock (version 1.7)

Open **Settings → Reminders & app lock → Face ID / device lock**. Use the installed HTTPS app on a device supporting passkeys. Follow the device prompts to create and verify a passkey, then save the recovery code somewhere secure outside Dirhaya. Check the saved-code confirmation and enable the lock.

The app asks for your passkey on startup and locks when you leave it. You can also choose **Lock now**. An unfinished expense form remains behind the lock screen. Your phone selects Face ID or device passcode; the app cannot enforce Face-ID-only authentication. It does not photograph your face or receive biometric data ([Apple documentation](https://webkit.org/blog/11312/meet-face-id-and-touch-id-for-the-web/)).

To disable the lock, use its Settings screen and verify your passkey. If it is unavailable, open **Use recovery code** on the locked screen. A valid code disables the lock without modifying your financial records. Set it up again afterwards if desired. Cancelling setup does not enable the lock, although your passkey provider may retain the newly created passkey.

This is an app screen lock, **not encryption** of IndexedDB, exports, or backups. Someone able to modify browser storage or app code can bypass a local screen lock. Protect your device and backups. Lock configuration is separate from financial backups and must be enabled on each installation. Your passkey provider may sync the credential; Dirhaya does not sync your financial data. Do not clear website data to fix unlocking, because that can erase your records. Save the recovery code and keep regular financial backups.

Physical iPhone passkey prompts, background transitions, and Calendar imports still require device testing.


## Automatic updates (version 1.7.2)

Install this release once using Settings → Check for updates, then Reload update. Future checks run on opening, returning to the visible app, reconnecting, and every five minutes while open and online. Updates apply automatically after 30 seconds without interaction on an overview page. Open forms, Settings, the assistant, calculator work, authentication, and pending saves defer automatic reloads. Finish or close your work first. A manual Reload update option remains available.

Updates do not clear financial records. Offline use continues with downloaded files. An app that stays closed cannot promise an immediate update; open it online to receive new releases. A session guard prevents repeatedly reloading the same build.


## Ghars — غرس (version 1.8)
Dirhaya is now Ghars. The address stays the same. Your accounts, goals, investments, reminders and lock settings stay on the same device. The welcome screen appears once: tap Begin to enter Overview. The planting quote appears only on welcome; the short patience-and-building excerpt appears on Overview.

Choose Settings → Your space → A quieter palette → Night for charcoal surfaces and muted olive accents. Warm beige and Soft grey remain available. The choice is saved locally and included in backups.

Older installations may retain the old icon or Home Screen label until the platform refreshes it. Do not delete the app or clear website data to change branding. Existing backup files remain supported.
