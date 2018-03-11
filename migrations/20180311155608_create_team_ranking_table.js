exports.up = function (knex, Promise) {
  return knex.schema.createTable('team_rankings', function (table) {
    table.increments('id').primary()
    table.integer('teamId').notNullable().references('id').inTable('teams')
    table.integer('position').notNullable()
    table.integer('score').notNullable()
    table.dateTime('lastUpdated').nullable()
    table.unique(['teamId'], 'team_scores_ndx_team_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('team_rankings')
}
