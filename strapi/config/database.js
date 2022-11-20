const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'weather'),
      user: env('DATABASE_USERNAME', 'test'),
      password: env('DATABASE_PASSWORD', 'test'),
    },
    debug: false,
    forceMigration: true,
  },
});
