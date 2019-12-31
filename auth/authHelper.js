const db = require("../dbConfig");

function addUser(user) {
  return db("users")
    .returning(["id", "username", "password"])
    .insert(user);
}

function findBy(key) {
  return db("users")
    .where(key)
    .first();
}

module.exports = {
  addUser,
  findBy
};