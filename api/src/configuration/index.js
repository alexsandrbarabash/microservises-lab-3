const port = process.env.PORT || 5000;
const host = process.env.HOST;
const db = process.env.DB;
const authApiUrl = process.env.AUTH_API_URL;

module.exports = {
  port,
  host,
  db,
	authApiUrl
}

