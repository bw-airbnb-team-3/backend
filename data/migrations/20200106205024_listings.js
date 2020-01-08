exports.up = function (knex) {
    return knex.schema.createTable('listings', tbl => {
      tbl.increments('id').primary();
      tbl.string('amenities', 128).notNullable();
      tbl.integer('bedrooms').notNullable();
      tbl.integer('bathrooms').notNullable();
      tbl.bool('host_identity_verified').notNullable();
      tbl.string('host_neighborhood', 128).defaultTo(null);
      tbl.float('latitude').defaultTo(null);
      tbl.float('longitude').defaultTo(null);
      tbl.string('market', 128).defaultTo(null);
      tbl.string('property_type', 128).defaultTo(null);
      tbl.integer('review_scores_value').defaultTo(null);
      tbl.integer('room_type').defaultTo(null);
      tbl.integer('weekly_price').notNullable();
      tbl.integer('recommended_price').notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('listings');
  };