
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.string('email', 254).notNullable().alter()
    table.unique(['email'], 'supervisors_ndx_email_unique')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('supervisors', function (table) {
    table.string('email', 254).nullable().alter()
    table.dropUnique(['email'], 'supervisors_ndx_email_unique')
  })
}
