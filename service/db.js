const {
    Client
} = require("pg")

const client = new Client()

module.exports.getMonthReports = async function () {
    try {
        await client.connect()
        const res = await client.query('SELECT * from month_reports')
        console.log(res.rows)
        await client.end()
        return res.rows
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports.getReportDatas = async function (reportId) {
    try {
        await client.connect()
        const res = await client.query('select date, data from report_data where report_id = $1', [reportId])
        console.log(res.rows)
        await client.end()
        return res.rows
    } catch (err) {
        console.log(err.stack)
    }
}