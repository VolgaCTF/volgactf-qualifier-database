exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function (table) {
    table.increments('id').primary()
    table.json('message').notNullable()
    table.string('recipientEmail').notNullable()
    table.string('recipientName').notNullable()
    table.text('status').notNullable()
    table.integer('teamId').references('id').inTable('teams')
    table.integer('supervisorId').references('id').inTable('supervisors')
    table.dateTime('createdAt').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
}
