/**
 * Created by f.putra on 25/06/18.
 */
let moment = require('moment/moment')
let utils = {
    doResponse: (res, status, body) => {
        return res.status(status).json({status: status, message: body})
    },
    sendFailedResponse: (res, message, body) => {
        return res.json({
            status: false,
            message: message,
            body: body
        })
    },
    sendSuccessResponse: (res, status, message, body) => {
        return res.json({
            status: true,
            message: message,
            body: body
        })
    },
};
module.exports = utils;
