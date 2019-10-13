
/**
 * Color Class is for Color Assets
 */
const MathUtility = require('../../utils/MathUtility');
const Asset = require('./Asset');

class Color extends Asset { }

Color.WHITE = '#ffffff';
Color.RED = '#ff0000';
Color.BLUE = '#0000ff';
Color.Default = Color.WHITE;
Color.colorArray = [Color.WHITE, Color.RED, Color.BLUE];

Color.getRandom = function () {
    randomNumber = MathUtility.getRandomNumber(0, Color.colorArray.length)
    return Color.colorArray[randomNumber];
};

Color.isValid = function (color) {
    if (Color.colorArray.indexOf(color) >= 0) {
        return true;
    }
    return false;
};

module.exports = Color;
