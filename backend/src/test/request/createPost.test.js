import supertest from 'supertest'
import app from '../../app'

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImFydHVybyIsImlhdCI6MTYzNDI2MTAxMn0._oLgA2_4h83BnnIIWVttqRPzRuaFSQGTnS7-C9T2xl4'

let base = {'Authorization': token, 'Content-Type': 'application/json'}

const request = supertest(app)

describe('Post /Post (createpost)', () => {
  it('responds with LogIn successfully, user and token', done => {
    request
      .post('/Post')
      .set(base)
//      .send({user: 'arturo', password: '123456'})
//      .expect('Content-Type', /json/)
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
