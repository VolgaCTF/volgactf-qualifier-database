
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.string('email', 254).nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.dropColumn('email')
  })
}
