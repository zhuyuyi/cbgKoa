const router = require('koa-router')();
const {
  myFindList
} = require('./../databaseApi/index');

router.prefix('/api');

// 请求列表接口
router.post('/lists', async (ctx, next) => {

  let page = ctx.request.body.page ? ctx.request.body.page : 1;

  let lists = await myFindList(page);

  if (lists.length === 0) {
    ctx.body = {
      lists,
      page,
      isLastPage: true
    }
  } else {
    ctx.body = {
      lists,
      page,
      isLastPage: false
    }
  }
})

module.exports = router