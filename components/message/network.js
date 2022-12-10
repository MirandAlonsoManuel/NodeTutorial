const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const { list } = require('./store');

const router = express.Router();


router.get('/', function (req, res) {
    controller.getMessages()
        .then((list) => {
            response.success(req, res, list, 200);
        }).catch(e => {
            response.error(req, res, 'UnexpectedError', 500, e);
        })
});

router.post('/', function (req, res) {
    
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
    })

});

module.exports = router;