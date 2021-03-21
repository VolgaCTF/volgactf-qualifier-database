
exports.up = function(knex) {
  return knex.schema.alterTable('task_reward_schemes', function (table) {
    table.string('dynlogK').nullable()
    table.string('dynlogV').nullable()
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('task_reward_schemes', function (table) {
    table.dropColumn('dynlogK')
    table.dropColumn('dynlogV')
  })
}
