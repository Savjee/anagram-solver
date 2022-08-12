/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  collectCoverageFrom: ["src/**/*.ts"],
};
