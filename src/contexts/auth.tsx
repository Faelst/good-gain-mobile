import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import * as auth from "../services/auth";
import { IUser } from "../interfaces/IUser";

interface AuthContextData {
  signed: boolean;
  token: string;
  user: IUser | null;
  loading: boolean;
  signIn(data: any): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(data: any) {
    const response = await auth.signIn(data);

    console.log("AuthContext signIn", { data, response });

    setUser(response.personaldata);

    await AsyncStorage.setItem(
      "@gg:user",
      JSON.stringify(response.personaldata)
    );
    await AsyncStorage.setItem("@gg:token", response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@gg:user");
      const storagedToken = await AsyncStorage.getItem("@gg:token");

      console.log("useAuth effect", { storagedUser, storagedToken });

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, token: "", user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export default AuthContext;
