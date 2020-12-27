import io from "socket.io-client";
import { api_uri } from ".";

export default class Socket {
  public socket: SocketIOClient.Socket;

  constructor(token: string) {
    this.socket = io(api_uri, {
      query: {
        token,
      },
    });
  }
}
