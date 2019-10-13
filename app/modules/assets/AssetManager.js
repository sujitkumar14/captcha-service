
/**
 * AssetManager is a Asset Manger to safely set and get
 * Assets 
 */

const Color = require('./Color');
const Font = require('./Font');
const Noise = require('./Noise');
const MathUtility = require('../../utils/MathUtility');

class AssetManager {

    setAngle(angle) {
        this.angle = angle;
    }

    setPath(path) {
        this.path = path;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setBgColor(color) {
        this.color = color;
    }

    setFont(font) {
        this.font = font;
    }

    setNoise(noise) {
        this.noise = noise;
    }

    setText(text) {
        this.text = text;
    }

    getHeight() {
        return this.height ? this.height : 50;
    }

    getWidth() {
        return this.width ? this.width : 100;
    }

    getBgColor() {
        if (Color.isValid(this.color)) {
            return this.color;
        }
        return Color.Default;
    }

    getFont() {
        if (Font.isValid(this.font)) {
            return this.font;
        }
        return Font.Default;
    }

    getNoise() {
        if (Noise.isValid(this.noise)) {
            return this.noise;
        }
        return Noise.Default;
    }

    getText() {
        return this.text;
    }

    getPath() {
        return this.path;
    }

    getAngle() {
        if (isNaN(this.angle)) {
            return MathUtility.getRandomNumber(0, 50);
        }
        return this.angle;
    }
}

module.exports = AssetManager;
