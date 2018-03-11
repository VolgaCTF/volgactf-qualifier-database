exports.up = function (knex, Promise) {
  return knex.schema.dropTableIfExists('team_scores')
}

exports.down = function (knex, Promise) {
  return knex.schema.createTable('team_scores', function (table) {
    table.increments('id').primary()
    table.integer('teamId').notNullable().references('id').inTable('teams')
    table.integer('score').notNullable()
    table.dateTime('updatedAt').notNullable()
    table.unique(['teamId'], 'team_scores_ndx_team_unique')
  })
}
