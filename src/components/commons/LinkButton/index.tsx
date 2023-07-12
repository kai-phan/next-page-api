import React from 'react';

import { ButtonProps } from 'src/components/commons';
import {
  BUTTON_SHAPE_CLASSES,
  BUTTON_SIZE_CLASSES,
} from 'src/components/commons/Button/classes';
import { Icon } from 'src/components/shared';
import mergeCls from 'src/libs/client/cls';

import {
  BASE_LINK_BUTTON_CLASSES,
  LINK_BUTTON_STATUS_CLASSES,
} from './classes';

export type LinkButtonProps = {
  className?: string;
} & Omit<ButtonProps, 'variant' | 'isLabelIcon'>;

export default React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithoutRef<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkButtonProps
  >
>(function LinkButton(props, ref) {
  const {
    className,
    children,
    shape = 'rounded',
    size = 'medium',
    status,
    icon,
    loading,
    ...rest
  } = props;

  return (
    <a
      ref={ref}
      className={mergeCls(
        BASE_LINK_BUTTON_CLASSES,
        LINK_BUTTON_STATUS_CLASSES[String(status)],
        BUTTON_SIZE_CLASSES[size],
        BUTTON_SHAPE_CLASSES[shape],
        loading && 'opacity-60',
        className,
      )}
      {...rest}
    >
      <Icon icon={icon} loading={loading} size={size} />
      <span className="empty:hidden">{children}</span>
    </a>
  );
});
