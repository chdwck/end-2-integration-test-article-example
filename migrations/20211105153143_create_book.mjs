
export function up(knex) {
  return knex.schema.createTable('book', (table) => {
      table.increments('id');
      table.string('title').notNullable();
  })
};

export function down(knex) {
  return knex.schema.dropTableIfExists('book');
};
