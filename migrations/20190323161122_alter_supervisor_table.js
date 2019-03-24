
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.integer('event_history_page_size').nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.dropColumn('event_history_page_size')
  })
}
