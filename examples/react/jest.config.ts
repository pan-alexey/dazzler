import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testTimeout: 10 * 60_000,
  collectCoverageFrom: [
    '!<rootDir>/jest/**',
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/mock/**',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/jest/file.ts',
  },
};
export default config;
