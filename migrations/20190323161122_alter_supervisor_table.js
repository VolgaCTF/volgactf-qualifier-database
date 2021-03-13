
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.integer('eventHistoryPageSize').nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.dropColumn('eventHistoryPageSize')
  })
}
