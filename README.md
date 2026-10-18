
# MariFlow : Student Finance Tracker

**Github pages URL:** https://tmachingur-code.github.io/student-finance-tracker/  

**GitHub Repository:** https://github.com/tmachingur-code/student-finance-tracker

**Video Demo:**  https://youtu.be/NmkWpt-iKmw?si=gxJ6f5mXBfFInGb0

## 1. Overview

MariFlow is a responsive student finance tracker built with HTML, CSS, and vanilla JavaScript. It helps students record income and expenses, manage budgets, and understand their spending habits.

**Theme:** Professional navy blue, white, and muted gold.

## 2. Features

- Dashboard with income, expenses, remaining budget, and spending insights.
- Add, edit, and delete transactions.
- Search, filter, and sort transactions.
- Validate descriptions, amounts, categories, dates, and payment statuses.
- Set monthly budgets and monitor spending.
- Display currency in RWF, USD, or EUR using configurable exchange rates.
- Save data in browser `localStorage`.
- Export and import validated JSON backups.
- Responsive layouts for desktop, tablet, and mobile.

## 3. Technologies

- HTML5: semantic structure and forms
- CSS3:  styling and responsive layouts
- JavaScript ES modules: application logic and interactivity
- Regular expressions: input validation and search
- Local Storage: browser-based persistence
- JSON: data backup and restoration
- GitHub Pages: deployment

## 4. Regex Catalog

The following patterns document the validation rules used by the application. Additional JavaScript checks may also apply.

| Rule | Pattern | Example |
|---|---|---|
| Description whitespace | `/^\S(?:.*\S)?$/` | Valid: `Food shopping`; invalid: ` Food ` |
| Repeated words | `/\b([a-z]+)\s+\1\b/i` | Detects `food food` |
| Amount format | `/^(?:0\|[1-9]\d*)(?:\.\d{1,2})?$/` | Valid: `1250`, `45.50` |
| Category format | `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/` | Valid format: `Food`, `Health Care` |
| Date format | `/^\d{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[12]\d\|3[01])$/` | Valid format: `2026-10-17` |

Additional validation rules require positive amounts, permitted categories, real calendar dates, transaction types of `income` or `expense`, and statuses of `paid` or `planned`.

## 5. Keyboard Map

| Key | Action |
|---|---|
| `Tab` | Move to the next focusable control |
| `Shift + Tab` | Move to the previous control |
| `Enter` | Activate links or buttons; submit forms where applicable |
| `Space` | Activate focused buttons or checkboxes where supported |
| Arrow keys | Navigate native controls such as select menus |

## 6. Accessibility

MariFlow includes:

- Semantic HTML and a skip-to-content link.
- Labels for form controls.
- Visible keyboard focus indicators.
- Field-level validation messages and invalid-field focus.
- Accessible status and feedback messages.
- Responsive layouts and reduced-motion considerations.

Icon-only controls and keyboard interactions should be verified during final testing.

## 7. Project Structure

```text
student-finance-tracker/
├── index.html
├── README.md
├── seed.json
├── assets/
├── styles/
│   └── main.css
├── scripts/
│   ├── app.js
│   ├── currency.js
│   ├── search.js
│   ├── state.js
│   ├── storage.js
│   ├── ui.js
│   └── validators.js
└── tests/
    ├── tests.html
    ├── validators.test.js
    ├── dashboard.html
    └── dashboard.test.js
```

## 8. Run Locally

Requirements: a modern browser, a code editor, Git, and a local development server.

```bash
git clone https://github.com/tmachingur-code/student-finance-tracker.git
cd student-finance-tracker
code .
```

Start Live Server from `index.html`. A local server is recommended because the project uses JavaScript ES modules.

## 9. Run Tests

With the local server running, open:

- `tests/tests.html` — validation tests.
- `tests/dashboard.html` — dashboard calculation tests.

Review the results and fix failing tests before committing changes.

## 10. Development Milestones

| Milestone | Focus |
|---|---|
| M0 | Project setup |
| M1 | Requirements and data model |
| M2 | HTML and responsive CSS |
| M3 | Validation and regular expressions |
| M4 | Transaction management and search |
| M5 | Dashboard and budgeting |
| M6 | Persistence, currency, and JSON backups |
| M7 | Final testing, accessibility, and deployment |

## 11. Data and Privacy

MariFlow stores transactions and settings in browser local storage. Clearing browser data may remove saved records. Export important records regularly and avoid storing sensitive financial information on shared devices.

MariFlow is designed for browser-based personal finance tracking. Financial records may be stored in the browser's local storage.

Users should export important records for backup and avoid using shared or public devices for sensitive financial information. Clearing browser storage may remove locally saved records.

