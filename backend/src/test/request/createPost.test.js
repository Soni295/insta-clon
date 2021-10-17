import supertest from 'supertest'
import app from '../../app'

const request = supertest(app)

describe('Post /Post (createpost)', () => {
  it('responds with successfully posted msg', done => {
    let token = 'Bearer '
    token += 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
    token += 'eyJpZCI6MSwidXNlciI6ImFydHVybyIsImlhdCI6MTYzNDI2MTAxMn0.'
    token += '_oLgA2_4h83BnnIIWVttqRPzRuaFSQGTnS7-C9T2xl4'

    const base = {'Authorization': token, 'Content-Type': 'application/json'}

    request
      .post('/Post')
      .set(base)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { msg } = res.body

        if(msg !== 'Post created Successfully'){
          return done('unexpect JSON response')
        }

        return done()
      })
  })
})

describe('Post /Post (createpost)', () => {
  it(`responds with error 401 with msg 'token is missing or invalid'`, done => {
    let badtoken = 'Bearer '
    badtoken += 'eaJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
    badtoken += 'eyJpZCI6MSwidXNlciI6ImFydHVybyIsImlhdCI6MTYzNDI2MTAxMn0.'
    badtoken += '_oLgA2_4h83BnnIIWVttqRPzRuaFSQGTnS7-C9T2xl4'

    const base = {'Authorization': badtoken, 'Content-Type': 'application/json'}

    request
      .post('/Post')
      .set(base)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        const { msg } = res.body

        if(msg !== 'token is missing or invalid'){
          return done('unexpect JSON response')
        }
        return done()
      })
  })
})
