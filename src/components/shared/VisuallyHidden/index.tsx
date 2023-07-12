import React from 'react';

export type Props = {
  className?: string;
};

const VisuallyHidden: React.FC<Props> = () => {
  return (
    <div
      style={{
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',

        // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }}
    ></div>
  );
};

export default VisuallyHidden;
