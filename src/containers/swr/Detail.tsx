import React from 'react';

import { useUpdateUser, useUserDetail } from 'src/swrs/users';

export type Props = {
  className?: string;
  id: number | null;
};

const Detail: React.FC<Props> = ({ id }) => {
  const { data } = useUserDetail({ variables: id, enabled: !!id });
  const { trigger, isMutating } = useUpdateUser({ variables: id! });

  return (
    <React.Fragment>
      <ul className="border-amber-500 border">
        <li>{isMutating ? 'loading...' : data?.name}</li>
        <li>{data?.email}</li>
      </ul>

      <button
        className="border border-amber-500"
        onClick={() => {
          const newData = { ...data!, name: 'Quy' };

          trigger(newData);
        }}
      >
        Change name to Quy
      </button>
    </React.Fragment>
  );
};

export default Detail;
