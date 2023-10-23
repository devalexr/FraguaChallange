jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('assets/img/logo-small.png');
jest.mock('assets/img/logo-small-black.png');
jest.mock('assets/img/splash.png');
