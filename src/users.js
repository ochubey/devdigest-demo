// In-memory user store used by the demo service.
const users = new Map([
  [1, { id: 1, name: 'Ada', email: 'ada@example.com' }],
  [2, { id: 2, name: 'Linus', email: 'linus@example.com' }],
]);

export function getUser(id) {
  return users.get(Number(id)) ?? null;
}

export function listUsers() {
  return [...users.values()];
}
