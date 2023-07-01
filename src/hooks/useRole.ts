import { useSession } from 'next-auth/react';

import { isAdmin } from 'src/utils/helper';

const useRole = () => {
  const { data } = useSession();

  return {
    isAdmin: isAdmin(data),
  };
};

export default useRole;
