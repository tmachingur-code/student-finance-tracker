# MariFlow - Student Finance Tracker

# Project Overview

**Project name:** MariFlow -Student Finance Tracker
**Chosen theme:** Student Finance Tracker
**Technology:** Vanilla HTML, CSS and Javascript
**Default currency:** Rwandan Franc (RWF)

### 1.1 Purpose

MariFlow is a responsive, accessible web application designed to help students manage their personal finances. It allows students to record income and expenses, organize transactions by category, plan future payments, monitor spending against a budget, search financial records and review spending patterns.

The application will provide a clear overview of a student's financial activity while keeping data stored locally in the browser.

### 1.2 Problem Statement

Students often need to manage limited funds for food, communication, transport,books,tuition fees and entertainment. Without an organized tracking system, it can be difficult to understand spending habits, plan upcoming expenses and stay within a budget.

MariFlow addresses this problem by providing a simple, strutured and accessible way to track transactions, distinguish planned expenses from completed payments and make more informed spending decisions.

### 1.3 Projects OBjectives 

The application aims to: 

1. Allows users to create,view edit and delete financial trnasctions.
2. Validate transaction information using regular expressions and JavaScript.
3. Provide regular-expression-based search, sorting and filtering
4. Dsiplay useful financial statistics and spending trends.
5. Allow users to set a budget cap and monitor spending.
6. Save data between browser sessions using localStorage.
7. Support validated JSON import and JSON export.
8. Support RWF, USD AND EUR using manually configured exchange rates.
9. Provide a responsive and accessible interface across mobile, tablet and desktop devices.

## 2. Scope and Constraints 

### 2.1 Included Features

- Dashboard and Financial statistics
- Income and expense records
- Transaction categories
- Paid and planned trnsaction statuses
- Add, edit and delete operations
- Sorting and regular-expression search
- Budget cap and spending alerts
- Seven-day spending trend
- LocalStorage persistence
- JSON import and export
- Currency settings and manual exchange rates
- About section with Github and email contact links
- Responsive design and accessiblity support
- Automated or browser-based validation tests
- Github Pages Deployment

### 2.2 Constraints

- The  project must use vanilla HTML, CSS and JavaScript.
- Frameworks such as React,Boostrap and Vue are not permitted..
- No backend  database or external exhange-rate API will be used.
- Exchange rates will be entered manually in settings
- Financial records will be entered manually in settings.
- Financial records will be stored locally in the user's browser.
- The application is an educational budgeting tool, not a banking application.
- The interface must work on mobile, tablet and desktops screens.
-   The interface must work on mobile, tablet and desktop screens.

### 3. Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | The user can create income and expense transactions. |
| FR-02 | The user can view all saved transactions. |
| FR-03 | The user can edit a transaction and update its modification timestamp. |
| FR-04 | The user can delete a transaction after confirmation. |
| FR-05 | The application validates descriptions, amounts, dates and categories. |
| FR-06 | The user can sort transactions by date, description and amount. |
| FR-07 | The user can search records using regualr expressions. |
| FR-08 | Invalid regualr-expression patterns produce a clear error message. |
| FR-09 | The user can toggle case-sensitive searching. |
| FR-10 | Search matches are highlighted accessibility and safely. |
| FR-11 | The dashboard displays record counts, financial totals, top category and seven-day trends. |
| FR-12 | The user can configure a budget cap and receive accessible budget alerts. |
| FR-13 | Planned transactions are distnguished from completed payments. |
| FR-14 | Transactions and settings persist using localStorage. |
| FR-15 | The user can export valid financial data to JSON. |
| FR-16 | The user can import JSON after its structure and values have been validated. |
| FR-17 | The user can configure the display currenc and manual exhange rates. | 
| FR-18 | The user can view the application's purpose and contact information. |

## 4. Non-Functional Requirements

### 4.1 Usability

- The interface must be intuitive and consistent.
- Forms must provide clear instructions and errro messages.
- Empty states must explain what the user can do next.
- Important actions must provide visible feedback.

### 4.2 Responsiveness

The application will follow a mobile-first design approach.

Target viewport widths:

- Small mobile: approximately 360px and above.
- Tablet: 768px and above
- Desktop: 1024px and above

The layout must avoid horizontal overflow at supported screen sizes.

### 4.3 Accessiblity

- Use semantic HTML landmarks and a logical heading hierarchy.
- Provide labels for all form inputs.
- Include a skip-to-content link.
- Support keyboard-only navigation.
- Provide visible focus indicators.
- Use appropriate ARIA live regions for status messages and  budget alerts. 
- Maintain adequate text and interface contrast.
- Never communicate errors or financial status through color alone.

### 4.4 Maintainability

Javascript must be organized into separate modules for validation, state management, storage, user-interface rendering and search.

### 4.5 Data Integrity

