exports.up = function (knex, Promise) {
  return knex.schema.createTable('task_files', function (table) {
    table.increments('id').primary()
    table.integer('taskId').notNullable().references('id').inTable('tasks')
    table.string('filename', 256).notNullable()
    table.dateTime('createdAt').notNullable()
    table.unique(['taskId', 'filename'], 'task_files_ndx_task_filename_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('task_files')
}
