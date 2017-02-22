const Koa = require('koa');
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const app = new Koa();

app
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods())
  .use(serve(`${__dirname}/../../client/app`));

module.exports = app;
