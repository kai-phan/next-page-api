const plugin = require('tailwindcss/plugin');

const themes = {
  default: {
    size: {},
  },
};

export default plugin.withOptions(
  (options) =>
    ({ addBase }) => {},
  (options) => {},
);
