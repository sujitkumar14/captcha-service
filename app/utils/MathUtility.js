

class MathUtility {


    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    static addNumbers(a, b) {
        return parseInt(a) + parseInt(b);
    }
}

module.exports = MathUtility;