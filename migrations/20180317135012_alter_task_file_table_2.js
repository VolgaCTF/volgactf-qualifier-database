exports.up = function (knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.unique(['prefix'], 'task_files_ndx_prefix_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('task_files', function (table) {
    table.dropUnique(['prefix'], 'task_files_ndx_prefix_unique')
  })
}
