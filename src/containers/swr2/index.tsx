import React from 'react';

import { getSession } from 'next-auth/react';

import fetcher from 'src/libs/client/fetcher';
import { createSWR } from 'src/libs/client/swr';

export type Props = {
  className?: string;
};

const useEvents = createSWR({
  primaryKey: 'events',
  fetcher: async (keys) => {
    const session = await getSession();

    return fetcher(keys[0], {
      headers: {
        Authorization: `Bearer ${session?.token.access_token}`,
      },
    });
  },
});

const SWREvents: React.FC<Props> = () => {
  const { data: events } = useEvents({
    variables: {},
  });

  return <React.Fragment></React.Fragment>;
};

export default SWREvents;
