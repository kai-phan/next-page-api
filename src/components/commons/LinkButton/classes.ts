export const BASE_LINK_BUTTON_CLASSES =
  'flex gap-1 items-center justify-center transition duration-300 cursor-pointer border border-transparent\n' +
  '[&[disabled]]:cursor-not-allowed [&[disabled]]:opacity-40 [&[disabled]]:hover:bg-transparent';

export const LINK_BUTTON_STATUS_CLASSES = {
  success:
    'text-success-500 hover:text-success-600 hover:bg-success-50 mode-dark:hover:bg-success-900 mode-dark:hover:text-success-400\n' +
    '[&[disabled]]:hover:text-success-500',
  danger:
    'text-danger-500 hover:text-danger-600 hover:bg-danger-50 mode-dark:hover:bg-danger-900 mode-dark:hover:text-danger-400\n' +
    '[&[disabled]]:hover:text-danger-500',
  warning:
    'text-warning-500 hover:text-warning-600 hover:bg-warning-50 mode-dark:hover:bg-warning-900 mode-dark:hover:text-warning-400\n' +
    '[&[disabled]]:hover:text-warning-500',
  info:
    'text-info-500 hover:text-info-600 hover:bg-info-50 mode-dark:hover:bg-info-900 mode-dark:hover:text-info-400\n' +
    '[&[disabled]]:hover:text-info-500',
  default:
    'text-grey-500 hover:text-grey-600 hover:bg-grey-50 mode-dark:hover:bg-grey-900 mode-dark:hover:text-grey-400\n' +
    '[&[disabled]]:hover:text-grey-500',
  undefined:
    'text-primary-500 hover:text-primary-600 hover:bg-primary-50 mode-dark:hover:bg-primary-900 mode-dark:hover:text-primary-400\n' +
    '[&[disabled]]:hover:text-primary-500',
};
