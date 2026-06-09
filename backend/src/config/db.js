import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let dbInstance = null;

export const connectDB = async () => {
  try {
    // Database file will be created in the backend root directory as database.sqlite
    const dbPath = process.env.SQLITE_DB_PATH || path.join(process.cwd(), "database.sqlite");
    
    dbInstance = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // Create the notes table if it doesn't exist
    await dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS notes (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )
    `);

    console.log("SQLITE DATABASE CONNECTED & INITIALIZED!");
    return dbInstance;
  } catch (error) {
    console.error("Error connecting to SQLite database:", error);
    process.exit(1); // exit with failure
  }
};

export const getDB = () => {
  if (!dbInstance) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return dbInstance;
};