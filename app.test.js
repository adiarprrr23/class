const request = require("supertest");
const app = require("./index.js"); // Import the app

describe('Test the root path', () => {
  it('should respond with "Home page"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Home page');
  });
});

describe('Test the /about path', () => {
  it('should respond with "About page"', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('About page');
  });
});
