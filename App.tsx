import React, { useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { getDBConnection, createTables } from "./src/database/connection";

export default function App() {
  useEffect(() => {
    const initDB = async () => {
      const db = await getDBConnection();
      await createTables(db);
    };

    initDB();
  }, []);

  return <AppNavigator />;
}