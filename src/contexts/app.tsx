import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { getCovers, getGames } from "../services/games";

interface AppContextData {
  games: any;
  covers: any;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [games, setGames] = useState<any>(null);
  const [covers, setCovers] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    console.log("loadData");

    try {
      const _games = await getGames();
      console.log("loadData getGames", { _games });

      setGames(_games);
    } catch (error) {
      console.log("loadData getGames error", { error });
    }

    try {
      const _covers = await getCovers();
      console.log("loadData getCovers", { _covers });

      setCovers(_covers);
    } catch (error) {
      console.log("loadData getGames error", { error });
    }
  }

  useEffect(() => {
    async function loadStorageData() {
      const games = await AsyncStorage.getItem("@gg:games");
      const covers = await AsyncStorage.getItem("@gg:covers");

      console.log("useApp effect", { games, covers });

      if (games) setGames(games);
      if (covers) setCovers(covers);

      loadData();
    }

    loadStorageData();
  }, []);

  return (
    <AppContext.Provider value={{ games, covers }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider.");
  }

  return context;
}

export default AppContext;
