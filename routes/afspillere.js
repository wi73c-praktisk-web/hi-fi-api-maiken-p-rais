const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/afspillere', function (req, res) {
        db.query('select * from produkter where fk_kategori = 1', function (err, data) {
            res.send(data);
        })
    })}