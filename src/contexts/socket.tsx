import React, { createContext, useContext, useEffect, useState } from "react";
import Socket from "../services/socket";
import { useAuth } from "./auth";

const SocketEvents = {
  ON_FIND_GAME: "findGame",
};

interface SocketContextData {
  socket?: SocketIOClient.Socket;
  events: typeof SocketEvents;
}

const SocketContext = createContext<SocketContextData>({} as SocketContextData);

export const SocketProvider: React.FC = ({ children }) => {
  const { token } = useAuth();
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    if (token) setSocket(new Socket(token).socket);
  }, [token]);

  console.log("SocketProvider render", { token, socket });

  return (
    <SocketContext.Provider value={{ socket, events: SocketEvents }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket() {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within an SocketProvider.");
  }

  return context;
}

export default SocketContext;
