
/**
 * Captcha Manager creates captcha, Validates captcha result
 */

const AssetManager = require('../assets/AssetManager');
const Text = require('../assets/Text');
const ImageCaptcha = require('./ImageCaptcha');
const UUID = require('uuid/v4');
const Redis = require('../../redis/functions');
const HelperUtiltiy = require('../../utils/helperUtility');

class CaptchaManager {

    /**
     * 
     * @param {string} type  - type of captcha ['plain', 'arithmetic']
     * @param {string} token - client token for which captch generates
     * @param {AssetManager} assetManager AssetsManager Object
     */
    constructor(type, token, assetManager) {
        this.type = type;
        this.token = token;
        this.assetManager = assetManager;
    }

    _getImagePath() {
        return global.getRootPath() + `/public/images/${UUID()}.jpg`;
    }

    /**
     * generate a image text
     * @param {string} type 
     * @return string 
     */
    _generateImageText(type) {
        switch (type) {
            case 'plain': return this._generateImagePlainText();
            case 'arithmetic': return this._generateImagePlainText();
            default: return this._generateImagePlainText();
        }
    }

    _generateImagePlainText() {
        return Text.getRandom();
    }

    /**
     * Create Image Captcha and sets a result in redis  
     * @return {string} path of the image
     */
    async createImageCaptcha() {
        try {
            let imagePath = this._getImagePath();
            this.assetManager.setText(this._generateImageText(this.type));
            this.assetManager.setPath(imagePath);
            let imageCaptcha = new ImageCaptcha();
            let isCreated = await imageCaptcha.createCaptcha(this.assetManager);
            let redis = new Redis();
            redis.set(this.token, Text.getResult(this.assetManager.getText()));
            redis.set(`${this.token}_file`, imagePath);
            return isCreated ? imagePath : '';
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async validateImageCaptcha(text) {
        try {
            let redis = new Redis();
            let captcha = await redis.get(this.token);
            this.deleteFile(this.token);
            return captcha == text;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async deleteFile(token) {
        let redis = new Redis();
        let path = await redis.get(`${token}_file`);
        HelperUtiltiy.deleteFile(path);
    }

}

module.exports = CaptchaManager;
