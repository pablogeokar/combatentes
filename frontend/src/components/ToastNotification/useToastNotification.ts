import { useContext } from "react";
import { ToastContext } from "./ToastContext";

export function useToastMessage() {
  const context = useContext(ToastContext);
  return context;
}
