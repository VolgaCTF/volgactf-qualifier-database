
exports.up = function(knex) {
  return knex.schema.alterTable('teams', function (table) {
    table.integer('ctftimeTeamId').nullable()
    table.unique(['ctftimeTeamId'], 'teams_ctftime_team_id_uniq')
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('teams', function (table) {
    table.dropUnique(['ctftimeTeamId'], 'teams_ctftime_team_id_uniq')
    table.dropColumn('ctftimeTeamId')
  })
}
