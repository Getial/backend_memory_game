const UsersRouter = require('./UsersRouter');

function routerApi(app) {
  app.use('/users', UsersRouter);
}

module.exports = routerApi;
