/**
 * app.js
 * Defines express routes and middlewares
 */
import express from 'express';
import cors from 'cors';

import giftRoutes from './routes/giftRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/gifts/search', searchRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => res.send('GiftLink API is running'));

export default app;
