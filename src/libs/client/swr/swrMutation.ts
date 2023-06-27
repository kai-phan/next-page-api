import { Key } from 'swr';
import useSWRMutation, {
  MutationFetcher,
  SWRMutationConfiguration,
} from 'swr/mutation';

export type CreateSWRMutationOptions<TData, TError, TKey extends Key, TArgs> = {
  primaryKey: string;
  fetcher: MutationFetcher<TData, TArgs, TKey>;
} & Omit<SWRMutationConfiguration<TData, TError, TArgs>, 'fetcher'>;

export type MutationHookOptions<TData, TVariable, TError, TArgs> = Omit<
  SWRMutationConfiguration<TData, TError, TArgs>,
  'fetcher'
> & {
  variables: TVariable;
};

export const createSWRMutation = <
  TData,
  TVariable = unknown,
  TArgs = unknown,
  TError = unknown,
  TKey extends Key = Key,
>(
  options: CreateSWRMutationOptions<TData, TError, TKey, TArgs>,
) => {
  const { primaryKey, fetcher, ...createdOptions } = options;

  const getPrimaryKey = () => {
    return primaryKey;
  };

  const getKey = (variable: TVariable) => {
    return [primaryKey, variable] as const;
  };

  const getFetcher = () => {
    return fetcher;
  };

  const useSWRHook = (
    opt: MutationHookOptions<TData, TVariable, TError, TArgs>,
  ) => {
    const { variables, ...hookOptions } = opt;

    return useSWRMutation(getKey(variables), getFetcher(), {
      ...createdOptions,
      ...hookOptions,
    });
  };

  return Object.assign(useSWRHook, {
    getPrimaryKey,
    getKey,
    getFetcher,
  });
};
