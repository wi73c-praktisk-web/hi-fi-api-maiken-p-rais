const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/produkt', function (req, res) {
        db.query('select * from produkter order by id desc limit 3', function (err, data) {
            res.send(data);
        })
    }),

    app.get('/produkt_pop', function (req, res) {
        db.query('select * from produkter where pris > 4000 limit 3', function (err, data) {
            res.send(data);
        })
    }),

    app.get('/produkter', function (req, res) {
        db.query('select * from produkter', function (err, data) {
            res.send(data);
        })
    }),

    app.get('/produkter/kategori/:id', function (req, res) {
        // console.log(req.params.id)
        db.query('select * from produkter where fk_kategori = ?', req.params.id, function (err, data) {
            res.send(data);
        })
    }),

    app.get('/produkter/:id', function (req, res) {
        console.log(req.params.id)
        db.query('select * from produkter where id = ?', req.params.id, function (err, data) {
            res.send(data);
            console.log(data);
        })
    })
}

