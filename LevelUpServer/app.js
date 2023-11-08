const Koa = require('koa');
const Router = require('koa-router');
const db = require('./model/index');
const Task = require('./model/task');

const app = new Koa();
const router = new Router();

router.get('/randomTask', async (ctx) => {
  try {
    const randomTask = await Task.aggregate([{ $sample: { size: 1 } }]);
    ctx.body = randomTask[0];
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Internal Server Error' };
  }
});

app.use(router.routes());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
