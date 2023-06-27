import React from 'react';

import { NextPageWithAuth } from 'next';

import SWR from 'src/containers/swr';

export type Props = {
  className?: string;
};

const Swr: NextPageWithAuth<Props> = () => {
  return (
    <section className="container mx-auto">
      <SWR />
    </section>
  );
};

Swr.auth = {
  isProtected: true,
};

export default Swr;
