
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments();
    table.integer('jobId');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
