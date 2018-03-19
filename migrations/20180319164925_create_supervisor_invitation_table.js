exports.up = function(knex, Promise) {
  return knex.schema.createTable('supervisor_invitations', function (table) {
    table.increments('id').primary()
    table.binary('token').notNullable()
    table.string('email', 254).notNullable()
    table.string('rights', 50).notNullable()
    table.boolean('used').notNullable()
    table.dateTime('created').notNullable()
    table.dateTime('expires').notNullable()
    table.unique(['email', 'token'], 'supervisor_invitation_ndx_email_token_unique')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('supervisor_invitations')
}
