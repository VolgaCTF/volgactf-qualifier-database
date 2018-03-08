exports.up = function (knex, Promise) {
  return knex.schema.createTable('remote_checkers', function (table) {
    table.increments('id').primary()
    table.string('name', 50).notNullable()
    table.string('url', 256).notNullable()
    table.string('authUsername', 50).notNullable()
    table.string('authPassword', 50).notNullable()
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').notNullable()
    table.unique(['name'], 'remote_checkers_ndx_name_unique')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('remote_checkers')
}
