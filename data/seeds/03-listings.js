
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listings').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {amenities: "everything",
        bedrooms: 5, 
        bathrooms: 4,
        host_identity_verified: true,
        weekly_price: 400,
        recommended_price: 200},
        {amenities: "everything and more",
        bedrooms: 2, 
        bathrooms: 1,
        host_identity_verified: false,
        weekly_price: 250,
        recommended_price: 100}
      ]);
    });
};

