
module.exports = {
  "req": {
    "method": "get",
    "path": "/users"
  },
  "res": {
    "status": 200,
    "body": [function(ctx, next) {
      next()
    }, function(ctx){
      ctx.body = "Hello world!"
    }],
    "headers": {
      "Content-Type": "text/plain"
    }
  }
}
