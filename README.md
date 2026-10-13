# Axion Rental — Next.js Demo

A clickable, client-facing prototype for an event/rental management system, branded for Axion Creatives. It uses seeded sample records and browser `localStorage` for demo persistence.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
1. Extract the ZIP.
2. Open the `axion-rental-demo` folder in VS Code.
3. In the terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:3000

## Demo features
- Dashboard with sample revenue charts, jobs, branch performance, and attention items
- Three branches with branch-wise sample stock
- Inventory listing and CSV export
- Customers with example negotiated-rate multipliers and delivery charges
- Create jobs with customer pricing applied automatically
- Quotations and convert-to-job flow
- Returns form for returned, missing, and damaged quantities
- Invoices/payment view and a printable sample invoice preview
- Customer payment recording and balances
- Vehicle/business expenses and CSV export
- Business reports, charts, and CSV downloads
- Responsive layout for desktop and mobile

## Important prototype notes
- This is a demonstration only, not production accounting/inventory software.
- All records are sample data and persist in the current browser only.
- Inventory starts with 108 seeded demo catalogue rows, generated from representative event-rental item families.
- Job creation reduces the selected branch stock for the selected item; the return form updates that job item and flags missing/damaged quantities for review. This remains a simplified demo flow, not a complete multi-line rental ledger.
- Customer pricing is represented by a multiplier for the demo. Production should store per-customer, per-item rate snapshots on every quotation/job.
- Authentication, server database, audit logs, backups, statutory tax logic, and real PDF generation need production implementation.
