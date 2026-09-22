# Dirhaya · درهايا

A beige/grey personal money app for iPhone Home Screen use. It tracks bank accounts, linked debit cards, cash, prepaid balances, savings goals, salary, and unexplained spending. Includes a local arithmetic assistant and device backups.

## Publish the app

The app is published at [dirhaya.github.io/diryaha-](https://dirhaya.github.io/diryaha-/). GitHub Pages uses these settings:

1. Open [this repository’s Pages settings](https://github.com/Dirhaya/diryaha-/settings/pages).
2. Under Source, choose **Deploy from a branch**.
3. Select **main** and **/docs**, then **Save**.
4. Wait for GitHub’s Pages deployment to finish and use the **Visit site** link shown in those settings.

No custom Actions workflow is needed. `docs/` contains a deployable copy of `public/`, including `.nojekyll`. Publishing code does not upload the financial records saved on your device. Never commit backups or personal exports.

## Install on iPhone

Open the published HTTPS address in Safari. Choose **Share → Add to Home Screen**, keeping **Open as Web App** enabled if shown. Open the new icon and wait for **Offline ready**. Test closing and reopening in Airplane Mode with sample records before entering real balances.

A ZIP downloaded in Files is source code, not an iPhone installer. The optional HTML preview does not save changes.

## Version 1.6: portfolio holdings

**Accounts → Investments → Add portfolio** groups several companies or funds in one account. Each holding records shares (up to six decimals), total original cost and manually entered current value. Holding value is a breakdown of the portfolio balance, never an additional copy of that balance.

Add existing shares already included in the portfolio, move funding from another recorded account, or explicitly add an existing asset not yet counted anywhere. Valuation changes adjust total assets without becoming spending or salary. Full sales convert holding value into cash within the portfolio. Partial sales and live prices are not supported. Existing account data is preserved.

## Version 1.5: quick expense buttons

**Overview** and **Activity** now have quick buttons for Food & drink, Transport, Laundry, Groceries, Bills and Shopping. Tap a category, enter an amount, check the payment account and save. The date defaults to today; an optional details section contains the date and note. Nothing is recorded by tapping a shortcut alone.

The account or linked debit card defaults to the latest saved expense in that category, then the latest saved expense overall, then the first available account. Defaults are derived from saved records, so they survive reopening and do not require a new database or settings migration. The amount is always blank. The floating assistant remains available.

## Version 1.4.2: explicit app updates

**Settings → Check for updates** requests a service-worker update. Once a newer build is downloaded, an **Update ready → Reload** button appears. Reload requires confirmation because unfinished forms and chat are session-only; saved records remain in IndexedDB. Downloads bypass the browser HTTP cache, while offline launches still use the complete local asset cache.

On older releases, open the installed app online, use **Settings → Add to your iPhone → Check offline status**, leave it open while files download, then fully close it through the app switcher and reopen. Check the version in Settings. Do not delete the app or clear website data as an update step. If the old version remains, report its version so the installed context can be diagnosed.

## Version 1.4.1: Laundry category

Choose **Laundry** when adding, editing or explaining an expense. It appears separately in the spending graph. The offline assistant recognises laundry and dry-cleaning expense notes, and supports `spending on laundry this month`. Existing entries keep their categories.

## Version 1.4: assistant beside your forms

Open **Assistant / calculator** on any page or inside an entry sheet. Minimise and reopen without losing the conversation, unfinished calculation, or expense form. **Use amount** explicitly fills the active amount field; it never saves an entry. The full Assistant tab also has a minimise button that returns to the previous page. Chat is kept for the current session, not persisted in backups.

New offline commands include `split 120 between 3`, `20% off 150`, `add 5% to 100`, `ans * 2`, `spending last month`, `spending on food this month`, and `budget`. Form-changing commands remain reviewable in the main Assistant tab, so they cannot replace an unfinished form from the floating helper.

## Version 1.3: broad category graph

**Overview → Where your money goes** shows ranked bars with period and account selectors. **Activity** shows the same graph for its current filters, across all matching records. Groceries merge into food and drink visually; saved entries are unchanged. Unexplained spending stays separate. The privacy toggle hides values and bar proportions.

Add an **Investment account** and record contributions as transfers into it. These appear separately from spending; other transfers, investment withdrawals, moves between investment accounts, and goal reservations are excluded. Investment balances are manual, not live market values. The graph is entirely local and works offline. It does not parse bank PDFs, import data or repair duplicate records automatically.

## Version 1.2: start fresh and keep your accounts

In **Settings → Reset balances & history**, optionally save a backup, type **RESET**, and choose **Reset money records**. This keeps account names and types, linked debit cards, goal names and targets, and appearance preferences. It clears balances, transactions, unexplained amounts, goal savings, the spending limit, and the internal restore snapshot. Exported backup files are not deleted.

Next, open each account and choose **Set starting balance**. Enter the money you actually have now, then record only new activity. These starting balances are not income. Do not add salary again if it is already included. You do not need to reconstruct earlier months. Updating the app never triggers this reset automatically.

## Correct spending months

Activity → entry → **Split across months** moves a portion to its actual date without changing the account balance or combined total. Use **Edit entry → Date** for a whole entry. Explain part or all also includes a date field. Existing records and device storage are preserved; no data re-entry is required.

## Your money

Debit cards share their linked bank balance and do not add extra money. Goal allocations reserve money in a named real account. Actual-balance checks label missing amounts as unexplained spending; explaining a portion later does not debit it again. Funds transferred between your accounts are not spending.

The app uses AED integer fils, local IndexedDB, and cached app files. It has no bank connection, analytics, cloud AI, or account login. Records and backups are not separately encrypted. Keep backups in Files; deleting website data or the app can lose records.

[User guide](guide/USER-GUIDE.md) · [Verification and pending iPhone checks](guide/TESTING.md)

## Development

The app has no runtime dependencies. Tests need Node.js 22+.

```sh
node --test tests/*.test.cjs
python3 -m http.server 4173 --directory public
```

After changing app code, increment BUILD in `public/sw.js`, run tests, then `node build-pages.cjs` and commit the updated `public/` and `docs/` together. Do not hand-edit generated `docs/` files.

```sh
node build-pages.cjs
```

147 automated checks passed for version 1.7. The user reported installing the original release; the new reminder and passkey flows have not been tested on a physical iPhone. Automated tests use simulated browser APIs; see the verification guide for details.

Dirhaya is a coined name inspired by dirham and ghaya (goal), not a trademark-clearance claim.

## Version 1.7: daily reminders and device lock

Settings → Daily reminders supports up to 24 custom daily times. Export a repeating Calendar file and import its events to activate alerts; saving times alone does not schedule notifications. Existing imported alerts must be edited or removed in Calendar. There is no push server.

Settings → Face ID / device lock creates and verifies a device passkey. Save the recovery code before enabling. The app locks on startup and when leaving it, preserving unfinished entry forms. The operating system chooses Face ID, Touch ID, or device passcode. This is a local screen lock, not encryption of device records or backups. Financial data remains unchanged.

See the user guide for setup, recovery, and Calendar import limitations.
