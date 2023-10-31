const { PORT, DB_URL, EMAIL, PASS, ETH_EMAIL, ETH_PASS } = process?.env;

export const config = {
  port: PORT,
  db_url: DB_URL,
  credential: { email: EMAIL, pass: PASS },
  etherial: { email: ETH_EMAIL, pass: ETH_PASS },
};
