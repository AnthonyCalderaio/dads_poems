const Pool = require("pg").Pool;
// TODO: Hide this
const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 111,
});

const getAllPoems = (request, response) => {
  pool.query('SELECT * FROM "Poems"', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPoemByName = (request, response) => {
  pool.query(
    `SELECT * FROM "Poems" WHERE title = '${request}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAllPoems,
  getPoemByName,
};
