import { createContext, useContext } from "react";
const DispatchContext = createContext(() => null);
export default DispatchContext;

export function useDispatch() {
  const dispatch = useContext(DispatchContext);
  return dispatch;
}
