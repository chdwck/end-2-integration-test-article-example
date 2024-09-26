import { Router } from 'express';
import Book from '../data/models/Book.mjs'

const router = Router();

/**
 * List book entries
 */
router.get('/', async (req, res) => {
    try {        
        const books = await Book.list();
        return res.status(200).json({ books });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

/**
 * Create a book entry
 */
router.post('/', async (req, res) => {
    try {
        const { title, authorName } = req.body;
        const newBook = await Book.create({ title, authorName }).save();
        return res.status(201).json(newBook);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

export default router;