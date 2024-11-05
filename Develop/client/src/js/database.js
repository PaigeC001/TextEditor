import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Function to add content to the database
export const putDb = async (content) => {
  // Open a connection to the database
  const db = await openDB('jate', 1);
  // Start a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // Put the content in the database with a fixed id of 1 to ensure it's overwritten each time
  const request = store.put({ id: 1, content });
  // Confirm the request is successful
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Function to get all content from the database
export const getDb = async () => {
  // Open a connection to the database
  const db = await openDB('jate', 1);
  // Start a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Get the content from the database using the id of 1
  const request = store.get(1);
  // Confirm the request is successful
  const result = await request;
  console.log('🚀 - data retrieved from the database', result?.content);
  return result?.content;
};

// Initialize the database
initdb();
