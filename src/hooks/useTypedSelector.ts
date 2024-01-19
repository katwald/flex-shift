import {
  useSelector as usedypedSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "../redux";

export const useSelector: TypedUseSelectorHook<RootState> = usedypedSelector;
