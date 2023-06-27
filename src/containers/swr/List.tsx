import React from 'react';

import { useUsers } from 'src/swrs/users';

export type Props = {
  className?: string;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
};

const List: React.FC<Props> = ({ setId }) => {
  const { data: list } = useUsers({ variables: {} });

  return (
    <ul className="border border-amber-500">
      {list?.map((user) => {
        return (
          <li
            key={user.id}
            onClick={() => setId(user.id)}
            className={
              'cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out'
            }
          >
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
