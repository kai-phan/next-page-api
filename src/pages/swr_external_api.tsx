import React from 'react';

import SWREvents from 'src/containers/swr2';

export type Props = {
  className?: string;
};

const Events: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <SWREvents />
    </React.Fragment>
  );
};

export default Events;
