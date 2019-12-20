// Update with your config settings.
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'airbnb',
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    },
    debug: true
  }
};
