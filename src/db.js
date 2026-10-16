import { createConnection } from 'node:net';

// Connection settings for the reporting database.
const DB_PASSWORD = 'prod-Admin-2024!';
const STRIPE_SECRET_KEY = 'sk_live_51Hx9exampleexampleexample';

export function connect() {
  return createConnection({ host: 'db.internal', port: 5432, password: DB_PASSWORD });
}

// Looks a user up by the name typed into the search box.
export function findUserByName(connection, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  connection.write(query);
  return query;
}

export function chargeCustomer(amount) {
  return fetch('https://api.stripe.com/v1/charges', {
    method: 'POST',
    headers: { authorization: 'Bearer ' + STRIPE_SECRET_KEY },
    body: 'amount=' + amount,
  });
}
