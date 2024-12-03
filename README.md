# E-commerce Web App

 About the Application

This is a simple e-commerce web application where users can browse and purchase products. The app allows users to:

- View a list of available products on the homepage.
- See detailed information about each product, including title, description, and price.
- Add products to their shopping cart.
- Remove products from the cart.
- View the contents of their cart, including total price.
- Sort products by price and filter products by categories.

A modern e-commerce web application built with **Vite**, **React**, and **JavaScript**. The app includes full testing with **Playwright** for end-to-end tests.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

Follow the steps below to get the application up and running locally.

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Install Node.js](https://nodejs.org/)
- **Git** - [Install Git](https://git-scm.com/)
- **npm** (comes with Node.js)

### Steps to Set Up

1. Clone the repository:

   ```bash
   git clone (https://github.com/mangeshdhok12/e-commerce-app.git)
   cd e-commerce-app
2. Install dependencies:

Use npm to install the required packages:
   npm install
Running the Application
After setting up the application, you can run it locally on your machine.

1. Start the Development Server
Run the following command to start the development server:
npm run dev

Running Tests
This application uses Playwright for end-to-end testing.

1. Run Playwright Tests
To run all tests, use the following command:

2. Running Specific Test Files
To run tests from a specific file, use:
npx playwright test tests/path/to/testFile.js

Project Structure
Here’s a brief overview of the project structure:
/e-commerce-app
├── /node_modules         # Installed dependencies
├── /public               # Static files (e.g., index.html)
├── /src                  # Source code for the app
│   ├── /components       # React components
│   ├── /pages            # React pages
│   ├── /styles           # CSS/SCSS files
│   └── /utils            # Utility functions
├── /tests                # Playwright tests
│   ├── /cartPage.test.js # Cart page tests
│   ├── /homePage.test.js # Home page tests
│   └── /productDetail.test.js # Product detail tests
├── /package.json         # npm package configuration
├── /vite.config.js       # Vite configuration
└── /README.md            # This file

Technologies Used
Vite: Fast build tool and development server for modern JavaScript apps.
React: JavaScript library for building user interfaces.
Playwright: End-to-end testing framework for web applications.
npm: Package manager for managing dependencies.
