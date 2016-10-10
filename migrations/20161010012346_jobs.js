
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(table) {
    table.increments();
    table.integer('companyId');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};
