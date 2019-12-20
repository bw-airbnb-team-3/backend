
exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id').primary();
    tbl.string('username', 128).notNullable();
    tbl.text('password', 128).notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
