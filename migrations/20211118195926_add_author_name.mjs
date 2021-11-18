
export function up(knex) {
  return knex.schema.alterTable('book', table => {
    table.string('author_name');
  });
};

export function down(knex) {
    return knex.schema.alterTable('book', table => {
        table.dropColumn('author_name');
    });
};
