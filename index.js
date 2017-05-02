'use strict';

var express = require('express'),
    parser = require('body-parser'),
    nedb = require('nedb'),
    db = new nedb({
        filename: '.db',
        autoload: true
    }),
    app = express();

app
    .use(parser.json())
    .get('/', function (req, res, next) {
        db.find({}, function (err, dbDocuments) {
            if (err) {
                return next(err);
            }

            res.json(dbDocuments);
        });
    })
    .get('/:id', function (req, res, next) {
        var id = req.params.id;

        db.findOne({_id: id}, function (err, dbDocument) {
            if (err) {
                return next(err);
            }

            res.json(dbDocument);
        });
    })
    .post('/', function (req, res, next) {
        var document = req.body;

        db.insert(document, function (err, dbDocument) {
            if (err) {
                return next(err);
            }

            res.json(dbDocument);
        });
    })
    .put('/:id', function (req, res, next) {
        var id = req.params.id,
            document = req.body;

        db.update({_id: id}, document, function (err, numReplaced) {
            if (err) {
                return next(err);
            }

            res.json(numReplaced);
        });
    })
    .delete('/:id', function (req, res, next) {
        var id = req.params.id;

        db.remove({_id: id}, function (err, numRemoved) {
            if (err) {
                return next(err);
            }

            res.json(numRemoved);
        });
    })
    .listen(3000, function () {
        console.log('Server listening on port 3000!');
    });

module.exports = app;