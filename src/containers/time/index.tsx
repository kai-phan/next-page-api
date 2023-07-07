import React from 'react';

import NativeDate from './NativeDate';
import WithDatejs from './WithDatejs';

export type Props = {
  className?: string;
};

const TimeAndDate: React.FC<Props> = () => {
  const dateString = '2021-01-01T07:00:00.000+07:00';

  return (
    <React.Fragment>
      <NativeDate dateString={dateString} />
      <WithDatejs dateString={dateString} />
    </React.Fragment>
  );
};

export default TimeAndDate;
