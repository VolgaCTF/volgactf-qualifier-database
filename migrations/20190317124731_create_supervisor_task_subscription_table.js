
exports.up = function (knex, Promise) {
  return knex.schema.createTable('supervisor_task_subscriptions', function (table) {
    table.increments('id').primary()
    table.integer('supervisorId').notNullable().references('id').inTable('supervisors')
    table.integer('taskId').notNullable().references('id').inTable('tasks')
    table.dateTime('createdAt').notNullable()
    table.unique(['supervisorId', 'taskId'], 'supervisor_task_subscriptions_ndx_supervisor_task_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('supervisor_task_subscriptions')
}
