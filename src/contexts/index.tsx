import React from "react";
import { AppProvider } from "./app";
import { AuthProvider } from "./auth";
import { SocketProvider } from "./socket";
import { ToastProvider } from "./toast";

const RootProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <SocketProvider>
          <AppProvider>{children}</AppProvider>
        </SocketProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default RootProvider;
