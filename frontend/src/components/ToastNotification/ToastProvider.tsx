import { ReactNode, useState } from "react";
import { ToastContext } from "./ToastContext";
import { ToastNotification } from "./ToastLayout";

interface ToastProviderProps {
  children: ReactNode;
}

interface NotificationProps {
  id: number;
  title: string;
  text?: string;
}

export const ToastContextProvider = ({ children }: ToastProviderProps) => {
  const [toastList, setList] = useState<Array<NotificationProps>>();

  function toastMessage(props: NotificationProps) {
    if (!toastList) {
      props.id = 1;
      setList([props]);
    } else {
      props.id = toastList.length + 1;
      setList([...toastList, props]);
    }
  }

  return (
    <ToastContext.Provider value={{ toastList, setList, toastMessage }}>
      {toastList && (
        <ToastNotification toastList={toastList} setList={setList} />
      )}
      {children}
    </ToastContext.Provider>
  );
};
