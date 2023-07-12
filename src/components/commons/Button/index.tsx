import React from 'react';

import Icon from 'src/components/shared/Icon';
import mergeCls from 'src/libs/client/cls';

import {
  BUTTON_BASE_CLASSES,
  BUTTON_DARK_CLASSES,
  BUTTON_ICON_LABEL_CLASSES,
  BUTTON_SHAPE_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  ICON_LABEL_CLASSES,
  ICON_SIZE_CLASSES,
} from './classes';

export type Props = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  block?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  status?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  shape?: 'rounded' | 'circle' | 'rectangle';
  isLabelIcon?: boolean;
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
    block,
    shape = 'rounded',
    className,
    loading,
    isLabelIcon,
    ...rest
  } = props;

  const isIconOnly = !children && icon;

  return (
    <button
      ref={ref}
      className={mergeCls(
        BUTTON_BASE_CLASSES({ block }).concat(BUTTON_DARK_CLASSES),
        BUTTON_SHAPE_CLASSES[shape],
        BUTTON_VARIANT_CLASSES[variant][String(status)],
        BUTTON_SIZE_CLASSES[size],
        isLabelIcon && BUTTON_ICON_LABEL_CLASSES[size],
        loading && 'opacity-70',
        isIconOnly && 'p-0',
        className,
      )}
      {...rest}
      onClick={loading ? undefined : rest.onClick}
    >
      <Icon
        loading={loading}
        icon={icon}
        size={size}
        className={mergeCls(
          (isIconOnly || isLabelIcon) && ICON_SIZE_CLASSES[size],
          isLabelIcon && ICON_LABEL_CLASSES[variant][String(status)],
          shape === 'circle' && 'rounded-full',
        )}
      />
      <span className="empty:hidden">{children}</span>
    </button>
  );
});
