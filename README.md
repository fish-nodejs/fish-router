# koa-router
在使用别人的router之前，先尝试一下，如果是自己来设计，我会怎么写。

## 预期功能
### module.exports 必须是一个类。
因为我们需要维持一个中间件数组，所以不能是单例模式
```
class Router{
}
```

### 注册路由
Router.use(url, method, callback)
这个函数会返回一个新的函数，这个新的函数会在符合路由规则的时候调用 callback，也就是装饰器模式啦

同时这个对象内部需要维持一个数组，将来可以

### 组合路由
Router.getAllRouters() 直接返回一个大的路由函数。这样的写法方便将来模块化，这样以后就可以吧路由写到不同的模块中去了

### 简写
可以通过Router.get .post 来作为 .use的简写

### 支持路由变量
路由中可以使用一些变量，通过正则解析来匹配路由，并且获得的数据传给
ctx.request.params

