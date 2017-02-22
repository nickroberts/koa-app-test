const KoaRouter = require('koa-router');

const api = KoaRouter();

api.get('/api/test',
  async (ctx, next) => {
    ctx.body = {
      things: [
        {
          id: 1,
          value: 'One'
        },
        {
          id: 2,
          value: 'Two'
        },
        {
          id: 3,
          value: 'Three'
        }
      ]
    };
  });

module.exports = api;
