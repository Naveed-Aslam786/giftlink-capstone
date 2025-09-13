/**
 * db.js
 * MongoDB connection
 */
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

export async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db('giftlink');
}
