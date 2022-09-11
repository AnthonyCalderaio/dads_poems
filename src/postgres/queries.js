const Pool = require("pg").Pool;
// TODO: Hide this
const pool = new Pool({
  user: "anthonycalderaio",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
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

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const addPoem = (request, response) => {
  // request.query.title
  // request.body.text
  pool.query(
    `INSERT INTO public."Poems"(
      title, text)
      VALUES (${encodeURI(request.query.title)}, ${encodeURI(request.body.text)});`
      ,
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
  addPoem
};
