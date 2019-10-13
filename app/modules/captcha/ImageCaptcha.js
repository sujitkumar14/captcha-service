
const AssetManager = require('../assets/AssetManager');
let Captcha = require('./Captcha');
const Image = require('../assets/Image');
const ErrorHandler = require('../../handlers/ErrorHandler');

class ImageCaptcha extends Captcha {

    /**
     * createCaptcha creates an captcha
     * @param {AssetManager} assetManager assetManager object
     * @return {string} path
     */
    async createCaptcha(assetManager) {
        try {
            if (!(assetManager instanceof AssetManager)) {
                return false;
            }
            let image = new Image(assetManager.getHeight(), assetManager.getWidth(), assetManager.getBgColor());
            image
                .writeText(assetManager.getText())
                .setFont(assetManager.getFont())
                .setRotation(assetManager.getAngle())
                .addNoise(assetManager.getNoise());
            await image.writeImage(assetManager.getPath());
            return true;
        } catch (err) {
            throw new Error(ErrorHandler.message.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = ImageCaptcha;
