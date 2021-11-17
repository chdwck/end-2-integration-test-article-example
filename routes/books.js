import { Router } from 'express';
import Book from '../data/models/Book.mjs'

const router = Router();

/**
 * List book entries
 */
router.get('/', async (req, res) => {
    const books = await Book.list();
    return res.status(200).json({ books });
});

/**
 * Create a book entry
 */
router.post('/', async (req, res) => {
    const newBook = await Book.create(req.body.title).save();
    return res.status(201).json(newBook);
});

export default router;