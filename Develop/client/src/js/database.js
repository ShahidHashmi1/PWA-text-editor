import { openDB } from 'idb';
const header = require('./header');

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('pwa text editor database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('pwa text editor database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id) => {
  console.log('PUT to the database');
  console.error('putDb not implemented')
  const jateDb = await openDB('jate', 1);
  const transaction = jateDb.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.put({ text: id });
  const result = await request;
  console.log('data saved to the database:', result);
  return result;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET ALL:', 'GET all from the database.')
  console.error('getDb not implemented');
  const jateDb = await openDB('jate', 1);
  const transaction = jateDb.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}






initdb();
