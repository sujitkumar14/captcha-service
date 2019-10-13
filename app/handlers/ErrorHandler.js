
class ErrorHandler {
    /**
     * 
     * @param {Object} res response object
     * @param {Object} type message type
     * @param {String} description optional description
     */
    static sendResponse(res, type, description = '') {
        let errorType = JSON.parse(type);
        let code = errorType.code;
        let message = errorType.message;
        let errorResponse = {

            'success': false,
            'message': message,
            'status': {
                'code': code,
                'description': description
            }
        };

        res.status(code).send(errorResponse);
    }
}

/**
* custom and standard message for this app
*/
ErrorHandler.message = {
    "INTERNAL_SERVER_ERROR": JSON.stringify({ "code": 500, "message": "Internal Server Error" }),
    "NOT_FOUND": JSON.stringify({ "code": 404, "message": "Not Found" }),
    "INVALID_PARAMETER": JSON.stringify({ "code": 401, "message": "invalid parameter" })
};

module.exports = ErrorHandler;
