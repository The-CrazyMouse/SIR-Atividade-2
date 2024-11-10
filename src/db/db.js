import { Low } from 'lowdb'; // Import Low
import { JSONFile } from 'lowdb/node'; // Import JSONFile from 'lowdb/node' (this is necessary for v7.x)

import path from 'path';
import { fileURLToPath } from 'url';

// File paths and helper for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database file path
const file = path.join(__dirname, 'db.json');

// Create adapter and database instance
const adapter = new JSONFile(file);
const db = new Low(adapter, {students: []});

async function initializeDB() {
  // Read the database file
  await db.read();

  // Initialize database structure if it's empty
if (!db.data) {
  db.data = { students: [] };  // Atribui se db.data for null, undefined, false, 0, "", etc.
}

  // Write the changes to the database file
  await db.write();
}

// Initialize the database
await initializeDB();

// Export the database instance for use in other parts of the app
export default db;
