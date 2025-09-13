import { Router } from 'express';
import { connectToDatabase } from '../models/db.js';

const router = Router();

// Get all gifts
router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection('gifts').find().toArray();
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get gift by ID
router.get('/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gift = await db.collection('gifts').findOne({ _id: req.params.id });
    res.json(gift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
