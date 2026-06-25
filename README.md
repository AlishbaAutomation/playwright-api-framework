# Playwright API Framework

## Project Overview

This project is a basic API Test Automation Framework built using Playwright and JavaScript.

The framework covers CRUD operations (Create, Read, Update, Delete) using public APIs and follows a simple reusable structure with test data separation.

---

## Tech Stack

* Playwright
* JavaScript
* Node.js

---

## Project Structure

```text
Playwright-API-Framework
│
├── testdata
│   └── userdata.js
│
├── tests
│   ├── createuser.spec.js
│   ├── getuser.spec.js
│   ├── getusers.spec.js
│   ├── updateuser.spec.js
│   └── deleteuser.spec.js
│
├── utils
│   └── apiClient.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Scenarios

### GET User

* Send GET request
* Verify status code
* Verify user details
* Validate email and website fields

### GET Users List

* Verify status code
* Verify total users count
* Validate user details using loop

### POST User

* Create a new user
* Verify response data
* Validate first name, last name, and age

### PUT User

* Update existing user data
* Verify updated values
* Validate response fields

### DELETE User

* Delete user
* Verify status code
* Validate returned user information

---

## Test Data Management

Test data is maintained separately inside:

```text
testdata/userdata.js
```

This improves maintainability and reusability.

---

## How to Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/createuser.spec.js
```

Generate HTML Report:

```bash
npx playwright show-report
```

---

## Features

* CRUD API Testing
* Reusable Test Data
* API Response Validation
* Status Code Validation
* Header Validation
* Playwright Test Runner

---

## Author

Alishba Automation
