import React from 'react';

import mergeCls from 'src/libs/client/cls';

export type Props = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  block?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  loading?: boolean;
  status?: 'success' | 'danger' | 'warning' | 'info';
};

export default React.forwardRef<
  HTMLButtonElement,
  React.PropsWithoutRef<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>
>(function Button(props, ref) {
  const {
    children,
    icon,
    size = 'medium',
    variant = 'primary',
    status,
    ...rest
  } = props;

  const baseClasses =
    'flex items-center justify-between gap-1 rounded-sm border outline-none text-grey-700 focus:ring-1 focus:ring-offset-[1.5px] transition-all duration-300';

  const darkClasses = ' mode-dark:ring-offset-grey-900';

  const sizeClasses = {
    small: 'h-8 text-sm px-3',
    medium: 'h-9 text-base px-4',
    large: 'h-10 text-lg px-5',
  };

  const variantClasses = {
    primary: {
      undefined:
        'text-white bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500',
      danger:
        'text-white bg-danger-500 border-danger-500 hover:bg-danger-600 hover:border-danger-600 focus:ring-danger-500',
      warning:
        'text-white bg-warning-500 border-warning-500 hover:bg-warning-600 hover:border-warning-600 focus:ring-warning-500',
      success:
        'text-white bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600 focus:ring-success-500',
      info: 'text-white bg-info-500 border-info-500 hover:bg-info-600 hover:border-info-600 focus:ring-info-500',
    },
    secondary: {
      undefined:
        'text-primary-500 bg-primary-50 border-primary-50 hover:bg-primary-100 hover:border-primary-100 focus:ring-primary-500 \n' +
        'mode-dark:bg-primary-900 mode-dark:text-primary-300 mode-dark:border-primary-900 mode-dark:hover:bg-primary-800 mode-dark:hover:border-primary-800',
      danger:
        'text-danger-500 bg-danger-50 border-danger-50 hover:bg-danger-100 hover:border-danger-100 focus:ring-danger-500 \n' +
        'mode-dark:bg-danger-900 mode-dark:text-danger-300 mode-dark:border-danger-900 mode-dark:hover:bg-danger-800 mode-dark:hover:border-danger-800',
      warning:
        'text-warning-500 bg-warning-50 border-warning-50 hover:bg-warning-100 hover:border-warning-100 focus:ring-warning-500 \n' +
        'mode-dark:bg-warning-900 mode-dark:text-warning-300 mode-dark:border-warning-900 mode-dark:hover:bg-warning-800 mode-dark:hover:border-warning-800',
      success:
        'text-success-500 bg-success-50 border-success-50 hover:bg-success-100 hover:border-success-100 focus:ring-success-500 \n' +
        'mode-dark:bg-success-900 mode-dark:text-success-300 mode-dark:border-success-900 mode-dark:hover:bg-success-800 mode-dark:hover:border-success-800',
      info:
        'text-info-500 bg-info-50 border-info-50 hover:bg-info-100 hover:border-info-100 focus:ring-info-500 \n' +
        'mode-dark:bg-info-900 mode-dark:text-info-300 mode-dark:border-info-900 mode-dark:hover:bg-info-800 mode-dark:hover:border-info-800',
    },
  };

  return (
    <button
      ref={ref}
      className={mergeCls(
        baseClasses.concat(darkClasses),
        variantClasses[variant][status],
        sizeClasses[size],
      )}
      {...rest}
    >
      <IconButton icon={icon} size={size} />
      <span>{children}</span>
    </button>
  );
});

const IconButton: React.FC<{
  icon?: React.ReactNode;
  size?: Props['size'];
}> = ({ icon }) => {
  return icon && <span>{icon}</span>;
};
