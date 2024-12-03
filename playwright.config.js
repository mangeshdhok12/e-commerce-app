// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your test files are located
  use: {
    baseURL: 'http://localhost:5173', // URL where your app is running
    browserName: 'chromium', // or 'firefox' or 'webkit'
    headless: false, // Set to true to run tests in the background
  },
});
