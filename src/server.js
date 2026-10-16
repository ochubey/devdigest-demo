import http from 'node:http';
import { getUser, listUsers } from './users.js';

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  res.setHeader('content-type', 'application/json');

  if (url.pathname === '/users') {
    res.end(JSON.stringify(listUsers()));
    return;
  }

  const match = url.pathname.match(/^\/users\/(\d+)$/);
  if (match) {
    const user = getUser(match[1]);
    res.statusCode = user ? 200 : 404;
    res.end(JSON.stringify(user ?? { error: 'not found' }));
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(3000);
