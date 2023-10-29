const { PORT, DB_URL, EMAIL, PASS } = process?.env;

export const config = {
  port: PORT,
  db_url: DB_URL,
  credential: { email: EMAIL, pass: PASS },
};
