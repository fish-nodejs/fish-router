const compose = require('koa-compose')

class Router{
  constructor(){
    this._middleware = []
  }
  use(url, method, cb) {
    let handle = function(ctx, next){
      if (ctx.req.url === url && ctx.req.method === method ) {
        cb(ctx, next)
      } else {
        next()
      }
    }
    this._middleware.push(handle)
    return handle
  }

  getAll(){
    return compose(this._middleware)
  }
}

module.exports = Router