import { shallowEqual } from "react-redux";
import { ApiStorage } from "./ApiStorage";
import { ReducerApiState } from "./features/apiSlice";
import { useSelectorTyped } from "./store";


export function useSelectorApi<K extends keyof ReducerApiState>(
  key: K
): ReducerApiState[K] {
  const apiData = useSelectorTyped(
    (state) => ({
      ...state.api[key],
      response: ApiStorage.getResponse(state.api[key] as any),
    }),
    shallowEqual
  );
  return apiData;
}
