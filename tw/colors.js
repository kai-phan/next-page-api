const plugin = require('tailwindcss/plugin');
const hexToRgb = require('hex-to-rgb');

/**
 * @500 normal
 * @600 hover, focus, focus-within
 * @700 active
 * @200 disabled
 * */
const colors = {
  danger: {
    50: '#fff1f0',
    100: '#ffccc7',
    200: '#ffa39e',
    300: '#ff7875',
    400: '#ff4d4f',
    500: '#f5222d',
    600: '#cf1322',
    700: '#a8071a',
    800: '#820014',
    900: '#5c0011',
    950: '#3f000a',
  },
  warning: {
    50: '#fff7e6',
    100: '#ffe7ba',
    200: '#ffd591',
    300: '#ffc069',
    400: '#ffa940',
    500: '#fa8c16',
    600: '#d46b08',
    700: '#ad4e00',
    800: '#873800',
    900: '#612500',
    950: '#3f1d00',
  },
  success: {
    50: '#f6ffed',
    100: '#d9f7be',
    200: '#b7eb8f',
    300: '#95de64',
    400: '#73d13d',
    500: '#52c41a',
    600: '#389e0d',
    700: '#237804',
    800: '#135200',
    900: '#092b00',
    950: '#041a00',
  },
  info: {
    50: '#e6f7ff',
    100: '#bae7ff',
    200: '#91d5ff',
    300: '#69c0ff',
    400: '#40a9ff',
    500: '#1890ff',
    600: '#096dd9',
    700: '#0050b3',
    800: '#003a8c',
    900: '#002766',
    950: '#001d4d',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#f0f0f0',
    300: '#d9d9d9',
    400: '#bfbfbf',
    500: '#8c8c8c',
    600: '#595959',
    700: '#434343',
    800: '#262626',
    900: '#1f1f1f',
    950: '#141414',
  },
  primary: {
    50: '#f0f5ff',
    100: '#d6e4ff',
    200: '#adc6ff',
    300: '#85a5ff',
    400: '#597ef7',
    500: '#2f54eb',
    600: '#1d39c4',
    700: '#10239e',
    800: '#061178',
    900: '#030852',
    950: '#000f30',
  },
};

function hex_to_rgb(hex) {
  const [r, g, b] = hexToRgb(hex);

  return `${r} ${g} ${b}`;
}

function optionsToVariables(options = colors) {
  const variables = {};

  Object.entries(options).forEach(([theme, value]) => {
    Object.entries(value).forEach(([key, color]) => {
      variables[`--${theme}-${key}`] = hex_to_rgb(color);
    });
  });

  return variables;
}

function optionsToConfig(options = colors) {
  const config = {};

  Object.entries(options).forEach(([theme, value]) => {
    Object.keys(value).forEach((key) => {
      config[theme] = {
        ...config[theme],
        [key]: `rgb(var(--${theme}-${key}) / <alpha-value>)`,
      };
    });
  });

  return config;
}

export default plugin.withOptions(
  (options) =>
    ({ addBase, theme }) => {
      addBase({
        ':root': optionsToVariables(options),
      });
    },
  (options) => {
    return {
      theme: {
        extend: {
          colors: optionsToConfig(options),
        },
      },
    };
  },
);
