import React from 'react';

import TimeAndDate from 'src/containers/time';

export type Props = {
  className?: string;
};

const Time: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <TimeAndDate />
    </React.Fragment>
  );
};

export default Time;
