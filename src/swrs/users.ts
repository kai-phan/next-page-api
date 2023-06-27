import { createSWR, createSWRMutation } from 'src/libs/client/swr';
import fetcher from 'src/libs/fetcher';

const endpoint = '/api/users';

export const useUsers = createSWR<Model.User[], { skip?: number }>({
  primaryKey: endpoint,
  fetcher,
});

export const useUserDetail = createSWR<Model.User, number | null>({
  primaryKey: endpoint,
  fetcher,
});

export const useUpdateUser = createSWRMutation<
  Model.User,
  number,
  Partial<Model.User>
>({
  primaryKey: endpoint,
  fetcher(key, options) {
    return fetcher.put(key, {
      body: options.arg,
    });
  },
});
