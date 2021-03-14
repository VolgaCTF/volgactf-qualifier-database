
exports.up = function(knex) {
  return knex.schema.alterTable('teams', function (table) {
    table.string('logoChecksum').nullable()
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('teams', function (table) {
    table.dropColumn('logoChecksum')
  })
}
