exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_remote_checkers', function (table) {
    table.increments('id').primary()
    table.integer('taskId').notNullable().references('id').inTable('tasks')
    table.integer('remoteCheckerId').notNullable().references('id').inTable('remote_checkers')
    table.dateTime('createdAt').notNullable()
    table.unique(['taskId'], 'task_remote_checkers_ndx_task_unique')
    table.unique(['remoteCheckerId'], 'task_remote_checkers_ndx_remote_checker_unique')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('task_remote_checkers')
}
