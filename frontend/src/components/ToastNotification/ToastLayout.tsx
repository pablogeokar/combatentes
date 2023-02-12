import * as Toast from "./styles";
import { HandPalm, X } from "phosphor-react";
import { useCallback, useEffect } from "react";

interface NotificationProps {
  id: number;
  title: string;
  text?: string;
  type?: "Error";
}

interface NotificationListProps {
  toastList?: Array<NotificationProps>;
  setList: any;
}

export function ToastNotification({
  toastList,
  setList,
}: NotificationListProps) {
  // Delete Toast
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastList?.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastList, setList]
  );

  // Delete Toast after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList?.length) {
        deleteToast(toastList[0].id);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);
  return (
    <Toast.Wrapper>
      {toastList?.map((toast) => (
        <Toast.Container key={toast.id}>
          {toastList[0].type === "Error" && (
            <div className="error">
              <HandPalm size={32} />
            </div>
          )}
          <Toast.Message>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Text>{toast.text}</Toast.Text>
          </Toast.Message>
          <X
            size={32}
            weight="thin"
            className="close"
            onClick={() => deleteToast(toast.id)}
          />
        </Toast.Container>
      ))}
    </Toast.Wrapper>
  );
}
