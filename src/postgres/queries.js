const Pool = require('pg').Pool
// TODO: Hide this
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 1234
})

const getPoems = (request, response) => {
    pool.query('SELECT * FROM "Poems"', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getPoems
  }