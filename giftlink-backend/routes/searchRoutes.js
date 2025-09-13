import { Router } from 'express';
import { connectToDatabase } from '../models/db.js';

const router = Router();

// Search gifts by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const db = await connectToDatabase();
    const gifts = await db.collection('gifts').find({ category }).toArray();
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
