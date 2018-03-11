exports.up = function (knex, Promise) {
  return knex.schema.createTable('task_reward_schemes', function (table) {
    table.increments('id').primary()
    table.integer('taskId').notNullable().references('id').inTable('tasks')
    table.integer('maxValue').notNullable()
    table.integer('minValue').nullable()
    table.integer('subtractPoints').nullable()
    table.integer('subtractHitCount').nullable()
    table.dateTime('created').notNullable()
    table.dateTime('updated').notNullable()
    table.unique(['taskId'], 'task_reward_schemes_ndx_task_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('task_reward_schemes')
}
