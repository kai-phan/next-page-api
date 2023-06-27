import React from 'react';

import Detail from './Detail';
import List from './List';

export type Props = {
  className?: string;
};

const SWR: React.FC<Props> = () => {
  const [id, setId] = React.useState<number | null>(null);

  return (
    <section className="flex justify-between">
      <List setId={setId} />
      <Detail id={id} />
    </section>
  );
};

export default SWR;
