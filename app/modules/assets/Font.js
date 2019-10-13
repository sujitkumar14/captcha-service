const MathUtility = require('../../utils/MathUtility');
const Asset = require('./Asset');

class Font extends Asset { }

Font.AppleMyungjo = 'AppleMyungjo.ttf';
Font.Zapfino = 'Zapfino.ttf';
Font.Default = Font.AppleMyungjo;
Font.fontArray = [Font.AppleMyungjo, Font.Zapfino];

Font.getRandom = function () {
    randomNumber = MathUtility.getRandomNumber(0, Font.colorArray.length)
    return Font.fontArray[randomNumber];
};

Font.isValid = function (font) {
    if (Font.fontArray.indexOf(font) >= 0) {
        return true;
    }
    return false;
};

module.exports = Font;
