module.exports = {
  verbose: true,
  preset: 'jest-expo',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testRegex: '(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$',
  setupFiles: ['<rootDir>/tests/setup.tsx'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '(style|story).tsx',
    './tests/setup.tsx',
    './src/themes/',
    'index.tsx',
    'index.js'
  ],
  globals: {
    'ts-jest': {
      useBabelrc: true
    }
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  timers: 'fake',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|glamorous-native|@expo|expo)'
  ]
}
