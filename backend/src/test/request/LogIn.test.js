import supertest from 'supertest'
import app from '../../app'
const request = supertest(app)

describe('Post /LogIn', () => {
  it('responds with LogIn successfully, user and token', done => {
    request
      .post('/LogIn')
      .set('Accept', 'application/json')
      .send({user: 'arturo', password: '123456'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const {token, ...data} = res.body
        const jsonData = JSON.stringify(data)
        const expect ='{"msg":"LogIn successfully","user":"arturo"}'

        if(expect !== jsonData || !token) {
          return done(err)
        }

        return done()
      })
  })
})


describe('Post /LogIn', () => {
  it('responds with Login failed and status 401', done => {
    request
      .post('/LogIn')
      .set('Accept', 'application/json')
      .send({user: 'arturo', password: 'error12345'})
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err) => {
        if (err) return done(err)
        return done()
      })
  })
})
