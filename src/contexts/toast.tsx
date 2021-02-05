import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Toast from "react-native-easy-toast";

const ToastEvents = {
  HOUR_SELECTED: "HOUR_SELECTED",
  CARD_SELECTED: "CARD_SELECTED",
};

interface IToastData {
  message: string;
  time?: number;
}

interface ToastContextData {
  show(data: IToastData): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const toastRef = useRef<Toast>(null);

  function show({ message, time }: IToastData) {
    toastRef.current?.show(message, time || 500);
  }

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider.");
  }

  return context;
}

export default ToastContext;
