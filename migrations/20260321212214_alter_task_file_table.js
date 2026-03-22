exports.up = function(knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.boolean('remote').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.dropColumn('remote')
  })
}
