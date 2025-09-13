import { Router } from 'express';
import { connectToDatabase } from '../models/db.js';

const router = Router();

// Example: login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const db = await connectToDatabase();
    const user = await db.collection('users').findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