- Every transaction must have a unique ID.
- Every transaction must include creation and modification timestamps.
- Invlaid imported data must not silently overwrite existing valid data.
- Financial calculations must distinguish planned transactions from completed payments.

## 5. Transactions Data Model

Each transaction will use the following structure:

```json
{
    "id": "txn_0001",
    "description:" "Lunch at cafeteria",
    "type": "expense",
    "amount": 4500,
    "category": "Food",
    "date": "2026-10-10",
    "status": "paid",
    "createdAt": "2026-10-10T09:00:00.000Z",
    "updatedAt": "2026-10-10T09:00:00.000Z"
}
```

### 5.1 Field Definitions

| Field | Type | Description |
|---|---|---|
| id | String | Unique transaction identifier |
| description | String | Short description of the transaction |
| type | String | `income` or `expense` |
| amount | Number | Positive monetary amount |
| category | String | Transaction category | 
| date | String | Transaction date in YYY-MM-DD format |
| satus | String | `paid` or `planned` |
| createdAt | String | ISO 8601 creation timestamp |
| updatedAt | String | ISO 8601 modification timestamp |

### 5.2 Default Categories

- Food
- Books
- Transport
- Entertainment
- Fees
- Other

Categories should be manageable through settings where practical.

### 5.3 Transaction Rules

- Amounts must be greater than zero.
- Descriptions must not contain leading or trailing spaces.
- Dates must be valid calendar dates.
- Planned transactions must remain distinguishable from completed transaction.
- Editing a transaction must update `updatedAt` without changing `createdAt`
- Deleting a transaction must update the application state, dashboard and stored data.

### 5.4 Financial Calculation Rules

- Completed income and completed expenses must be calculated separately.
- Planned expenses must not be included in completed expense totals.
- Planned transactions must have their own visible totals or indicators
- The seven-day trend must use a clearly defined data range.
- Currency conversion must use the configured manual rates.

## 6. Settings Data Model

Application settings will be stored separately from transaction records.

Example:

```json
{
    "baseCurrency": "RWF",
    "displayCurrency": "RWF",
    "exchangeRates": {
        "RWF": 1,
        "USD": 0.00069,
        "EUR": 0.00059,
    },
    "budgetCap": 150000,
    "budgetPeriod": "monthly",
    "categories": [
        "Food",
        "Books",
        "Transport",
        "Entertainment",
        "Fees",
        "Other"
    ],
    "caseInsensitiveSearch": true
}
```

The exchange rates above are illustrative examples, not guaranteed current market rates.Users will be able to edit them automatically.

### 6.1 Settings Rules

- RWF is the default currency.
- USD and EUR are the two additional supported currencies.
- The RWF rate is fixed at 1 when RWF is the base currency.
- Exchange rates must be positive valid numbers.
- The budget cap must be a positive valid amount.
- Settings must persist across browser sessions.
- Displayed values must clearly identify their currency.
- Currency conversion must not repeatedly convert already-converted values.

## 7. Pages and Sections

### 7.1 Dahboard

Displays:

- Total completed income
- Total completed expenses
- Remaining budget
- Planned expense total
- Total transaction count
- Top spending category
- Seven-day spending trend
- Budget usage and alerts

### 7.2 Transactions

Provides:

- Transaction table on wider screens
- Transaction cards on narrow screens
- Add transaction action
- Edit and delete actions 
- Sorting controls
- Regular-expression search 
- Case-sensitivity toggle
- Search result count
- Clear empty and error states

### 7.3 Add/Edit Transaction Form

Fields: 

- Description
-Transaction type
- Amount
- Category
- Date
- Status

The form must provide inline validation feedback and acccessible error messages.

### 7.4 Settings

Provides controls for:

- BUdget Cap
- Budget period
- Display cvurrency
- Manual exchange rates
- Category managment
- Case-sensitive search preference
- JSON import and export

### 7.5 About

Explains the application's purpose and includes the developer's Github profile and email address.

### 8. Regualr Expression Catalog

The application will use regualr expressions for validation and search.

### 8.1 Description Validation

Pattern:

`/^\S(?:.*\S)?$/`

Purpose: Reject leading and trailing whitespace

Example valid value: `Lunch at cafeteria`

Example invalid value: ` Lunch at cafeteria `

Additional normalization may collapse repeated internal spaces.

### 8.2 Amount Validation

Pattern:

`/^(0|[1-9]\d*)(\.\d{1,2})?$/`

Purpose: Restrict amounts to non-negative numeric values with up to two deciaml places.
Application-level validation must also require an amount grater than zero.

Example valid value: `4500.50`

Example invalid value: `04.500`

### 8.3 Date Validation

Pattern:

`/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/`

Purpose: Validate the YYY-MM-DD date format. A separate calendar-date check must reject impossible dates such as February 30.

### 8.4 Category Validation 

Pattern:

`/^[A-Za-z]+(?:[-][A-Za-z]+)*$/`

Purpose: Allow letters separated by single spaces or hyphens.

