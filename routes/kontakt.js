const db = require('../config/sql').connect();

module.exports = function (app) {


    app.post('/kontakt', (req, res) => {

        let values = [];
        values.push(req.body.fornavn);
        values.push(req.body.efternavn);
        values.push(req.body.email);
        values.push(req.body.besked);
        console.log(values);
        db.execute('insert into kontakt set fornavn = ?, efternavn = ?, email = ?, besked = ?', values, (err, rows) => {
            if (err) {
                console.log(err);
                res.json(500, {
                    "message": "Internal Server Error",
                    "error": err
                })
            }
            else {
                res.json(200, {
                    "message": "Data indsat"
                })
            }
        })
    });

}