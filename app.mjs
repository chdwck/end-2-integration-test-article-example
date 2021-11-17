import express from 'express';
import bookRoutes from './routes/books.js'

const app = express();

// enable parsing application/json
app.use(express.json());

app.use('/books', bookRoutes);

export default app;