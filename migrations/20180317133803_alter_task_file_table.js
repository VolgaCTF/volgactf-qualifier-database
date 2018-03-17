exports.up = function(knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.string('prefix', 64).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.dropColumn('prefix')
  })
}
