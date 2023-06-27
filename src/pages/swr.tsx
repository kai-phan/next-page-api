import React from 'react';

import { NextPageWithAuth } from 'next';

import SWR from 'src/containers/swr';
import fetcher from 'src/libs/fetcher';

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

export const getServerSideProps = async () => {
  const response = await fetcher(`${process.env.API_URL}/jobs`, {
    returnError: true,
  });

  console.log(response);
  return {
    props: {
      jobs: response,
    },
  };
};

export default Swr;
