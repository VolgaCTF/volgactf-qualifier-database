exports.up = function (knex, Promise) {
  return knex.schema.alterTable('tasks', function (table) {
    table.dateTime('openAt').nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('tasks', function (table) {
    table.dropColumn('openAt')
  })
}
