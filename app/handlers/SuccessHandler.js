
class SuccessHandler {

    /**
     * contructor of a success handler
     * @param {Response} response response object
     * @param {customObject} type response type
     */
    constructor(response, type) {
        this.response = response;
        this.message = type.message;
        this.code = type.code;
    }

    setResponseContentType(type) {
        this.type = type;
    }

    sendResponse(data, description = '') {

        if (this.type != 'image') {

            let response = {

                'success': true,
                'message': this.message,
                'data': data,
                'status': {
                    'code': this.code,
                    'description': description
                }
            };
            this.response.status(this.code).send(response);

        } else {
            this.response.status(this.code).sendFile(data);
        }

    }
}

SuccessHandler.message = {
    "IMAGE_CAPTCHA": { "code": 200, "message": "image captcha" }
};

module.exports = SuccessHandler;
