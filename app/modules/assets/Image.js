
/**
 * Image Asset is a complex asset 
 * combination of raw asset
 */

let gm = require('gm').subClass({ imageMagick: true });
let Color = require('./Color');
let Noise = require('./Noise');
let Font = require('./Font');

class Image {

    /**
     * Initialize the gm image class
     * @param {Number} height height of an image
     * @param {Number} width width of an image
     * @param {Color} bgColor bg Color of an image
     */
    constructor(height = 50, width = 100, bgColor = Color.WHITE) {
        this.height = height;
        this.width = width;
        this.image = undefined;
        if (!Color.isValid(bgColor)) {
            bgColor = Color.WHITE;
        }
        this.bgColor = bgColor;
        this.image = gm(width, height, bgColor);
    }

    writeText(text, xPosition, yPosition) {
        xPosition = xPosition ? xPosition : 0;
        yPosition = yPosition ? yPosition : 0;
        this.image.drawText(xPosition, yPosition, text, "center");
        return this;
    }

    setFont(font) {
        if (!Font.isValid(font)) {
            return;
        }
        this.image.font(font);
        return this;
    }

    setRotation(angle) {
        this.image.rotate(this.bgColor, angle);
        return this;
    }

    setFontSize(size) {
        this.image.fontSize(size);
        return this;
    }

    addNoise(noise) {
        if (!Noise.isValid(noise)) {
            return;
        }
        this.image.noise(noise);
        return this;
    }

    writeImage(path) {
        return new Promise((resolve, reject) => {
            this.image.write(path, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = Image;
