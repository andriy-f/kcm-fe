/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  transform: {
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.mjs',
  },
}

export default config
