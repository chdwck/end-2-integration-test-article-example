import knex from '../db.mjs'

class Book {
    static tableName = 'book';

    constructor({ id = null, title = null, authorName = '' }) {
       if (title === null) {
           throw new Error('param.title is required to create a Book.');
       }

       this.id = id;
       this.title = title;
       this.authorName = authorName;
    }

    static create({ title, authorName }) {
        return new Book({ title, authorName });
    }

    static fromRow (row) {
        return new Book({
            id: row.id,
            title: row.title,
            authorName: row.author_name
        });
    }

    toRow() {
        return {
            title: this.title,
            author_name: this.authorName
        };
    }

    async save() {
        try {
            const [newRow] = await knex(Book.tableName)
                .returning('*')
                .insert(this.toRow());

            return Book.fromRow(newRow);
        } catch (e) {
            console.error('Unable to save book', e)
            throw e;
        }
    }

    static async list() {
        try {
            const books = await knex(Book.tableName).select('*')

            return books.map(Book.fromRow);
        } catch (e) {
            console.error('Unable to list books', e)
            throw e;
        }
    }
}

export default Book;