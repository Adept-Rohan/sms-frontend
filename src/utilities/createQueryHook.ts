import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

/**
   * @description Create a custom useQuery hook
   * @param {TQueryKey} createHookQueryKey Similar to `useQuery`'s `queryKey` param
   * @param {MutationFunction} createHookQueryFn Similar to `useQuery`'s `queryFn` param
   * @param {UseMutationOptions} createHookOptions Similar to `useQuery`'s `option` param
   * @returns Custom `useQuery` hook
   * @example Basic Use:
   * const useUsersMutation = createQueryHook([...keys],() =>
      axios.get('/api/users', {...getOptions}).then((res) => res.data), {...options}
  );
   */
export function createQueryHook<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  createHookQueryKey: TQueryKey,
  createHookQueryFn: QueryFunction<TQueryFnData, TQueryKey>,
  createHookOptions?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
) {
  return (
    options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ) => {
    const finalOption: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> =
      {
        queryKey: createHookQueryKey,
        queryFn: createHookQueryFn,
        ...createHookOptions,
        ...options,
      };
    return useQuery(finalOption);
  };
}
