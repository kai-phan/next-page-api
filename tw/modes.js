const plugin = require('tailwindcss/plugin');

export default plugin(({ addVariant, addBase, theme }) => {
  addVariant('mode-light', ['html &']);
  addVariant('mode-dark', ['html.dark &']);
  addVariant('mode-semi', ['html.semi &']);

  addBase({
    'html.dark': {
      backgroundColor: 'rgb(var(--grey-900))',
    },
  });
});
