import supertest from 'supertest'
import knex from '~/data/db';
import app from '~/app'
import Book from '~/data/models/Book'

afterEach(async () => {
 // Clean up anything we created in each test
 await knex.raw('TRUNCATE TABLE book RESTART IDENTITY CASCADE');
});

afterAll(async () => {
    // ensure we close our connection
    // after the tests are completed
    knex.destroy();
});

describe('/books', () => {
    describe('GET /', () => {
        it('returns a list of books', async () => {
            // Arrange
            await Book.create({ title: 'Dracula', authorName: 'Bram Stoker'}).save();

            // Act
            const response = await supertest(app).get('/books');

            // Assert
            expect(response.status).toMatchSnapshot();
            expect(response.body).toMatchSnapshot();
        })
    })

    describe('POST /', () => {
        it('creates a book', async () => {
            // Act
            const response = await supertest(app)
                .post('/books')
                .send({ title: 'Hyperion', authorName: 'Dan Simmons' })

            // Assert
            expect(response.status).toMatchSnapshot();
            expect(response.body).toMatchSnapshot();
        })
    })
})