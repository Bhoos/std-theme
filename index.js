const theme = {
  colorPrimary: 'blue',
  colorPrimaryVariant: 'blue',
  colorOnPrimary: 'white',
  colorDisabled: 'grey',
  colorOnDisabled: 'grey',
  colorOnDefault: 'black',
};

const dark = {
  colorPrimary: 'white',
  colorPrimaryVariant: 'white',
  colorOnPrimary: 'white',
  colorDisabled: 'grey',
  colorOnDisabled: 'grey',
  colorOnDefault: 'black',
};


function setTheme(config) {
  Object.assign(theme, config);
}

function getTheme() {
  return theme;
}

module.exports = {
  light: theme,
  dark,
  getTheme,
  setTheme,
};
