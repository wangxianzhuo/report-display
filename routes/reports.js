const router = require('koa-router')()
const db = require("../service/db")

router.get('/reports', async (ctx, next) => {
  let reports = db.getMonthReports()
  await ctx.render('reports', {
    reports: reports
  })
})


module.exports = router