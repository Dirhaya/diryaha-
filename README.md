# Dirhaya · درهايا

A beige/grey personal money app for iPhone Home Screen use. It tracks bank accounts, linked debit cards, cash, prepaid balances, savings goals, salary, and unexplained spending. Includes a local arithmetic assistant and device backups.

## Publish the app

The app files are uploaded. The remaining step is to enable GitHub Pages:

1. Open [this repository’s Pages settings](https://github.com/Dirhaya/diryaha-/settings/pages).
2. Under Source, choose **Deploy from a branch**.
3. Select **main** and **/docs**, then **Save**.
4. Wait for GitHub’s Pages deployment to finish and use the **Visit site** link shown in those settings.

No custom Actions workflow is needed. `docs/` contains a deployable copy of `public/`, including `.nojekyll`. Publishing code does not upload the financial records saved on your device. Never commit backups or personal exports.

## Install on iPhone

Open the published HTTPS address in Safari. Choose **Share → Add to Home Screen**, keeping **Open as Web App** enabled if shown. Open the new icon and wait for **Offline ready**. Test closing and reopening in Airplane Mode with sample records before entering real balances.

A ZIP downloaded in Files is source code, not an iPhone installer. The optional HTML preview does not save changes.

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

71 automated checks passed before upload. Browser layout, Safari sharing, and iPhone installation have not yet been tested on hardware. The tests use simulated browser APIs; see the verification guide for details.

Dirhaya is a coined name inspired by dirham and ghaya (goal), not a trademark-clearance claim.
