exports.up = function (knex, Promise) {
  return knex.schema.createTable('task_values', function (table) {
    table.increments('id').primary()
    table.integer('taskId').notNullable().references('id').inTable('tasks')
    table.integer('value').notNullable()
    table.dateTime('created').notNullable()
    table.dateTime('updated').notNullable()
    table.unique(['taskId'], 'task_values_ndx_task_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('task_values')
}
