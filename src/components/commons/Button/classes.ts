import mergeCls from 'src/libs/client/cls';

export const BUTTON_BASE_CLASSES = ({ block }: { block?: boolean }) =>
  mergeCls(
    'items-center justify-center gap-1.5 border outline-none transition-all duration-300 overflow-hidden \n' +
      'focus:ring-1 focus:ring-offset-[1.5px] disabled:opacity-30 disabled:cursor-not-allowed',
    block ? 'w-full flex' : 'inline-flex',
  );

export const BUTTON_SHAPE_CLASSES = {
  rounded: 'rounded-md',
  circle: 'rounded-full',
  undefined: '',
};

export const BUTTON_DARK_CLASSES = '\nmode-dark:ring-offset-grey-900';

export const BUTTON_SIZE_CLASSES = {
  small: 'h-8 text-sm px-4',
  medium: 'h-10 text-base px-5',
  large: 'h-12 text-lg px-6',
};

export const BUTTON_ICON_LABEL_CLASSES = {
  small: 'pl-0 gap-4',
  medium: 'pl-0 gap-5',
  large: 'pl-0 gap-6',
};

export const ICON_SIZE_CLASSES = {
  small: 'h-8 w-8 p-0',
  medium: 'h-10 w-10 p-0',
  large: 'h-12 w-12 p-0',
};

