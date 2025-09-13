// giftlink-backend/seed/seed.js
import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB URI from .env
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("giftlink");
    const collection = db.collection("gifts");

    // Read gifts.json
    const giftsFile = path.join(__dirname, "gifts.json");
    const data = JSON.parse(fs.readFileSync(giftsFile, "utf-8"));

    // Clear old data
    await collection.deleteMany({});
    console.log("🗑️ Old data removed");

    // Insert new data
    const result = await collection.insertMany(data);
    console.log(`🎁 Inserted ${result.insertedCount} gifts`);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

seedDatabase();
