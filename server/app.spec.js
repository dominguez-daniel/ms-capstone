const supertest = require('supertest');
const app = require('./app');

const request = supertest(app);

describe('App endpoints', () => {
  describe('/', () => {
    it('should get healthy response from server', async () => {
      try {
        const res = await request.get('/');
        expect(res.text).toBe('Healthy');
        expect(res.status).toBe(200);
      } catch(e) {
        console.error(e);
      }
    });
  });

  describe('/sort', () => {
    it('should sort and return the given array', async () => {
      try {
        const res = await request.post('/sort').send({ input: [3, 2, 1] });
        expect(res.status).toBe(200);
        expect(res.body.sortedOutput).toMatchObject([1, 2, 3]);
        expect(res.body.methodUsed).toBe('merge sort');
      } catch(e) {
        console.error(e);
      }
    });
  });
});
