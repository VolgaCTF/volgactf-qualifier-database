exports.up = function (knex, Promise) {
  return knex.schema.createTable('webhook_responses', function (table) {
    table.increments('id').primary()
    table.json('data').notNullable()
    table.dateTime('createdAt').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('webhook_responses')
}
