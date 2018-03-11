
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('tasks', function (table) {
    table.dropColumn('value')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('tasks', function (table) {
    table.integer('value').notNullable()
  })
}
