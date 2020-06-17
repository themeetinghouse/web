module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  testRegex: '.spec.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
