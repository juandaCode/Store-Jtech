// Variables de entorno
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbPort: process.env.DB_PORT || 27017,
  dbHost: process.env.DB_HOST || 'localhost'
};

module.exports = { config };
