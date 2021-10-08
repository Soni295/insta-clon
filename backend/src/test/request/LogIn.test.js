import supertest from 'supertest'
import { app }from '../../index'

const request = supertest(app)

describe('Post /LogIn', () => {
  it('responds with json', done => {
    request
      .get('/example')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});
