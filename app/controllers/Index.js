
const ErrorHandler = require('../handlers/ErrorHandler');
const SuccessHandler = require('../handlers/SuccessHandler');
const AssetManager = require('../modules/assets/AssetManager');
const CaptchaManager = require('../modules/captcha/CaptchaManager');

class Index {

    /**
     * imageCaptcha handles create image captcha requesst
     * and in response returns a image 
     * @param {object} request request object
     * @param {object} response response object
     */
    static async imageCatcha(request, response) {
        try {
            let params = request.query;
            let captchaType = params['type'];
            let token = params['token'];

            if (!token) {
                ErrorHandler.sendResponse(response, ErrorHandler.message.INVALID_PARAMETER, "token is required");
            } else {

                let assetManager = new AssetManager();
                assetManager.setBgColor(params['bgColor']);
                assetManager.setNoise(params['noise']);
                assetManager.setFont(params['font']);

                let captcha = new CaptchaManager(captchaType, token, assetManager);
                let path = await captcha.createImageCaptcha();
                let successHandle = new SuccessHandler(response, SuccessHandler.message.IMAGE_CAPTCHA);
                successHandle.setResponseContentType('image');
                successHandle.sendResponse(path);
            }
        } catch (err) {
            ErrorHandler.sendResponse(response, err.message);
        }
    }

    static async validateImageCaptcha(request, response) {
        try {
            let body = request.body;
            let token = body['token'];
            let text = body['text'];
            let captcha = new CaptchaManager('plain', token);
            let isValid = await captcha.validateImageCaptcha(text);

            let successHandler = new SuccessHandler(response, SuccessHandler.message.IMAGE_CAPTCHA);
            successHandler.sendResponse(isValid);
        } catch (err) {
            ErrorHandler.sendResponse(response, err.message);
        }

    }
}

module.exports = Index;
