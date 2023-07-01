import React from 'react';

import { Accordion } from 'src/components/commons';

export type Props = {
  className?: string;
};

const Components: React.FC<Props> = () => {
  return (
    <section className="container mx-auto">
      <Accordion
        items={[
          { id: 1, title: 'title', children: 'content' },
          { id: 2, title: 'title2', children: 'content2' },
        ]}
      />
    </section>
  );
};

export default Components;
