# Ghars 1.13.0 — compact overview and glass palette

This release trims the Overview so the useful daily information is visible sooner on a phone. The balances and month-to-date totals remain at the top. Supporting breakdowns (cash, salary, spending, investment and budget details) are grouped under **Full breakdown, spending & investments**. Accounts can be expanded from **Your accounts**. Goals and the three most recent entries stay on the Overview; their full lists remain in their own tabs.

Settings now includes **Glossy glass**, with translucent surfaces, soft highlights and blur. Beige, grey and night remain available. Devices that request reduced transparency receive an opaque version for readability and accessibility.

This is a presentation-only change: account and transaction records, backup formats, calculations and device database are unchanged. Installing the update does not reset or migrate financial records. Version 1.13.0 uses build `20261101-01`.

Automated tests exercise the new theme setting, preserved balances and collapsible dashboard sections. The included UI tests use a simulated DOM and do not demonstrate real iPhone rendering or performance. Physical iPhone/Safari visual acceptance remains pending in [IPHONE-ACCEPTANCE.md](IPHONE-ACCEPTANCE.md).
