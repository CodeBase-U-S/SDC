const { Pool } = require('pg');
const config = require('../config/config');

const pool = new Pool(config);

pool.connect((err) => {
  if (err) { console.error(err); }
});

module.exports = pool;
