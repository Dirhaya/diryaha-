# Ghars 1.14.1 — keep quick entry first

Build `dirhaya-v1-20261108-02` places **Add entry** and **Quick expense** ahead of the money overview on the Home screen. The quote appears farther down. The former full-width recurring panel, tracking banner and backup-reminder banner are replaced by three compact controls at the bottom of Overview: **Recurring bills**, **Backup**, and **Tracking**.

Due recurring entries and a due backup display small indicators. Backup reminders retain their **Tomorrow** snooze action. Each control opens its existing workflow, with confirmation still required for recording a recurring entry or changing the tracking start. Existing account, transaction, goal, backup and device-storage data is unchanged. English and Arabic labels are provided for the new controls.

259 automated tests pass, including control order, due indicators, reminder snooze and unchanged records. A real iPhone/Safari visual test remains pending, especially for larger text and the fixed bottom navigation.
