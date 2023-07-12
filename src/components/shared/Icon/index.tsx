import React from 'react';

import { Props } from 'src/components/commons/Button';
import {
  ICON_BASE_CLASSES,
  ICON_SVG_CLASSES,
} from 'src/components/commons/Button/classes';
import { Spinner } from 'src/components/icons';
import mergeCls from 'src/libs/client/cls';

export const Icon: React.FC<{
  icon?: React.ReactNode;
  size?: Props['size'];
  className?: string;
  loading?: boolean;
}> = ({ icon, size = 'medium', className, loading }) => {
  return (
    (icon || loading) && (
      <span
        className={mergeCls(
          ICON_BASE_CLASSES,
          ICON_SVG_CLASSES[size],
          className,
        )}
      >
        {loading ? <Spinner size={size} /> : icon}
      </span>
    )
  );
};

export default Icon;