Example valid value: `Food`

Example invalid value: `Food123`

### 8.5 Advanced Regex- Duplicate Words

Pattern:

`/\b(\w+)\s+\1\b/i`

Purpose: Detect repeated consecutive words using a back-reference.

Example matching text: `Lunch lunch`

This pattern demonstrates an advanced regular-expression feature required by the rubric.

### 8.6 Search Examples

- `/coffee/i` - find descriptions containing coffee.
- `/\.\d{2}\b/` - find decimal amounts with two digits after the decimal point.
- `/\b(\w+)\s+\1\b/i` - find duplicate consecutive words.

Search patterns must be compiled safely using `try/catch`. Invlaid patterns must produce an accessible error message rather than crashing the apllication.

## 9. Sorting, Searching and Highlighting

Users must be able to sort records by:

- Date, ascending or descending
- Description, A-Z or Z-A
- Amount, ascending or descending

Search requirements:

- Search updates results as the user types.
- Case-insensitive searching is supported.
- Invalid regex patterns are handled gracefully.
- Matching text can he highlighted using semantic `<mark>` elements.
- User-supplied descriptions must be rendered safely without treating them as HTML.
- Search results and validation feedback must remain accessible.

### 10 . Dashboard and Budget Rules

1. Total transaction records
2. Total completed income
3. Total completed expenses
4. Top spending category
5. Seven-day completed expense trend
6. Budget cap, amount used and amount remaining

When completed expenses are below the budget cap, the application should communicate the reamining budget through a polite live region.

When the cap is exceeded, the application should provide a clear alert through an assertive live region. Alerts must not rely on color alone.

## 11. Persistence and JSON Data Management

### 11.1 LocalStorage

Transactions and settings must be stored using separate keys.

The application must:

- Load saved data on startup.
- Save changes after successful operations.
- Handle malformed stored JSON gracefully.
- Avoid losing existing records when an operation fails.

### 11.2 JSON Export

Import must validate:

- JSON syntax
- Required fields
- Field data types
- Unique IDs
- Valid dates 
- Valid amounts
- Allowed transaction types and statuses
- Valid categories and timstamps

Invlaid imports must be rejected with a clear explanation. Existing data must not be silently overwritten by malformed input.

## 12. Accessiblity Plan 

The application will include:

- Semantic `header`, `nav`, `main`, `section` and `footer` elements
- Logical heading hierarchy
- A skip-to-content link
- Labels associated with form controls
- Keyboard-accessible buttons and navigation 
- Visible focus indicators
- `role="status"` or `aria-live="polite"` for routine feedback 
- An assertive live region for iportant budget alerts
- Acessible form validation and error messages 
- Adequate color contrast
- Responsive layouts without unintended horizontal scrolling
- Respect for reduced-motion preference

## 13. Wireframes Plan

Two wireframes will be created separately and saved in the `assets/` directory.

### Dektop Wireframe

The desktop layout should show:

- A left siderbar containing the logo and navigation 
- A main dashboard area
- Financial summary cards
- A budget progress indicator
- A seven-day trend chart
- Search, sort and add-transaction controls
- Access to Settings and About

### Mobile Wireframe

The mobile layout should show:

- A compact header
- A simplified navigation arrangement
- Stacked financial summery cards
- A compact budget indicator
- A readable trend visualization 
- Search and filter contols 
- Transaction cards instead of a wide table
- A clearly accessible add-transaction action

The wireframes should show layout, hierarchy, navigation and key interactions rather than detailed final styling.

## 14. Acceptance Criteria

M1 is complete when:

- The project purpose and problem statement are documented.
- Functional and non-functional requirements are listed.
- Transaction and settings models are defined.
- The regex catalog includes atleast four validation patterns and one advanced pattern.
- The accessiblity and responsive-desing plans are documented.
- Desktop and mobile wireframes have been drawn and saved. 
- The specification has been reviewed against the assignment rubric.
The M1 deliverables are committed and pushed to github.

## 15. Implementation Strategy

The project will follow the required milestone sequence:

- **M1:** Specification and wireframes
- **M2:** Semantic HTML and base CSS
- **M3:** Forms and regex validation
- **M4:** Rendering, editing, deletion, sorting and regex search
- **M5:** Dashboard statistics and budget cap
- **M6:** Persistence, JSON import/ export and settings
- **M7:** Accessibility audit, polish , README, demo video and Github pages deployment


## 16. Wireframes References

The following wireframes define the planned responsive layout for MariFlow before implementation:

- Desktop: `assets/wireframe-desktop.png`
- Mobile: `assets/wireframe-mobile.png`

The desktop wireframe uses siderbar navigation, summary cards, charts,budget progress and a transaction table.

The mobile wireframe uses stacked summary cards.compact charts, transaction cards and bottom navigation.

These wireframes guide the semantic Html Structure in M2 and the responsive CSS implementation in subsequent milestones.
