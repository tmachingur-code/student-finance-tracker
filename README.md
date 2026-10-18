# MariFlow — Student Finance Tracker

**A responsive, student-focused personal finance management application built with HTML, CSS, and JavaScript.**

## 1. Project Overview

MariFlow is a web-based Student Finance Tracker designed to help students manage their money, record income and expenses, monitor spending, and develop better budgeting habits.

The project focuses on creating a simple, accessible, and responsive interface that works across desktop computers, tablets, and mobile devices. It is being developed incrementally through milestones, from the initial project setup to validation, transaction management, data persistence, and final testing.

## 2. Project Objectives

The main objectives of MariFlow are to:

- Help students record and organise their income and expenses.
- Provide a clear overview of personal financial activity.
- Support budgeting and spending awareness.
- Validate user input using JavaScript and regular expressions.
- Provide a responsive interface for different screen sizes.
- Support accessible navigation and meaningful validation feedback.
- Preserve financial records using browser storage.
- Support JSON data export and import.

## 3. Key Features

### Dashboard and Responsive Interface
- Student-focused financial dashboard.
- Summary cards for income, expenses, remaining budget, and spending categories.
- Navigation adapted for desktop and mobile devices.
- Navy blue, white, and muted gold visual theme.

### Transaction Management
- Record income and expenses.
- Categorise financial transactions.
- Record transaction dates and payment status.
- Search, filter, and sort transaction records.
- Edit or delete transactions.

### Form Validation
- Validate transaction descriptions, amounts, categories, dates, types, and payment statuses.
- Use regular expressions to validate input formats.
- Detect repeated consecutive words in descriptions.
- Display field-level error messages.
- Direct keyboard focus to invalid fields when form submission fails.

### Budgeting and Financial Insights
- Configure a monthly spending budget.
- Display financial summaries.
- Monitor budget usage and spending by category.
- View spending trends.

### Data Persistence and Backup
- Store financial data in browser local storage.
- Export financial records to JSON.
- Import validated JSON backups.
- Configure display currency and manual exchange rates.

**Development status:** The project is being implemented and tested milestone by milestone. Features should be considered complete only after their implementation has been verified.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and forms |
| CSS3 | Layout, styling, and responsive design |
| JavaScript (ES Modules) | Application logic, validation, and interactions |
| Regular Expressions | Input validation and search patterns |
| Local Storage | Browser-based data persistence |
| JSON | Data exchange and backup |
| Git and GitHub | Version control and project collaboration |

The project uses vanilla HTML, CSS, and JavaScript without a frontend framework.

## 5. Project Structure

```text
student-finance-tracker/
│
├── index.html
├── README.md
├── seed.json
├── .gitignore
│
├── assets/
│
├── styles/
│   └── main.css
│
├── scripts/
│   ├── app.js
│   ├── currency.js
│   ├── search.js
│   ├── state.js
│   ├── storage.js
│   ├── ui.js
│   └── validators.js
│
└── tests/
    ├── tests.html
    └── validators.test.js
    └── dashboard.html
    └── dashboard.test.js

```

## 6. Getting Started

### Prerequisites

- A modern web browser, such as Firefox or Google Chrome.
- Visual Studio Code or another code editor.
- Git for version control.
- A local development server, such as the VS Code Live Server extension.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tmachingur-code/student-finance-tracker.git
   ```

2. Enter the project directory:

   ```bash
   cd student-finance-tracker
   ```

3. Open the folder in Visual Studio Code:

   ```bash
   code .
   ```

4. Start the local development server and open `index.html` in your browser.

A local server is recommended because the application uses JavaScript ES modules.

## 7. Running the Validation Tests

MariFlow includes a browser-based test page for checking input validation.

1. Start your local server.
2. Open `tests/tests.html` in your browser through that server.
3. Review the test summary and individual results.
4. Investigate and correct any failing tests before committing changes.

The validation tests cover descriptions, amounts, categories, dates, transaction types, payment statuses, and complete transaction objects.

## 8. Accessibility and Responsive Design

MariFlow aims to provide an accessible experience through:

- Semantic HTML elements.
- A skip-to-main-content link.
- Visible keyboard focus indicators.
- Labels associated with form controls.
- Accessible validation messages.
- Responsive layouts for different screen sizes.
- Reduced-motion support.

Accessibility and responsive behaviour should be verified through browser testing as development progresses.

## 9. Development Milestones

The project is organised into the following milestones:

| Milestone | Focus |
|---|---|
| M0 | Project environment and repository setup |
| M1 | Requirements, data model, and project specification |
| M2 | Semantic HTML and responsive base CSS |
| M3 | Form validation and regular expressions |
| M4 | Transaction management, searching, filtering, and sorting |
| M5 | Dashboard calculations, budget progress, and spending insights |
| M6 | Data persistence, currency settings, and JSON backup |
| M7 | Final testing, accessibility checks, documentation, and submission |

Milestone completion is determined by implementation, testing, and the applicable project requirements.

## 10. Data and Privacy

MariFlow is designed for browser-based personal finance tracking. Financial records may be stored in the browser's local storage.

Users should export important records for backup and avoid using shared or public devices for sensitive financial information. Clearing browser storage may remove locally saved records.

## 11. Future Improvements

Potential improvements include:

- Additional financial reports and visualisations.
- Improved transaction categorisation.
- More comprehensive validation and accessibility testing.
- Further usability enhancements based on student feedback.

---
