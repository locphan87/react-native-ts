module.exports = {
  verbose: true,
  preset: 'jest-expo',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testRegex: '(./src/.*\\.(test|spec))\\.tsx?$',
  setupFiles: ['<rootDir>/tests/setup.tsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '(style|story).tsx',
    './tests/setup.tsx',
    './src/themes/',
    './src/hoc/',
    'index.tsx'
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
      babelConfig: {
        presets: ['babel-preset-expo']
      },
      diagnostics: false
    }
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  timers: 'fake',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|glamorous-native|@expo|expo)'
  ]
}
