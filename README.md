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

98 automated checks passed for version 1.2. The user reported installing the original release; the new reset flow has not been tested on an iPhone. Automated tests use simulated browser APIs; see the verification guide for details.

Dirhaya is a coined name inspired by dirham and ghaya (goal), not a trademark-clearance claim.
