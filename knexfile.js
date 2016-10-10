// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'inv_system'
    }
  },

  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
