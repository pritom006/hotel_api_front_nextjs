const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Simulates browser-like environment
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Jest setup file
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/src/app/$1', // Match alias imports
    '^@/public/(.*)$': '<rootDir>/public/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true, // Optional: Enable test coverage
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'], // Files to include in coverage
};

module.exports = createJestConfig(customJestConfig);