export const BUTTON_VARIANT_CLASSES = {
  primary: {
    undefined:
      'text-white bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500 \n' +
      'disabled:hover:bg-primary-500 disabled:hover:border-primary-500 disabled:focus:ring-primary-500',
    danger:
      'text-white bg-danger-500 border-danger-500 hover:bg-danger-600 hover:border-danger-600 focus:ring-danger-500 \n' +
      'disabled:hover:bg-danger-500 disabled:hover:border-danger-500 disabled:focus:ring-danger-500',
    warning:
      'text-white bg-warning-500 border-warning-500 hover:bg-warning-600 hover:border-warning-600 focus:ring-warning-500 \n' +
      'disabled:hover:bg-warning-500 disabled:hover:border-warning-500 disabled:focus:ring-warning-500',
    success:
      'text-white bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600 focus:ring-success-500 \n' +
      'disabled:hover:bg-success-500 disabled:hover:border-success-500 disabled:focus:ring-success-500',
    info:
      'text-white bg-info-500 border-info-500 hover:bg-info-600 hover:border-info-600 focus:ring-info-500 \n' +
      'disabled:hover:bg-info-500 disabled:hover:border-info-500 disabled:focus:ring-info-500',
    default:
      'text-white bg-grey-600 border-grey-600 hover:bg-grey-700 hover:border-grey-700 focus:ring-grey-500 \n' +
      'disabled:hover:bg-grey-600 disabled:hover:border-grey-600 disabled:focus:ring-grey-500',
  },
  secondary: {
    undefined:
      'text-primary-500 bg-primary-50 border-primary-50 hover:bg-primary-100 hover:border-primary-100 focus:ring-primary-500 \n' +
      'mode-dark:bg-primary-900 mode-dark:text-primary-300 mode-dark:border-primary-900 mode-dark:hover:bg-primary-800 mode-dark:hover:border-primary-800\n' +
      'disabled:hover:text-primary-500 disabled:hover:bg-primary-50 disabled:hover:border-primary-50 disabled:focus:ring-primary-500\n' +
      'mode-dark:disabled:hover:bg-primary-900 mode-dark:disabled:hover:text-primary-300 mode-dark:disabled:hover:border-primary-900 mode-dark:disabled:focus:ring-primary-500',
    danger:
      'text-danger-500 bg-danger-50 border-danger-50 hover:bg-danger-100 hover:border-danger-100 focus:ring-danger-500 \n' +
      'mode-dark:bg-danger-900 mode-dark:text-danger-300 mode-dark:border-danger-900 mode-dark:hover:bg-danger-800 mode-dark:hover:border-danger-800\n' +
      'disabled:hover:text-danger-500 disabled:hover:bg-danger-50 disabled:hover:border-danger-50 disabled:focus:ring-danger-500\n' +
      'mode-dark:disabled:hover:bg-danger-900 mode-dark:disabled:hover:text-danger-300 mode-dark:disabled:hover:border-danger-900 mode-dark:disabled:focus:ring-danger-500',
    warning:
      'text-warning-500 bg-warning-50 border-warning-50 hover:bg-warning-100 hover:border-warning-100 focus:ring-warning-500 \n' +
      'mode-dark:bg-warning-900 mode-dark:text-warning-300 mode-dark:border-warning-900 mode-dark:hover:bg-warning-800 mode-dark:hover:border-warning-800\n' +
      'disabled:hover:text-warning-500 disabled:hover:bg-warning-50 disabled:hover:border-warning-50 disabled:focus:ring-warning-500\n' +
      'mode-dark:disabled:hover:bg-warning-900 mode-dark:disabled:hover:text-warning-300 mode-dark:disabled:hover:border-warning-900 mode-dark:disabled:focus:ring-warning-500',
    success:
      'text-success-500 bg-success-50 border-success-50 hover:bg-success-100 hover:border-success-100 focus:ring-success-500 \n' +
      'mode-dark:bg-success-900 mode-dark:text-success-300 mode-dark:border-success-900 mode-dark:hover:bg-success-800 mode-dark:hover:border-success-800\n' +
      'disabled:hover:text-success-500 disabled:hover:bg-success-50 disabled:hover:border-success-50 disabled:focus:ring-success-500\n' +
      'mode-dark:disabled:hover:bg-success-900 mode-dark:disabled:hover:text-success-300 mode-dark:disabled:hover:border-success-900 mode-dark:disabled:focus:ring-success-500',
    info:
      'text-info-500 bg-info-50 border-info-50 hover:bg-info-100 hover:border-info-100 focus:ring-info-500 \n' +
      'mode-dark:bg-info-900 mode-dark:text-info-300 mode-dark:border-info-900 mode-dark:hover:bg-info-800 mode-dark:hover:border-info-800\n' +
      'disabled:hover:text-info-500 disabled:hover:bg-info-50 disabled:hover:border-info-50 disabled:focus:ring-info-500\n' +
      'mode-dark:disabled:hover:bg-info-900 mode-dark:disabled:hover:text-info-300 mode-dark:disabled:hover:border-info-900 mode-dark:disabled:focus:ring-info-500',
    default:
      'text-grey-700 bg-grey-100 border-grey-100 hover:bg-grey-300 hover:border-grey-300 focus:ring-grey-500 \n' +
      'mode-dark:text-grey-300 mode-dark:bg-grey-800 mode-dark:border-grey-800 mode-dark:hover:bg-grey-900 mode-dark:hover:border-grey-900\n' +
      'disabled:hover:text-grey-700 disabled:hover:bg-grey-100 disabled:hover:border-grey-100 disabled:focus:ring-grey-500\n' +
      'mode-dark:disabled:hover:bg-grey-800 mode-dark:disabled:hover:text-grey-300 mode-dark:disabled:hover:border-grey-800 mode-dark:disabled:focus:ring-grey-500',
  },
  outline: {
    undefined:
      'text-primary-500 bg-transparent border-primary-500 hover:border-primary-600 hover:text-primary-600 focus:ring-primary-400\n' +
      'disabled:hover:border-primary-500 disabled:hover:text-primary-500 disabled:focus:ring-primary-500',
    danger:
      'text-danger-500 bg-transparent border-danger-500 hover:border-danger-600 hover:text-danger-600 focus:ring-danger-400\n' +
      'disabled:hover:border-danger-500 disabled:hover:text-danger-500 disabled:focus:ring-danger-500',
    warning:
      'text-warning-500 bg-transparent border-warning-500 hover:border-warning-600 hover:text-warning-600 focus:ring-warning-400\n' +
      'disabled:hover:border-warning-500 disabled:hover:text-warning-500 disabled:focus:ring-warning-500',
    success:
      'text-success-500 bg-transparent border-success-500 hover:border-success-600 hover:text-success-600 focus:ring-success-400\n' +
      'disabled:hover:border-success-500 disabled:hover:text-success-500 disabled:focus:ring-success-500',
    info:
      'text-info-500 bg-transparent border-info-500 hover:border-info-600 hover:text-info-600 focus:ring-info-400\n' +
      'disabled:hover:border-info-500 disabled:hover:text-info-500 disabled:focus:ring-info-500',
    default:
      'text-grey-700 bg-transparent border-grey-300 hover:border-grey-800 hover:text-grey-800 focus:ring-grey-400\n' +
      'disabled:hover:border-grey-300 disabled:hover:text-grey-800 disabled:focus:ring-grey-400\n' +
      'mode-dark:text-grey-500 mode-dark:border-grey-700 mode-dark:hover:border-grey-600 mode-dark:hover:text-grey-400 mode-dark:focus:ring-grey-400\n',
  },
};

export const ICON_LABEL_CLASSES = {
  primary: {
    undefined: 'bg-primary-600',
    danger: 'bg-danger-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    info: 'bg-info-600',
    default: 'bg-grey-700',
  },
  outline: {
    undefined: 'border-r border-primary-600',
    danger: 'border-r border-danger-600',
    success: 'border-r border-success-600',
    warning: 'border-r border-warning-600',
    info: 'border-r border-info-600',
    default: 'border-r border-grey-300 mode-dark:border-grey-700',
  },
  secondary: {
    undefined: 'bg-primary-100 mode-dark:bg-primary-800',
    danger: 'bg-danger-100 mode-dark:bg-danger-800',
    success: 'bg-success-100 mode-dark:bg-success-800',
    warning: 'bg-warning-100 mode-dark:bg-warning-800',
    info: 'bg-info-100 mode-dark:bg-info-800',
    default: 'bg-grey-300 mode-dark:bg-grey-900',
  },
};

export const ICON_BASE_CLASSES = 'flex items-center justify-center';

export const ICON_SVG_CLASSES = {
  small: '[&_svg]:w-4',
  medium: '[&_svg]:w-5',
  large: '[&_svg]:w-6',
};
