import { createSWR, createSWRMutation } from 'src/libs/client/swr';
import fetcher from 'src/libs/fetcher';

export const useUsers = createSWR<Model.User[], { skip?: number }>({
  primaryKey: '/api/users',
  fetcher(key) {
    return fetcher(key);
  },
});

export const useUserDetail = createSWR<Model.User, number | null>({
  primaryKey: '/api/users',
  fetcher(key) {
    return fetcher(key);
  },
});

export const useUpdateUser = createSWRMutation<
  Model.User,
  number,
  Partial<Model.User>
>({
  primaryKey: '/api/users',
  fetcher(key, options) {
    return fetcher(key, {
      method: 'PUT',
      body: JSON.stringify(options.arg),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
