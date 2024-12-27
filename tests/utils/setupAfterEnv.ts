jest.mock('sryd', () => {
  const antd = jest.requireActual('sryd');
  antd.theme.defaultConfig.hashed = false;

  return antd;
});
