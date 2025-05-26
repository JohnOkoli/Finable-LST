import express from 'express';
import accountRoutes from './routes/accountRoute';
import ledgerRoutes from './routes/ledgerRoute';
import cardRoutes from './routes/cardRoute';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api', accountRoutes);
app.use('/api/ledger', ledgerRoutes);
app.use('/api/card', cardRoutes);
app.use(errorHandler);
// Base route
app.get("/", (_req, res) => {
  res.send("Route working...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
