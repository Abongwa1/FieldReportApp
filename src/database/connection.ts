import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

export const createTables = async (db: any) => {
  const query = `
    CREATE TABLE IF NOT EXISTS reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      status TEXT,
      created_at TEXT
    );
  `;
  await db.executeSql(query);
};

export const getDBConnection = async () => {
  return SQLite.openDatabase({ name: "field_reports.db", location: "default" });
};