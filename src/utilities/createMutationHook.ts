import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

/**
   * @description Create a custom useMutation hook
   * @param {MutationFunction} createHookMutationFn Similar to `userMutation`'s `mutationFn` param
   * @param {UseMutationOptions} createHookOptions Similar to `useMutation`'s `option` param
   * @returns Custom `useMutation` hook
   * @example
   * const useLoginMutation = createMutationHook((data) =>
      axios.post('/api/auth/login', data, {...postOptions}).then((res) => res.data), {...options}
  );
   */
export function createMutationHook<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  createHookMutationFn: MutationFunction<TData, TVariables>,
  createHookOptions?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationFn"
  >
) {
  return (
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ) => {
    const finalOption: UseMutationOptions<TData, TError, TVariables, TContext> =
      {
        mutationFn: createHookMutationFn,
        ...createHookOptions,
        ...options,
      };
    return useMutation(finalOption);
  };
}
