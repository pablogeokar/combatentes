import { createContext } from "react";

interface NotificationProps {
  //id: number;
  title: string;
  text?: string;
  type?: "Error";
}

interface ToastContextProps {
  toastMessage({ title, text, type }: NotificationProps): void;
  toastList?: Array<NotificationProps>;
  setList: any;
}

export const ToastContext = createContext({} as ToastContextProps);
