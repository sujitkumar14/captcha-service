
const MathUtility = require('../../utils/MathUtility');
const Asset = require('./Asset');

class Text extends Asset { }

Text.Delimiter = ' ';
Text.MinLetters = 4;
Text.MaxLetters = 6;
Text.Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Text.LowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
Text.UpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
Text.ArithmeticText = ['+'];

Text.Default = Text.Number;
Text.TextArray = [Text.Number, Text.LowerCaseLetters, Text.UpperCaseLetters];

Text.removeDelimiter = function (text) {
    return text.split(Text.Delimiter).join("");
}

Text.addDelimiter = function (text) {
    return text + Text.Delimiter;
}

Text.getRandom = function () {
    let randomLetters = MathUtility.getRandomNumber(Text.MinLetters, Text.MaxLetters);
    let i = 0;
    let text = '';
    for (i = 0; i < randomLetters; i++) {
        let randomTextArray = Text.TextArray[MathUtility.getRandomNumber(0, Text.TextArray.length)];
        let randomText = randomTextArray[MathUtility.getRandomNumber(0, randomTextArray.length)];
        text = text + randomText;
        text = Text.addDelimiter(text);
    }
    return text;
}

Text.getResult = function (text) {
    if (Text.isArithmetic(text)) {
        let textArray = text.split(Text.ArithmeticText[0]);
        return MathUtility.addNumbers(textArray[0] + textArray[1]);
    } else {
        return Text.removeDelimiter(text);
    }
}

Text.isArithmetic = function (text) {
    let arr = text.split(Text.ArithmeticText[0]);
    if (arr.length > 1) {
        return true;
    }
    return false;
}
Text.isValid = function (text) {
    return true;
}

module.exports = Text;
