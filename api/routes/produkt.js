const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/produkt', function (req, res) {
        db.query('select * from produkter order by id desc limit 3', function (err, data) {
            res.send(data);
        })
    })
}