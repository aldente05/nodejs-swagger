/**
 * @author fputra on 01/08/21
 */
/**
 * Created by f.putra on 2019-05-02.
 */
let express = require('express');
let hello = express.Router();
let {utils} = require('../_helpers');

hello.get('/hello', (req, res, next) => {
    /* 	#swagger.tags = ['Hello']
        #swagger.description = 'hello controller' */
        utils.doResponse(res, 200, "HELLO")
})

module.exports = hello;
