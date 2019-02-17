const assert = require('assert')
const Koa = require('koa')
const request = require('supertest')
const Router = require('../index')

let app = new Koa()
var router = new Router()

app.use(router.use('/a/b', 'GET', async (context, next) => {
  context.res.end('/a/b')
}))

describe('GET /a/b', function() {
  it('should handle this router', function(done) {
    request(app)
      .get('/a/b')
      .expect(200)
      .then( res => {
        console.log(res.body)
        assert.strictEqual(res.body, '/a/b')
      })
  })
})