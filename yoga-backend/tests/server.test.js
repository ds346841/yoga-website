const request = require('supertest');
const app = require('../server'); // path to your server.js

describe('Server and Routing', () => {
  it('should respond with 404 for unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.statusCode).toBe(404);
  });

  it('should respond to /api/bookings route (GET)', async () => {
    const response = await request(app).get('/api/bookings');
    expect(response.statusCode).toBe(200); // or 401 if auth is required
    // Optionally check structure:
    // expect(Array.isArray(response.body)).toBe(true);
  });
});