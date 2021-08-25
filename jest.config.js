module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: [
        '**/?(*.)@(test|spec).@(ts|js)'
    ]
  };
