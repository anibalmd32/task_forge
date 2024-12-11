export default () => ({
  database: {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || 'tasksforge',
  },
});
